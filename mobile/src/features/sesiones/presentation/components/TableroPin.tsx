// features/sesiones/presentation/components/TableroPin.tsx
import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles/TableroPin.styles";
import { colores } from "../../../../core/theme/tema";
import { MaterialCommunityIcons } from "@expo/vector-icons";


interface TableroPinProps {
  pin: string;
  longitud: number;
  errorPin: string | null;
  yaHiceCheckin: boolean;
  puedeEnviarPin: boolean;
  onChangePin: (texto: string) => void;
  onSubmit: () => void;
  // modal de motivo (solo check-in con retraso)
  mostrandoModalMotivo: boolean;
  motivo: string;
  puedeEnviarMotivo: boolean;
  onChangeMotivo: (texto: string) => void;
  onConfirmMotivo: () => void;
  onCancelMotivo: () => void;
}

export function TableroPin(props: TableroPinProps) {
   return (
    <View style={styles.contenedor}>
      {/* muescas laterales: círculos del color del fondo que "muerden" el boleto */}
      <View style={[styles.muesca, styles.muescaIzquierda]} />
      <View style={[styles.muesca, styles.muescaDerecha]} />

      <View style={styles.perforacion}>
        {props.yaHiceCheckin ? (
          <View style={styles.confirmadoContenedor}>
            <MaterialCommunityIcons
              name="ticket-confirmation"
              size={44}
              color={colores.fondo}
            />
            <Text style={styles.confirmado}>ASISTENCIA REGISTRADA</Text>
          </View>
        ) : (
          <>
            <Text style={styles.etiqueta}>ADMITE UNO</Text>
            <Text style={styles.titulo}>Ingresa el PIN de la sesión</Text>

            <TextInput
              style={styles.input}
              value={props.pin}
              onChangeText={props.onChangePin}
              keyboardType="number-pad"
              maxLength={props.longitud}
              placeholder={"•".repeat(props.longitud)}
              placeholderTextColor={colores.acentoPrimario + "66"}
              selectionColor={colores.acentoPrimario}
            />

            {props.errorPin && <Text style={styles.error}>{props.errorPin}</Text>}

            <Pressable
              style={({ pressed }) => [
                styles.boton,
                !props.puedeEnviarPin && styles.botonDeshabilitado,
                pressed && styles.botonPresionado,
              ]}
              disabled={!props.puedeEnviarPin}
              onPress={props.onSubmit}
            >
              <Text style={styles.botonTexto}>CONFIRMAR</Text>
            </Pressable>

            <Modal transparent animationType="fade" visible={props.mostrandoModalMotivo}>
              <View style={styles.modalFondo}>
                <View style={styles.modalCaja}>
                  <Text style={styles.modalTitulo}>Llegaste con retraso</Text>
                  <TextInput
                    style={styles.inputMotivo}
                    value={props.motivo}
                    onChangeText={props.onChangeMotivo}
                    placeholder="Escribe el motivo (mín. 10 caracteres)"
                    placeholderTextColor={colores.textoSobreFondo + "66"}
                    selectionColor={colores.acentoPrimario}
                    multiline
                  />
                  <Pressable
                    style={[
                      styles.modalBoton,
                      !props.puedeEnviarMotivo && styles.botonDeshabilitado,
                    ]}
                    disabled={!props.puedeEnviarMotivo}
                    onPress={props.onConfirmMotivo}
                  >
                    <Text style={styles.modalBotonTexto}>ENVIAR</Text>
                  </Pressable>
                  <Pressable onPress={props.onCancelMotivo}>
                    <Text style={styles.modalCancelar}>Cancelar</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </>
        )}
      </View>
    </View>
  );
}