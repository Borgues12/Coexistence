import { useEffect, useMemo } from "react";
import { useFaltasStore } from "../store/faltas.store";
import {
  groupFaultsByType,
  sortFaultsByDateDesc,
} from "../../domain/falta.domain";

export function useFaltasSala(
  salaId: string | null | undefined,
  userUid: string | null | undefined,
) {
  const {
    faltasLista,
    faltasCargando,
    faltasError,
    subscribeToRoom,
    unsubscribe,
  } = useFaltasStore();

  useEffect(() => {
    if (!salaId) return;
    subscribeToRoom(salaId);
    return unsubscribe;
  }, [salaId, subscribeToRoom, unsubscribe]);

  const faltasPropias = useMemo(
    () =>
      sortFaultsByDateDesc(faltasLista).filter(
        (falta) => falta.faltaUserUid === userUid,
      ),
    [faltasLista, userUid],
  );

  const faltasPorTipo = useMemo(
    () => groupFaultsByType(faltasPropias),
    [faltasPropias],
  );

  return { faltasPropias, faltasPorTipo, faltasCargando, faltasError };
}