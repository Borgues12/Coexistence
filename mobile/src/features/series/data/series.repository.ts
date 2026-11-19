import {
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  Unsubscribe,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../shared/services/firebase";
import { EpisodioSerie, serieSchema, type Serie } from "../domain/serie.domain";
import { COLLECTIONS } from "../../../core/constants/colecciones";

// El id del documento ES el id de la sala: garantiza una sola serie por sala
const refSerie = (salaId: string) => doc(db, COLLECTIONS.SERIES, salaId);

// FUNCTION: obtiene la serie activa de la sala, o null si no hay ninguna
export async function getActiveByRoom(salaId: string): Promise<Serie | null> {
  const snap = await getDoc(refSerie(salaId));
  if (!snap.exists()) return null;
  return serieSchema.parse(snap.data());
}

// FUNCTION: guarda la serie activa de la sala
export async function saveSelection(serie: Serie): Promise<void> {
  const valida = serieSchema.parse(serie); // falla antes de escribir si algo viene mal
  await setDoc(refSerie(valida.serieSalaId), valida);
}

// FUNCTION: actualiza el puntero de la serie activa de la sala
export async function updateStartPoint(
  salaId: string,
  temporada: number,
  episodio: number,
  episodios: ReadonlyArray<EpisodioSerie>,
): Promise<void> {
  await updateDoc(refSerie(salaId), {
    serieTemporadaActual: temporada,
    serieEpisodioActual: episodio,
    serieEpisodiosTemporada: [...episodios],
    serieEstado: "activa",
  });
}

// FUNCTION: escucha cambios en la serie activa de la sala
export function subscribeToActiveByRoom(
  salaId: string,
  onChange: (serie: Serie | null) => void,
  onError: (error: Error) => void,
): Unsubscribe {
  return onSnapshot(
    doc(db, COLLECTIONS.SERIES, salaId),
    (snap) => {
      try {
        onChange(snap.exists() ? serieSchema.parse(snap.data()) : null);
      } catch (e) {
        onError(e as Error);
      }
    },
    onError,
  );
}
