import { useCallback, useEffect, useMemo, useState } from "react";
import { useContextoSalaStore } from "../../../../shared/store/contextoSala.store";
import {
  calculateSessionEndTime,
  getEpisodeDuration,
} from "../../domain/serie.domain";
import { useSeriesStore } from "../store/series.store";
import { timeStringToDate } from "../../../../core/utils/fecha";
import { dateToTimeString } from "../../../../shared/services/hora";


// HOOK: maneja la información de la serie activa de la sala, y el horario del episodio actual
export function useSerieActiva() {
  const [cambiando, setCambiando] = useState(false);
  const startChange = useCallback(() => setCambiando(true), []);
  const cancelChange = useCallback(() => setCambiando(false), []);
  const salaId = useContextoSalaStore((s) => s.salaId);
  const salaHoraInicio = useContextoSalaStore((s) => s.salaHoraInicio);
  const serieActiva = useSeriesStore((s) => s.serieActiva);
  const cargando = useSeriesStore((s) => s.serieActivaCargando);
  const subscribeActiveSeries = useSeriesStore((s) => s.subscribeActiveSeries);

  useEffect(() => {
    setCambiando(false);
  }, [serieActiva]);

  useEffect(() => {
    if (!salaId) return;
    return subscribeActiveSeries(salaId);
  }, [salaId, subscribeActiveSeries]);

  const horario = useMemo(() => {
    if (!serieActiva || !salaHoraInicio) return null;
    const episodio = serieActiva.serieEpisodiosTemporada.find(
    (e) => e.episodioNumero === serieActiva.serieEpisodioActual,
  );
    const duracion = getEpisodeDuration(
      serieActiva.serieEpisodiosTemporada,
      serieActiva.serieEpisodioActual,
    );
    const inicio = timeStringToDate(salaHoraInicio);
    const fin = calculateSessionEndTime(inicio, duracion);
    return {
      nombreEpisodio: episodio?.episodioNombre ?? "",
      duracion,
      horaInicio: salaHoraInicio,
      horaFin: dateToTimeString(fin),
    };
  }, [serieActiva, salaHoraInicio]);

  return {
    serieActiva,
    cargando,
    horario,
    cambiando,
    startChange,
    cancelChange,
  };
}
