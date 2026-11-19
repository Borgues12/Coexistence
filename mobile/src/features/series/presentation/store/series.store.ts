import { create } from "zustand";
import * as tmdb from "../../data/seriesTmdb.repository";
import * as seriesRepo from "../../data/series.repository";
import type {
  EpisodioTemporada,
  ResultadoBusquedaSerie,
  Serie,
  SerieDetalle,
} from "../../domain/serie.domain";

type SeleccionSerie = {
  salaId: string;
  userUid: string;
  serie: ResultadoBusquedaSerie;
  temporada: number;
  episodio: number;
  episodios: EpisodioTemporada[];
};

type SeriesState = {
  serieActiva: Serie | null;
  serieEsAdmin: boolean;
  serieCargando: boolean;
  serieError: string | null;
  serieActivaCargando: boolean;
  subscribeActiveSeries: (salaId: string) => () => void;

  setAdminFlag: (userUid: string, salaAdminUid: string) => void;

  searchSeries: (texto: string) => Promise<ResultadoBusquedaSerie[]>;
  getSeriesDetail: (tmdbId: number) => Promise<SerieDetalle>;
  getSeasonEpisodes: (
    tmdbId: number,
    temporada: number,
  ) => Promise<EpisodioTemporada[]>;
  confirmSelection: (seleccion: SeleccionSerie) => Promise<boolean>;
  reset: () => void;
};

const estadoInicial = {
  serieActiva: null,
  serieEsAdmin: false,
  serieCargando: false,
  serieError: null,
  serieActivaCargando: true,
};

export const useSeriesStore = create<SeriesState>((set, get) => ({
  ...estadoInicial,

  setAdminFlag: (_userUid, _salaAdminUid) => {
    set({ serieEsAdmin: _userUid === _salaAdminUid });
  },

  // Buscar no guarda nada: solo reenvía al repositorio de TMDB.
  // Los errores suben al hook, que los muestra junto a su lista.
  searchSeries: (texto) => tmdb.searchSeries(texto),
  getSeriesDetail: (tmdbId) => tmdb.getSeriesDetail(tmdbId),
  getSeasonEpisodes: (tmdbId, temporada) =>
    tmdb.getSeasonEpisodes(tmdbId, temporada),

  confirmSelection: async (seleccion) => {
    // Regla de negocio: solo el admin elige serie
    if (!get().serieEsAdmin) {
      set({ serieError: "Solo el administrador puede elegir la serie." });
      return false;
    }

    const serie: Serie = {
      serieSalaId: seleccion.salaId,
      serieTmdbId: seleccion.serie.serieTmdbId,
      serieTitulo: seleccion.serie.serieTitulo,
      seriePosterPath: seleccion.serie.seriePosterPath,
      serieTemporadaActual: seleccion.temporada,
      serieEpisodioActual: seleccion.episodio,
      serieEpisodiosTemporada: seleccion.episodios.map((e) => ({
        episodioNumero: e.episodioNumero,
        episodioNombre: e.episodioNombre,
        episodioDuracion: e.episodioDuracion,
      })),
      serieEstado: "activa",
      serieElegidaPorUid: seleccion.userUid,
    };

    set({ serieCargando: true, serieError: null });
    try {
      await seriesRepo.saveSelection(serie);
      set({ serieCargando: false });
      return true;
    } catch {
      set({
        serieCargando: false,
        serieError: "No se pudo guardar la serie. Intenta de nuevo.",
      });
      return false;
    }
  },
  // CASO: cargar la serie activa de la sala
  subscribeActiveSeries: (salaId) => {
    set({ serieActivaCargando: true });
    return seriesRepo.subscribeToActiveByRoom(
      salaId,
      (serie) => set({ serieActiva: serie, serieActivaCargando: false }),
      () =>
        set({
          serieActivaCargando: false,
          serieError: "No se pudo cargar la serie activa.",
        }),
    );
  },
  reset: () => set(estadoInicial),
}));
