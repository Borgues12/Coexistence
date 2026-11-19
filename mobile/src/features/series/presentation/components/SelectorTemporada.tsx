import { Pressable, ScrollView, Text } from "react-native";
import type { TemporadaResumen } from "../../domain/serie.domain";
import { styles } from "./styles/SelectorTemporada.styles";

type Props = {
  temporadas: TemporadaResumen[];
  seleccionada: number | null;
  onSeleccionar: (numero: number) => void;
};

export function SelectorTemporada({
  temporadas,
  seleccionada,
  onSeleccionar,
}: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
      contentContainerStyle={styles.fila}
    >
      {temporadas.map((t) => {
        const activa = t.temporadaNumero === seleccionada;
        return (
          <Pressable
            key={t.temporadaNumero}
            onPress={() => onSeleccionar(t.temporadaNumero)}
            style={({ pressed }) => [
              styles.chip,
              activa && styles.chipActivo,
              pressed && { transform: [{ scale: 0.92 }], opacity: 0.85 },
            ]}
          >
            <Text style={[styles.texto, activa && styles.textoActivo]}>
              T{t.temporadaNumero}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
