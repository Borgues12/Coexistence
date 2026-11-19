import { Text, View } from "react-native";
import { PosterSerie } from "./PosterSerie";
import { styles } from "./styles/SerieActivaCard.styles";

type Props = {
  titulo: string;
  posterPath: string | null;
  temporada: number;
  episodio: number;
  nameEpisodio?: string;
  duracion: number;
  horaInicio: string;
  horaFin: string;
};

export function SerieActivaCard(p: Props) {
  return (
    <View style={styles.contenedor}>
      <PosterSerie posterPath={p.posterPath} ancho={250} />

      <View style={styles.card}>
        <Text style={styles.titulo} numberOfLines={1}>
          {p.titulo}
        </Text>

        <View style={styles.filaEpisodio}>
          <View style={styles.chip}>
            <Text style={styles.chipTexto}>
              T{p.temporada} · E{p.episodio}
            </Text>
          </View>
          {p.nameEpisodio ? (
            <Text style={styles.nombreEpisodio} numberOfLines={2}>
              {p.nameEpisodio}
            </Text>
          ) : null}
        </View>

        <View style={styles.divisor} />

        <View style={styles.filaDatos}>
          <Text style={styles.detalle}>{p.duracion} min</Text>
          <Text style={styles.horario}>
            {p.horaInicio} → {p.horaFin}
          </Text>
        </View>
      </View>
    </View>
  );
}