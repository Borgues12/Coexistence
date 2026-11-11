// features/salas/presentation/components/ConfigHoraForm/ConfigHoraForm.tsx
import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { colores } from "../../../../core/theme/tema";
import { TarjetaSolida } from "../../../../shared/components/TarjetaSolida";
import { Boton } from "../../../../shared/components/Boton";
import { Sesion } from "../../../sesiones/domain/sesion.domain";
import {
  dateToTimeString,
  timeStringToDate,
} from "../../../../core/utils/fecha";
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
  const [mostrandoPicker, setMostrandoPicker] = useState(false);

  // Solo el admin puede modificar la hora de inicio
  if (!esAdmin) return null;

  const estaBloqueado = Boolean(
    sesionActual &&
    ESTADOS_BLOQUEAN_CAMBIO_HORA.includes(sesionActual.sesionEstado),
  );

  const handleChangePicker = (evento: DateTimePickerEvent, fecha?: Date) => {
    setMostrandoPicker(false); // en Android el diálogo se cierra solo
    if (evento.type === "set" && fecha) {
      setHoraInicioInput(dateToTimeString(fecha));
    }
  };

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

      <Pressable
        style={({ pressed }) => [
          styles.selector,
          pressed && styles.selectorPresionado,
        ]}
        onPress={() => setMostrandoPicker(true)}
        disabled={guardandoHora}
      >
        <Text style={styles.selectorTexto}>{horaInicioInput}</Text>
        <Ionicons
          name="chevron-down"
          size={20}
          color={colores.acentoPrimario}
        />
      </Pressable>

      {mostrandoPicker && (
        <DateTimePicker
          value={timeStringToDate(horaInicioInput)}
          mode="time"
          is24Hour
          display="default"
          onChange={handleChangePicker}
        />
      )}

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
