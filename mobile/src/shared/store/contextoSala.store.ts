import { create } from "zustand";

type ContextoSala = {
  salaId: string | null;
  salaAdminUid: string | null;
  userUid: string | null;
  salaHoraInicio: string | null;
};

type ContextoSalaState = ContextoSala & {
  setContext: (contexto: ContextoSala) => void;
  clearContext: () => void;
};

const vacio: ContextoSala = { salaId: null, salaAdminUid: null, userUid: null, salaHoraInicio: null };

export const useContextoSalaStore = create<ContextoSalaState>((set) => ({
  ...vacio,
  setContext: (contexto) => set(contexto),
  clearContext: () => set(vacio),
}));
