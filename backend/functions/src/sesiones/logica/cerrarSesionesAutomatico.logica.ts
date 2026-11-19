// backend/functions/src/sesiones/logica/cerrarSesionesAutomatico.logica.ts
import type { Firestore, WriteBatch } from "firebase-admin/firestore";
import type { Notificador } from "../../notificaciones/sala-notificaciones";
import { getEcuadorDate, getEcuadorMinutes, parseTimeToMinutes } from "../../shared/hora";
import { MINUTOS_CIERRE } from "../../shared/tiempo-sesion";
import { addFaultToBatch } from "../../faltas/logica/crearFalta.logica";


type EpisodioDoc = {
  episodioNumero: number;
  episodioNombre?: string;
  episodioDuracion?: number | null;
};

// FUNCIÓN: Avanza serieEpisodioActual al siguiente episodio; si no hay más, marca "temporada_finalizada"
async function addAdvanceEpisodeToBatch(
  db: Firestore,
  batch: WriteBatch,
  salaId: string,
): Promise<void> {
  const serieRef = db.collection("series").doc(salaId);
  const serieSnap = await serieRef.get();

  if (!serieSnap.exists) return;

  const serie = serieSnap.data();
  if (!serie || serie.serieEstado !== "activa") return;

  const episodios: EpisodioDoc[] = Array.isArray(serie.serieEpisodiosTemporada)
    ? serie.serieEpisodiosTemporada
    : [];
  const episodioActual: number = serie.serieEpisodioActual;

  const siguiente = episodios.find((e) => e.episodioNumero > episodioActual);

  if (!siguiente) {
    batch.update(serieRef, {
      serieEstado: "temporada_finalizada",
    });
    return;
  }

  batch.update(serieRef, {
    serieEstado: "activa",
    serieEpisodioActual: siguiente.episodioNumero,
  });
}

// FUNCIÓN: cierra sesiones cuya ventana ya venció y genera las faltas correspondientes
export async function closeExpiredSessions(
  db: Firestore,
  ahora: Date,
  notificar: Notificador,
): Promise<number> {
  const fechaHoy = getEcuadorDate(ahora);
  const minutosAhora = getEcuadorMinutes(ahora);

  const sesionesSnapshot = await db
    .collection("sesiones")
    .where("sesionEstado", "in", ["pendiente", "en_curso"])
    .get();

  let sesionesCerradas = 0;

  for (const sesionDoc of sesionesSnapshot.docs) {
    const sesion = sesionDoc.data();

    // una sesión de un día anterior siempre está vencida
    const esDeDiaAnterior = sesion.sesionFecha < fechaHoy;
    const minutosLimite =
      parseTimeToMinutes(sesion.sesionHoraInicio) + MINUTOS_CIERRE;
    if (!esDeDiaAnterior && minutosAhora < minutosLimite) continue;

    const salaDoc = await db.collection("salas").doc(sesion.sesionSalaId).get();
    const salaMiembros: string[] = salaDoc.data()?.salaMiembros ?? [];

    const batch = db.batch();
    let titulo: string;
    let cuerpo: string;

    if (sesion.sesionEstado === "pendiente") {
      batch.update(sesionDoc.ref, { sesionEstado: "perdida" });
      for (const userUid of salaMiembros) {
        addFaultToBatch(db, batch, {
          sesionId: sesionDoc.id,
          salaId: sesion.sesionSalaId,
          fecha: sesion.sesionFecha,
          userUid: userUid,
          tipo: "abandono",
          motivo: null,
        });
      }
      titulo = "Sesión perdida";
      cuerpo = "Nadie inició la sesión: se registró falta a todos los miembros.";
    } else {
      batch.update(sesionDoc.ref, { sesionEstado: "finalizada" });

      // si la sesión se cerró, se avanza al siguiente episodio de la serie
      await addAdvanceEpisodeToBatch(db, batch, sesion.sesionSalaId);

      // la subcolección real es checkins; el id de cada doc es el uid del miembro
      const checkinsSnapshot = await sesionDoc.ref.collection("checkins").get();
      const uidsConCheckin = new Set(checkinsSnapshot.docs.map((d) => d.id));

      let ausentes = 0;
      for (const userUid of salaMiembros) {
        if (!uidsConCheckin.has(userUid)) {
          addFaultToBatch(db, batch, {
            sesionId: sesionDoc.id,
            salaId: sesion.sesionSalaId,
            fecha: sesion.sesionFecha,
            userUid: userUid,
            tipo: "ausencia",
            motivo: null,
          });
          ausentes++;
        }
      }
      titulo = "Sesión cerrada";
      cuerpo =
        ausentes === 0
          ? "Todos registraron su asistencia."
          : `${ausentes} miembro(s) sin check-in recibieron falta.`;
    }

    await batch.commit();
    sesionesCerradas++;

    // se notifica después de guardar, y no si es una sesión rezagada de otro día
    if (!esDeDiaAnterior) {
      try {
        await notificar(sesion.sesionSalaId, titulo, cuerpo);
      } catch (error) {
        console.warn(`Notificación de cierre fallida para sala_${sesion.sesionSalaId}:`, error);
      }
    }
  }

  return sesionesCerradas;
}

