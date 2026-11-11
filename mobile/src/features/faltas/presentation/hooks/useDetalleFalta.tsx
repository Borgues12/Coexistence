// useDetalleFalta.tsx
import { useCallback, useState } from "react";
import type { Falta } from "../../domain/falta.domain";

export function useDetalleFalta() {
  const [faltaSeleccionada, setFaltaSeleccionada] = useState<Falta | null>(null);

  // Abre el detalle de la falta seleccionada y guarda que falta se seleccionó. 
  const openDetail = useCallback(
    (falta: Falta) => setFaltaSeleccionada(falta),
    [],
  );
  const closeDetail = useCallback(() => setFaltaSeleccionada(null), []);

  return { faltaSeleccionada, openDetail, closeDetail };
}