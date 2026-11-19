//src/features/series/presentation/hooks/useSeriesSearch.ts
import { useEffect, useState } from "react";
import {
  SERIES_BUSQUEDA_DEBOUNCE_MS,
  SERIES_BUSQUEDA_MIN_CARACTERES,
} from "../../../../core/constants/series.constantes";
import type { ResultadoBusquedaSerie } from "../../domain/serie.domain";
import { useSeriesStore } from "../store/series.store";

export function useSeriesSearch() {
  const searchSeries = useSeriesStore((s) => s.searchSeries);

  const [texto, setTexto] = useState("");
  const [resultados, setResultados] = useState<ResultadoBusquedaSerie[]>([]);
  const [buscando, setBuscando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const consulta = texto.trim();

    if (consulta.length < SERIES_BUSQUEDA_MIN_CARACTERES) {
      setResultados([]);
      setBuscando(false);
      setError(null);
      return;
    }

    let vigente = true;
    const temporizador = setTimeout(async () => {
      setBuscando(true);
      setError(null);
      try {
        const encontrados = await searchSeries(consulta);
        if (vigente) setResultados(encontrados);
      } catch {
        if (vigente) setError("No se pudo buscar. Revisa tu conexión.");
      } finally {
        if (vigente) setBuscando(false);
      }
    }, SERIES_BUSQUEDA_DEBOUNCE_MS);

    // Se ejecuta antes del siguiente efecto: cancela el temporizador
    // y descarta cualquier respuesta que llegue tarde
    return () => {
      vigente = false;
      clearTimeout(temporizador);
    };
  }, [texto, searchSeries]);

  return { texto, setTexto, resultados, buscando, error };
}
