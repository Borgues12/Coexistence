import { useEffect } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colores } from "../../../../core/theme/tema";
import { useContextoSalaStore } from "../../../../shared/store/contextoSala.store";
import type { ResultadoBusquedaSerie } from "../../domain/serie.domain";
import { PosterSerie } from "../components/PosterSerie";
import { SelectorEpisodio } from "../components/SelectorEpisodio";
import { SelectorTemporada } from "../components/SelectorTemporada";
import { useEpisodePicker } from "../hooks/useEpisodePicker";
import { useSeriesStore } from "../store/series.store";
import { styles } from "./styles/ConfigurarInicio.styles";

type Props = {
  serie: ResultadoBusquedaSerie;
  onConfirmado: () => void;
};

export function ConfigurarInicioScreen({ serie, onConfirmado }: Props) {
  const salaId = useContextoSalaStore((s) => s.salaId);
  const userUid = useContextoSalaStore((s) => s.userUid);
  const salaAdminUid = useContextoSalaStore((s) => s.salaAdminUid);
  const setAdminFlag = useSeriesStore((s) => s.setAdminFlag);

  const picker = useEpisodePicker(salaId ?? "", userUid ?? "");

  // confirmSelection exige serieEsAdmin: lo calcula loadActiveSeries
  useEffect(() => {
    if (userUid && salaAdminUid) {
      setAdminFlag(userUid, salaAdminUid);
    }
  }, [salaId, userUid, salaAdminUid, setAdminFlag]);

  useEffect(() => {
    picker.selectSeries(serie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serie.serieTmdbId]);

  const handleGuardar = async () => {
    if (await picker.confirm()) onConfirmado();
  };

  const deshabilitado = !picker.puedeConfirmar || picker.guardando || !salaId;

  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.cabecera}>
        <PosterSerie posterPath={serie.seriePosterPath} ancho={72} />
        <Text style={styles.titulo} numberOfLines={3}>
          {serie.serieTitulo}
        </Text>
      </View>

      <Text style={styles.etiqueta}>Temporada</Text>
      <View style={styles.seccionTemporadas}>
      <SelectorTemporada
        temporadas={picker.temporadas}
        seleccionada={picker.temporada}
        onSeleccionar={picker.selectSeason}
      />
      </View>

      {picker.temporada !== null && (
        <Text style={styles.etiqueta}>Episodio que toca ver</Text>
      )}
      <View style={styles.episodios}>
        {picker.cargando ? (
          <ActivityIndicator color={colores.acentoPrimario} />
        ) : (
          <SelectorEpisodio
            episodios={picker.episodios}
            seleccionado={picker.episodio}
            onSeleccionar={picker.setEpisodio}
          />
        )}
      </View>

      {picker.error && <Text style={styles.error}>{picker.error}</Text>}

      <Pressable
        onPress={handleGuardar}
        disabled={deshabilitado}
        style={[styles.boton, deshabilitado && styles.botonDeshabilitado]}
      >
        <Text style={styles.botonTexto}>
          {picker.guardando ? "Guardando..." : "Guardar"}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
