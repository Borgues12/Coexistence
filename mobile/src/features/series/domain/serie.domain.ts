import { z } from "zod";
import { TMDB_DURACION_EPISODIO_DEFECTO_MIN } from "../../../core/constants/tmdb.constantes";

export const serieEstadoSchema = z.enum(["activa", "temporada_finalizada"]);

export const episodioSerieSchema = z.object({
  episodioNumero: z.number().int().positive(),
  episodioDuracion: z.number().int().positive().nullable(), // null = TMDB sin runtime
});
export type EpisodioSerie = z.infer<typeof episodioSerieSchema>;

export const serieSchema = z
  .object({
    serieSalaId: z.string().min(1),
    serieTmdbId: z.number().int().positive(),
    serieTitulo: z.string().min(1),
    seriePosterPath: z.string().nullable(),
    serieTemporadaActual: z.number().int().positive(),
    serieEpisodioActual: z.number().int().positive(),
    // Minutos de cada episodio de la temporada; null = TMDB no trae runtime
    serieEpisodiosTemporada: z.array(episodioSerieSchema).min(1),
    serieEstado: serieEstadoSchema,
    serieElegidaPorUid: z.string().min(1),
  })
  .refine(
  (s) => s.serieEpisodiosTemporada.some(
    (e) => e.episodioNumero === s.serieEpisodioActual,
  ),
  {
    message: "El episodio actual no existe en la temporada",
    path: ["serieEpisodioActual"],
  },
);

export type Serie = z.infer<typeof serieSchema>;
export type SerieEstado = z.infer<typeof serieEstadoSchema>;

export type SiguienteEpisodio =
  | {
      serieEstado: "activa";
      serieTemporadaActual: number;
      serieEpisodioActual: number;
    }
  | { serieEstado: "temporada_finalizada" };

/** Duración (min) del episodio indicado; usa el valor por defecto si no hay runtime. */
export function getEpisodeDuration(
  episodios: ReadonlyArray<EpisodioSerie>,
  numero: number,
): number {
  return (
    episodios.find((e) => e.episodioNumero === numero)?.episodioDuracion ??
    TMDB_DURACION_EPISODIO_DEFECTO_MIN
  );
}

/** Momento exacto en que termina la sesión: inicio + duración del episodio. */
export function calculateSessionEndTime(inicio: Date, duracionMin: number): Date {
  return new Date(inicio.getTime() + duracionMin * 60_000);
}

/** Siguiente puntero de la serie, o fin de temporada si era el último episodio. */
export function calculateNextEpisode(
  temporada: number,
  episodio: number,
  episodios: ReadonlyArray<EpisodioSerie>,
): SiguienteEpisodio {
  // La lista viene ordenada por número (getSeasonEpisodes la ordena)
  const siguiente = episodios.find((e) => e.episodioNumero > episodio);
  if (!siguiente) return { serieEstado: "temporada_finalizada" };
  return {
    serieEstado: "activa",
    serieTemporadaActual: temporada,
    serieEpisodioActual: siguiente.episodioNumero,
  };
}

// Tipos de datos para la comunicación con TMDB
export type ResultadoBusquedaSerie = {
  serieTmdbId: number;
  serieTitulo: string;
  seriePosterPath: string | null;
};

// Tipos de datos para la comunicación con TMDB
export type TemporadaResumen = {
  temporadaNumero: number;
  temporadaCantidadEpisodios: number;
};

export type SerieDetalle = ResultadoBusquedaSerie & {
  serieTemporadas: TemporadaResumen[];
};

export type EpisodioTemporada = {
  episodioNumero: number;
  episodioNombre: string;
  episodioDuracion: number | null; // minutos; null si TMDB no trae runtime
};