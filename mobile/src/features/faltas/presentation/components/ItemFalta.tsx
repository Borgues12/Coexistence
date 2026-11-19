import { Pressable, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colores } from "../../../../core/theme/tema";
import type { Falta, FaltaTipo } from "../../domain/falta.domain";
import { styles } from "./styles/ItemFalta.styles";
import { formatShortMonth } from "../../../../core/utils/fecha";

export const CONFIG_POR_TIPO: Record<
  FaltaTipo,
  {
    icono: React.ComponentProps<typeof Ionicons>["name"];
    color: string;
    titulo: string;
    singular: string;
  }
> = {
  retraso: {
    icono: "time-outline",
    color: colores.acentoPrimarioIntenso,
    titulo: "Retrasos",
    singular: "Retraso",
  },
  ausencia: {
    icono: "close-circle-outline",
    color: colores.error,
    titulo: "Ausencias",
    singular: "Ausencia",
  },
  abandono: {
    icono: "exit-outline",
    color: colores.acentoSecundario,
    titulo: "Abandonos",
    singular: "Abandono",
  },
};

interface Props {
  falta: Falta;
  onPress: (falta: Falta) => void;
}

export function ItemFalta({ falta, onPress }: Props) {
  const config = CONFIG_POR_TIPO[falta.faltaTipo];

  return (
    <Pressable
      style={({ pressed }) => [styles.celda, pressed && styles.celdaPresionada]}
      onPress={() => onPress(falta)}
    >
      <View style={[styles.tarjeta, { borderColor: config.color }]}>
        <Text style={styles.dia} allowFontScaling={false}>
          {falta.faltaFecha.slice(8, 10)}
        </Text>
        <Text style={styles.mes} allowFontScaling={false}>
          {formatShortMonth(falta.faltaFecha)}
        </Text>
      </View>
    </Pressable>
  );
}