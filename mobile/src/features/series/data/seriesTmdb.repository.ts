import { clienteTmdb } from "../../../shared/services/tmdb.cliente";
import type {
  EpisodioTemporada,
  ResultadoBusquedaSerie,
  SerieDetalle,
} from "../domain/serie.domain";

// Formas crudas de TMDB: solo los campos que usamos
type TmdbSerieItem = { id: number; name: string; poster_path: string | null };
type TmdbBusqueda = { results: TmdbSerieItem[] };
type TmdbDetalle = TmdbSerieItem & {
  seasons: { season_number: number; episode_count: number }[];
};
type TmdbTemporada = {
  episodes: { episode_number: number; name: string; runtime: number | null }[];
};


//FUNCTION: busqueda de series por texto
export async function searchSeries(
  texto: string,
): Promise<ResultadoBusquedaSerie[]> {
  const { data } = await clienteTmdb.get<TmdbBusqueda>("/search/tv", {
    params: { query: texto },
  });
  return data.results.map((r) => ({
    serieTmdbId: r.id,
    serieTitulo: r.name,
    seriePosterPath: r.poster_path,
  }));
}

//FUNCTION: extrae el detalle de una serie
export async function getSeriesDetail(tmdbId: number): Promise<SerieDetalle> {
  const { data } = await clienteTmdb.get<TmdbDetalle>(`/tv/${tmdbId}`);
  return {
    serieTmdbId: data.id,
    serieTitulo: data.name,
    seriePosterPath: data.poster_path,
    serieTemporadas: data.seasons
      .filter((t) => t.season_number > 0 && t.episode_count > 0) // ignora especiales (temporada 0)
      .map((t) => ({
        temporadaNumero: t.season_number,
        temporadaCantidadEpisodios: t.episode_count,
      })),
  };
}

//FUNCTION: extrae los episodios de una temporada
export async function getSeasonEpisodes(
  tmdbId: number,
  temporada: number,
): Promise<EpisodioTemporada[]> {
  const { data } = await clienteTmdb.get<TmdbTemporada>(
    `/tv/${tmdbId}/season/${temporada}`,
  );
  return data.episodes
    .map((e) => ({
      episodioNumero: e.episode_number,
      episodioNombre: e.name,
      episodioDuracion: e.runtime ?? null,
    }))
    .sort((a, b) => a.episodioNumero - b.episodioNumero);
}