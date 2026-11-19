// features/salas/presentation/components/ConfigHoraForm/ConfigHoraForm.tsx
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colores } from "../../../../core/theme/tema";
import { TarjetaSolida } from "../../../../shared/components/TarjetaSolida";
import { Boton } from "../../../../shared/components/Boton";
import { Sesion } from "../../../sesiones/domain/sesion.domain";

import { SelectorHora } from "../../../../shared/components/SelectorHora";
import { styles } from "./styles/configHoraForm.styles";

// Estados que bloquean el cambio de hora
const ESTADOS_BLOQUEAN_CAMBIO_HORA: Sesion["sesionEstado"][] = [
  "pendiente",
  "en_curso",
  "aplazada",
];

type ConfigHoraFormProps = {
  esAdmin: boolean;
  salaHoraInicio: string;
  mostrandoConfigHora: boolean;
  setMostrandoConfigHora: (valor: boolean) => void;
  horaInicioInput: string;
  setHoraInicioInput: (valor: string) => void;
  guardandoHora: boolean;
  errorHora: string | null;
  handleGuardarHora: () => void;
  sesionActual: Sesion | null;
};

export function ConfigHoraForm({
  esAdmin,
  salaHoraInicio,
  mostrandoConfigHora,
  setMostrandoConfigHora,
  horaInicioInput,
  setHoraInicioInput,
  guardandoHora,
  errorHora,
  handleGuardarHora,
  sesionActual,
}: ConfigHoraFormProps) {
  // Solo el admin puede modificar la hora de inicio
  if (!esAdmin) return null;

  const estaBloqueado = Boolean(
    sesionActual &&
    ESTADOS_BLOQUEAN_CAMBIO_HORA.includes(sesionActual.sesionEstado),
  );

  if (!mostrandoConfigHora) {
    return (
      <TarjetaSolida>
        <View style={styles.fila}>
          <View style={styles.columna}>
            <Text style={styles.etiqueta}>Hora de inicio</Text>
            <Text style={styles.hora}>{salaHoraInicio}</Text>
          </View>
          <Ionicons
            name="time-outline"
            size={28}
            color={colores.acentoPrimarioIntenso}
          />
        </View>

        {estaBloqueado && (
          <Text style={styles.aviso}>
            No se puede cambiar mientras la sesión esté pendiente, en curso o
            aplazada.
          </Text>
        )}

        <Boton
          titulo="Cambiar hora"
          variante="contorno"
          deshabilitado={estaBloqueado}
          onPress={() => {
            setHoraInicioInput(salaHoraInicio);
            setMostrandoConfigHora(true);
          }}
        />
      </TarjetaSolida>
    );
  }

  return (
    <TarjetaSolida>
      <Text style={styles.etiqueta}>Nueva hora de inicio</Text>

      <SelectorHora
        valor={horaInicioInput}
        onChange={setHoraInicioInput}
        deshabilitado={guardandoHora}
      />

      {errorHora && <Text style={styles.textoError}>{errorHora}</Text>}

      <Boton
        titulo={guardandoHora ? "Guardando..." : "Guardar"}
        onPress={handleGuardarHora}
        deshabilitado={guardandoHora}
      />
      <Boton
        titulo="Volver"
        variante="contorno"
        onPress={() => setMostrandoConfigHora(false)}
        deshabilitado={guardandoHora}
      />
    </TarjetaSolida>
  );
}
