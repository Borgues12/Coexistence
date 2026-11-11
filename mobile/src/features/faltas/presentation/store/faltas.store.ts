// mobile/src/features/faltas/presentation/store/faltas.store.ts
import { create } from "zustand";
import { Falta } from "../../domain/falta.domain";
import { subscribeToFaultsByRoom } from "../../data/faltas.repository";

console.log("[store]", { create: typeof create, sub: typeof subscribeToFaultsByRoom });

interface FaltasState {
  faltasLista: Falta[];
  faltasCargando: boolean;
  faltasError: string | null;
  subscribeToRoom: (salaId: string) => void;
  unsubscribe: () => void;
}

let cancelarSuscripcion: (() => void) | null = null;

export const useFaltasStore = create<FaltasState>((set) => ({
  faltasLista: [],
  faltasCargando: true,
  faltasError: null,

  subscribeToRoom: (salaId) => {
    cancelarSuscripcion?.(); // evita listeners duplicados si cambia la sala
    set({ faltasCargando: true, faltasError: null });
    cancelarSuscripcion = subscribeToFaultsByRoom(
      salaId,
      (faltas) => set({ faltasLista: faltas, faltasCargando: false }),
      (error) => set({ faltasError: error.message, faltasCargando: false }),
    );
  },

  unsubscribe: () => {
    cancelarSuscripcion?.();
    cancelarSuscripcion = null;
    set({ faltasLista: [], faltasCargando: true });
  },
}));