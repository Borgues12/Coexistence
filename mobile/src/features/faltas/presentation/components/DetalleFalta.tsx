import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colores } from "../../../../core/theme/tema";
import { formatLongDate } from "../../../../core/utils/fecha";
import type { Falta } from "../../domain/falta.domain";
import { CONFIG_POR_TIPO } from "./ItemFalta";
import { styles } from "./styles/DetalleFalta.styles";

interface Props {
  falta: Falta | null;
  onClose: () => void;
}

export function DetalleFalta({ falta, onClose }: Props) {
  const config = falta ? CONFIG_POR_TIPO[falta.faltaTipo] : null;

  return (
    <Modal
      visible={falta !== null}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.fondo}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        {falta && config && (
          <View style={[styles.tarjeta, { borderColor: config.color }]}>
            <View style={styles.encabezado}>
              <Ionicons name={config.icono} size={28} color={config.color} />
              <Text style={[styles.titulo, { color: config.color }]}>
                {config.singular}
              </Text>
            </View>

            <View style={styles.fila}>
              <Ionicons
                name="calendar-outline"
                size={18}
                color={colores.acentoPrimario}
              />
              <Text style={styles.valor}>{formatLongDate(falta.faltaFecha)}</Text>
            </View>

            <View style={styles.fila}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={18}
                color={colores.acentoPrimario}
              />
              <Text style={styles.valor}>
                {falta.faltaMotivo ?? "Sin motivo (falta automática)"}
              </Text>
            </View>

            <View style={styles.fila}>
              <Ionicons
                name="flag-outline"
                size={18}
                color={colores.acentoPrimario}
              />
              <Text style={[styles.valor, styles.estado]}>
                {falta.faltaEstado}
              </Text>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
}