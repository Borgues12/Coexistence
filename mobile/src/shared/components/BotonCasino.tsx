// shared/components/BotonCasino/BotonCasino.tsx
import { Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles, coloresTexto } from "./styles/BotonCasino.styles";

type Variante = "primario" | "contorno" | "contornoClaro" | "acento" | "peligro";

type BotonCasinoProps = {
  titulo: string;
  onPress: () => void;
  variante?: Variante;
  icono?: keyof typeof Ionicons.glyphMap;
  deshabilitado?: boolean;
};

export function BotonCasino({
  titulo,
  onPress,
  variante = "contorno",
  icono,
  deshabilitado = false,
}: BotonCasinoProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={deshabilitado}
      style={({ pressed }) => [
        styles.base,
        styles[variante],
        pressed && styles.presionado,
        deshabilitado && styles.deshabilitado,
      ]}
    >
      {icono && (
        <Ionicons name={icono} size={18} color={coloresTexto[variante]} />
      )}
      <Text style={[styles.texto, { color: coloresTexto[variante] }]}>
        {titulo}
      </Text>
    </Pressable>
  );
}