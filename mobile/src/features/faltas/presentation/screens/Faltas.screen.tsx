import { ActivityIndicator, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colores } from "../../../../core/theme/tema";
import { useAuthStore } from "../../../auth/presentation/store/use-auth-store";
import { FALTA_TIPOS } from "../../domain/falta.domain";
import { useFaltasSala } from "../hooks/useFaltasSala";
import { useDetalleFalta } from "../hooks/useDetalleFalta";
import { SeccionFaltas } from "../components/SeccionFaltas";
import { DetalleFalta } from "../components/DetalleFalta";
import { styles } from "./styles/FaltasScreen.style";

export function FaltasScreen() {
  const usuario = useAuthStore((state) => state.usuario);
  const { faltasPropias, faltasPorTipo, faltasCargando, faltasError } =
    useFaltasSala(usuario?.userSalaActualId, usuario?.userUid);
  const { faltaSeleccionada, openDetail, closeDetail } = useDetalleFalta();

  if (faltasCargando)
    return (
      <SafeAreaView style={styles.contenedor} edges={["top", "left", "right"]}>
        <ActivityIndicator color={colores.acentoPrimarioIntenso} />
      </SafeAreaView>
    );

  if (faltasError)
    return (
      <SafeAreaView style={styles.contenedor} edges={["top", "left", "right"]}>
        <Text style={styles.mensaje}>No se pudieron cargar las faltas.</Text>
      </SafeAreaView>
    );

  if (faltasPropias.length === 0)
    return (
      <SafeAreaView style={styles.contenedor} edges={["top", "left", "right"]}>
        <Text style={styles.mensaje}>Sin faltas registradas.</Text>
      </SafeAreaView>
    );

  return (
    <SafeAreaView style={styles.contenedor} edges={["top", "left", "right"]}>
      <ScrollView>
        {FALTA_TIPOS.filter((tipo) => faltasPorTipo[tipo].length > 0).map(
          (tipo) => (
            <SeccionFaltas
              key={tipo}
              faltaTipo={tipo}
              faltas={faltasPorTipo[tipo]}
              onSelect={openDetail}
            />
          ),
        )}
      </ScrollView>
      <DetalleFalta falta={faltaSeleccionada} onClose={closeDetail} />
    </SafeAreaView>
  );
}