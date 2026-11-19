export const COLLECTIONS = {
  SALAS: "salas",
  USUARIOS: "usuarios",
  SESIONES: "sesiones",
  CHECKINS: "checkins",
  SERIES: "series",
} as const;

export type CollectionName = typeof COLLECTIONS[keyof typeof COLLECTIONS];