// shared/components/Boton/Boton.tsx
import { Pressable, Text } from "react-native";
import { styles, variantes, textos } from "./styles/Boton.styles";

type Variante = "primario" | "secundario" | "peligro" | "contorno";
type BotonProps = {
  titulo: string;
  onPress: () => void;
  variante?: Variante;
  deshabilitado?: boolean;
};

export function Boton({
  titulo,
  onPress,
  variante = "primario",
  deshabilitado = false,
}: BotonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={deshabilitado}
      style={({ pressed }) => [
        styles.base,
        variantes[variante],
        pressed && styles.presionado,
        deshabilitado && styles.inactivo,
      ]}
    >
      <Text style={[styles.texto, textos[variante]]}>{titulo}</Text>
    </Pressable>
  );
}
