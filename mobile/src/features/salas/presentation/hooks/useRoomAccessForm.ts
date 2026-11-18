import { useState } from 'react';
import { useAuthStore } from '../../../auth/presentation/store/use-auth-store';
import { useSalaStore } from '../store/use-sala-store';
import {
  isValidRoomInput,
  normalizeRoomInput,
  type ModoAccesoSala,
} from '../../domain/sala.domain';

// FUNCIÓN: hook para manejar el formulario de acceso a la sala (crear o unirse)
export function useRoomAccessForm() {
  const [modoActual, setModoActual] = useState<ModoAccesoSala>('crear');
  const [texto, setTexto] = useState('');

  const user = useAuthStore((state) => state.user);
  const { crear, unirse, reset, isLoading, error, sala } = useSalaStore();

  const puedeEnviar = !!user && !isLoading && isValidRoomInput(modoActual, texto);

  // FUNCION: manejar el cambio de modo (crear o unirse)
  function handleChangeMode(modo: ModoAccesoSala) {
    if (modo === modoActual) return;
    setModoActual(modo);
    setTexto('');
    reset();
  }

  // FUNCION: manejar el submit del formulario
  function handleSubmit() {
    if (!user || !puedeEnviar) return;
    const valor = normalizeRoomInput(modoActual, texto);
    if (modoActual === 'crear') {
      crear(valor, user.uid);
    } else {
      unirse(valor, user.uid);
    }
  }

  const mensajeResultado = !sala
    ? null
    : modoActual === 'crear'
      ? `Código de invitación: ${sala.salaCodigoInvitacion}`
      : `Te uniste a: ${sala.salaNombre}`;

  return {
    modoActual,
    texto,
    setTexto,
    isLoading,
    error,
    mensajeResultado,
    puedeEnviar,
    handleChangeMode,
    handleSubmit,
  };
}