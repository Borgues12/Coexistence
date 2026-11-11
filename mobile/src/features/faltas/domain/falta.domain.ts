import { z } from "zod";

export const faltaTipoSchema = z.enum(["ausencia", "abandono", "retraso"]);

export const faltaSchema = z.object({
  faltaId: z.string(),
  faltaUserUid: z.string(),
  faltaSalaId: z.string(),
  faltaSesionId: z.string(),
  faltaFecha: z.string(), // "YYYY-MM-DD"
  faltaTipo: faltaTipoSchema,
  faltaMotivo: z.string().nullable(),
  faltaEstado: z.string(), // hoy solo "activa"; queda abierto para justificantes
});

export type Falta = z.infer<typeof faltaSchema>;
export type FaltaTipo = z.infer<typeof faltaTipoSchema>;

// Cuenta solo las faltas activas, agrupadas por uid
export function countActiveFaultsByUser(faltas: Falta[]): Record<string, number> {
  return faltas.reduce<Record<string, number>>((acc, falta) => {
    if (falta.faltaEstado !== "activa") return acc;
    acc[falta.faltaUserUid] = (acc[falta.faltaUserUid] ?? 0) + 1;
    return acc;
  }, {});
}

// Más reciente primero (el formato YYYY-MM-DD ordena bien como texto)
export function sortFaultsByDateDesc(faltas: Falta[]): Falta[] {
  return [...faltas].sort((a, b) => b.faltaFecha.localeCompare(a.faltaFecha));
}

// Orden en que se muestran las secciones en la pantalla
export const FALTA_TIPOS: FaltaTipo[] = ["retraso", "ausencia", "abandono"];

// Reparte las faltas activas en una caja por tipo, conservando el orden de entrada
export function groupFaultsByType(faltas: Falta[]): Record<FaltaTipo, Falta[]> {
  const grupos: Record<FaltaTipo, Falta[]> = {
    retraso: [],
    ausencia: [],
    abandono: [],
  };
  for (const falta of faltas) {
    if (falta.faltaEstado !== "activa") continue;
    grupos[falta.faltaTipo].push(falta);
  }
  return grupos;
}