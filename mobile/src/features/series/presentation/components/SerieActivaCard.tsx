import { Text, View } from "react-native";
import { PosterSerie } from "./PosterSerie";
import { styles } from "./styles/SerieActivaCard.styles";

type Props = {
  titulo: string;
  posterPath: string | null;
  temporada: number;
  episodio: number;
  duracion: number;
  horaInicio: string;
  horaFin: string;
};

export function SerieActivaCard(p: Props) {
  return (
    <View style={styles.contenedor}>
      <PosterSerie posterPath={p.posterPath} ancho={220} />
      <Text style={styles.titulo} numberOfLines={2}>
        {p.titulo}
      </Text>

      <View style={styles.card}>
        <Text style={styles.etiqueta}>Hoy toca</Text>
        <Text style={styles.episodio}>
          T{p.temporada} · E{p.episodio}
        </Text>
        <Text style={styles.detalle}>{p.duracion} min</Text>
        <Text style={styles.detalle}>
          Empieza {p.horaInicio} · termina {p.horaFin}
        </Text>
      </View>
    </View>
  );
}