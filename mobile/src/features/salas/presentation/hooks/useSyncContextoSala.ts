import { useEffect } from "react";
import { useAuthStore } from "../../../auth/presentation/store/use-auth-store";
import { useContextoSalaStore } from "../../../../shared/store/contextoSala.store";
import { Sala } from "../../domain/sala.domain";

export function useSyncContextoSala(sala: Sala | null) {
  const userUid = useAuthStore((s) => s.usuario?.userUid ?? null);
  const setContext = useContextoSalaStore((s) => s.setContext);

  useEffect(() => {
    setContext({
      salaId: sala?.salaId ?? null,
      salaAdminUid: sala?.salaAdminUid ?? null,
      userUid,
      salaHoraInicio: sala?.salaHoraInicio ?? null,
    });
  }, [sala, userUid, setContext]);
}