import { Pressable, Text } from "react-native";
import { PosterSerie } from "./PosterSerie";
import type { ResultadoBusquedaSerie as Resultado } from "../../domain/serie.domain";
import { styles } from "./styles/ResultadoBusquedaSerie.styles";

type Props = {
  resultado: Resultado;
  onPress: (resultado: Resultado) => void;
};

export function ResultadoBusquedaSerie({ resultado, onPress }: Props) {
  return (
    <Pressable style={styles.fila} onPress={() => onPress(resultado)}>
      <PosterSerie posterPath={resultado.seriePosterPath} ancho={56} />
      <Text style={styles.titulo} numberOfLines={2}>
        {resultado.serieTitulo}
      </Text>
    </Pressable>
  );
}