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
    <View
      style={[
        styles.contenedor,
        {
          backgroundColor: config.color + "26",
          borderLeftColor: config.color,
          borderColor: config.color + "66",
        },
      ]}
    >
      <View style={[styles.encabezado, { borderColor: config.color }]}>
        <Ionicons name={config.icono} size={20} color={config.color} />
        <Text style={styles.titulo}>{config.titulo}</Text>
        <Text style={[styles.total, { color: config.color }]}>
          {faltas.length}
        </Text>
      </View>
      <View style={styles.grilla}>
        {faltas.map((falta) => (
          <ItemFalta key={falta.faltaId} falta={falta} onPress={onSelect} />
        ))}
      </View>
    </View>
  );
}
