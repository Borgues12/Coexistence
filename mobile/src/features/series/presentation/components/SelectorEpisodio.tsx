import { Pressable, ScrollView, Text } from "react-native";
import type { EpisodioTemporada } from "../../domain/serie.domain";
import { styles } from "./styles/SelectorEpisodio.styles";

type Props = {
  episodios: EpisodioTemporada[];
  seleccionado: number | null;
  onSeleccionar: (numero: number) => void;
};

export function SelectorEpisodio({ episodios, seleccionado, onSeleccionar }: Props) {
  return (
    <ScrollView
      overScrollMode="never"
      contentContainerStyle={styles.grilla}
      keyboardShouldPersistTaps="handled"
    >
      {episodios.map((e) => {
        const actual = e.episodioNumero === seleccionado;
        const visto = seleccionado !== null && e.episodioNumero < seleccionado;
        return (
          <Pressable
            key={e.episodioNumero}
            onPress={() => onSeleccionar(e.episodioNumero)}
            style={[
              styles.casilla,
              visto && styles.casillaVista,
              actual && styles.casillaActual,
            ]}
          >
            <Text
              style={[
                styles.numero,
                visto && styles.numeroVisto,
                actual && styles.numeroActual,
              ]}
            >
              {e.episodioNumero}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}