import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SERIES_BUSQUEDA_MIN_CARACTERES } from "../../../../core/constants/series.constantes";
import { colores } from "../../../../core/theme/tema";
import { useContextoSalaStore } from "../../../../shared/store/contextoSala.store";
import { ResultadoBusquedaSerie } from "../components/ResultadoBusquedaSerie";
import { useSeriesSearch } from "../hooks/useSeriesSearch";
import type { ResultadoBusquedaSerie as Resultado } from "../../domain/serie.domain";
import { styles } from "./styles/SerieScreen.styles";
import { useSerieActiva } from "../hooks/useSerieActiva";
import { SerieActivaCard } from "../components/SerieActivaCard";

type Props = {
  onSeleccionar: (resultado: Resultado) => void;
};

export function SerieScreen({ onSeleccionar }: Props) {
  const userUid = useContextoSalaStore((s) => s.userUid);
  const salaAdminUid = useContextoSalaStore((s) => s.salaAdminUid);
  const esAdmin = !!userUid && userUid === salaAdminUid;

  const { texto, setTexto, resultados, buscando, error } = useSeriesSearch();
  const {
    serieActiva,
    cargando,
    horario,
    cambiando,
    startChange,
    cancelChange,
  } = useSerieActiva();

  if (cargando) {
    return (
      <SafeAreaView style={styles.contenedor}>
        <ActivityIndicator color={colores.acentoPrimario} />
      </SafeAreaView>
    );
  }

  const mostrarBuscador = esAdmin && (!serieActiva || cambiando);

  if (!mostrarBuscador) {
    return (
      <SafeAreaView style={styles.contenedor}>
        {serieActiva && horario ? (
          <SerieActivaCard
            titulo={serieActiva.serieTitulo}
            posterPath={serieActiva.seriePosterPath}
            temporada={serieActiva.serieTemporadaActual}
            episodio={serieActiva.serieEpisodioActual}
            duracion={horario.duracion}
            horaInicio={horario.horaInicio}
            horaFin={horario.horaFin}
          />
        ) : (
          <Text style={styles.mensaje}>
            El administrador aún no ha elegido la serie.
          </Text>
        )}

        {esAdmin && serieActiva && (
          <Pressable onPress={startChange} style={styles.boton}>
            <Text style={styles.botonTexto}>Cambiar serie</Text>
          </Pressable>
        )}
      </SafeAreaView>
    );
  }

  const consulta = texto.trim();
  const sinResultados =
    consulta.length >= SERIES_BUSQUEDA_MIN_CARACTERES &&
    !buscando &&
    !error &&
    resultados.length === 0;

  return (
    <SafeAreaView style={styles.contenedor}>
      <TextInput
        style={styles.input}
        value={texto}
        onChangeText={setTexto}
        placeholder="Buscar serie..."
        placeholderTextColor={colores.textoSecundario}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {cambiando && (
        <Pressable onPress={cancelChange} style={styles.boton}>
          <Text style={styles.botonTexto}>Cancelar</Text>
        </Pressable>
      )}
      {buscando && <ActivityIndicator color={colores.acentoPrimario} />}
      {error && <Text style={styles.mensajeError}>{error}</Text>}
      {sinResultados && <Text style={styles.mensaje}>Sin resultados.</Text>}

      <FlatList
        data={resultados}
        keyExtractor={(r) => String(r.serieTmdbId)}
        keyboardShouldPersistTaps="handled"
        overScrollMode="never"
        renderItem={({ item }) => (
          <ResultadoBusquedaSerie resultado={item} onPress={onSeleccionar} />
        )}
      />
    </SafeAreaView>
  );
}
