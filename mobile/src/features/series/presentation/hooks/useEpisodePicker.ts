//src/features/series/presentation/hooks/useEpisodePicker.ts
import { useState } from "react";
import type {
  EpisodioTemporada,
  ResultadoBusquedaSerie,
  TemporadaResumen,
} from "../../domain/serie.domain";
import { useSeriesStore } from "../store/series.store";

export function useEpisodePicker(salaId: string, userUid: string) {
  const getSeriesDetail = useSeriesStore((s) => s.getSeriesDetail);
  const getSeasonEpisodes = useSeriesStore((s) => s.getSeasonEpisodes);
  const confirmSelection = useSeriesStore((s) => s.confirmSelection);
  const guardando = useSeriesStore((s) => s.serieCargando);
  const errorGuardado = useSeriesStore((s) => s.serieError);

  const [serie, setSerie] = useState<ResultadoBusquedaSerie | null>(null);
  const [temporadas, setTemporadas] = useState<TemporadaResumen[]>([]);
  const [temporada, setTemporada] = useState<number | null>(null);
  const [episodios, setEpisodios] = useState<EpisodioTemporada[]>([]);
  const [episodio, setEpisodio] = useState<number | null>(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectSeries = async (elegida: ResultadoBusquedaSerie) => {
    setSerie(elegida);
    setTemporadas([]);
    setTemporada(null);
    setEpisodios([]);
    setEpisodio(null);
    setCargando(true);
    setError(null);
    try {
      const detalle = await getSeriesDetail(elegida.serieTmdbId);
      setTemporadas(detalle.serieTemporadas);
    } catch (e) {
      console.log("[series] detalle falló", e);
      setError("No se pudieron cargar las temporadas.");
    } finally {
      setCargando(false);
    }
  };

  const selectSeason = async (numero: number) => {
    if (!serie) return;
    setTemporada(numero);
    setEpisodios([]);
    setEpisodio(null);
    setCargando(true);
    setError(null);
    try {
      const lista = await getSeasonEpisodes(serie.serieTmdbId, numero);
      setEpisodios(lista);
      setEpisodio(lista[0]?.episodioNumero ?? null);
    } catch {
      setError("No se pudieron cargar los episodios.");
    } finally {
      setCargando(false);
    }
  };

  const puedeConfirmar =
    serie !== null && temporada !== null && episodio !== null && !cargando;

  const confirm = async (): Promise<boolean> => {
    if (!serie || temporada === null || episodio === null) return false;
    return confirmSelection({
      salaId,
      userUid,
      serie,
      temporada,
      episodio,
      episodios,
    });
  };

  return {
    serie,
    temporadas,
    temporada,
    episodios,
    episodio,
    setEpisodio,
    cargando,
    guardando,
    error: error ?? errorGuardado,
    puedeConfirmar,
    selectSeries,
    selectSeason,
    confirm,
  };
}
