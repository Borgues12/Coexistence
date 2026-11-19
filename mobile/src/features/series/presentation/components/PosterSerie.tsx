import { Image, View, Text } from "react-native";
import { TMDB_URL_POSTER } from "../../../../core/constants/tmdb.constantes"; // ajusta ruta/nombre
import { styles } from "./styles/PosterSerie.styles";

type Props = {
  posterPath: string | null;
  ancho?: number;
};

export function PosterSerie({ posterPath, ancho = 80 }: Props) {
  const alto = Math.round(ancho * 1.5);

  if (!posterPath) {
    return (
      <View style={[styles.placeholder, { width: ancho, height: alto }]}>
        <Text style={styles.placeholderTexto}>Sin póster</Text>
      </View>
    );
  }

  return (
    <Image
      source={{ uri: `${TMDB_URL_POSTER}${posterPath}` }}
      style={[styles.imagen, { width: ancho, height: alto }]}
      resizeMode="cover"
    />
  );
}
