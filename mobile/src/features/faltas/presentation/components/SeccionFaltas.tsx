import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { Falta, FaltaTipo } from "../../domain/falta.domain";
import { CONFIG_POR_TIPO, ItemFalta } from "./ItemFalta";
import { styles } from "./styles/SeccionFaltas.styles";

interface Props {
  faltaTipo: FaltaTipo;
  faltas: Falta[];
  onSelect: (falta: Falta) => void;
}

export function SeccionFaltas({ faltaTipo, faltas, onSelect }: Props) {
  const config = CONFIG_POR_TIPO[faltaTipo];
  return (
    <View style={styles.cajaContenedor}>
      <View style={styles.sombra} />
      <View style={styles.contenedor}>
        <View style={styles.encabezado}>
          <Ionicons name={config.icono} size={20} color={config.color} />
          <Text style={styles.titulo}>{config.titulo}</Text>
          <View style={[styles.total, { backgroundColor: config.color }]}>
            <Text style={styles.totalTexto}>{faltas.length}</Text>
          </View>
        </View>
        <View style={styles.grilla}>
          {faltas.map((falta) => (
            <ItemFalta key={falta.faltaId} falta={falta} onPress={onSelect} />
          ))}
        </View>
      </View>
    </View>
  );
}