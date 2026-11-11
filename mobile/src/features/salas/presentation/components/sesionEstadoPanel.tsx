// features/salas/presentation/components/SesionEstadoPanel/SesionEstadoPanel.tsx
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TarjetaSolida } from "../../../../shared/components/TarjetaSolida";
import { Boton } from "../../../../shared/components/Boton";
import { Sesion } from "../../../sesiones/domain/sesion.domain";
import { styles } from "./styles/SesionEstadoPanel.styles";
import { colores } from "../../../../core/theme/tema";

type SesionEstadoPanelProps = {
  sesionActual: Sesion | null;
  sesionCargando: boolean;
  usuarioUid: string | undefined;
  handleIniciarSesion: () => void;
};

type InsigniaProps = {
  icono: keyof typeof Ionicons.glyphMap;
  color: string;
  texto: string;
};

function Insignia({ icono, color, texto }: InsigniaProps) {
  return (
    <View style={styles.insignia}>
      <Ionicons name={icono} size={18} color={color} />
      <Text style={[styles.insigniaTexto, { color }]}>{texto}</Text>
    </View>
  );
}

export function SesionEstadoPanel({
  sesionActual,
  sesionCargando,
  usuarioUid,
  handleIniciarSesion,
}: SesionEstadoPanelProps) {
  if (sesionActual?.sesionEstado === "pendiente") {
    return (
      <TarjetaSolida>
        <Insignia
          icono="time"
          color={colores.acentoPrimarioIntenso}
          texto="Sesión pendiente"
        />
        <Text style={styles.mensaje}>
          Nadie ha iniciado la sesión. Si estás presente, inicia para abrir el check-in.
        </Text>
        <Boton
          titulo={sesionCargando ? "Iniciando..." : "Iniciar sesión"}
          onPress={handleIniciarSesion}
          deshabilitado={sesionCargando}
        />
      </TarjetaSolida>
    );
  }

  if (sesionActual?.sesionEstado === "en_curso") {
    const fueQuienInicio = usuarioUid === sesionActual.sesionIniciadaPorUid;

    if (fueQuienInicio) {
      return (
        <TarjetaSolida>
          <Insignia icono="key" color={colores.exito} texto="Sesión en curso" />
          <View style={styles.bloquePin}>
            <Text style={styles.pinEtiqueta}>PIN de la sesión</Text>
            <Text style={styles.pinValor}>{sesionActual.sesionPin}</Text>
          </View>
          <Text style={styles.mensaje}>Díctalo a los presentes para que hagan check-in.</Text>
        </TarjetaSolida>
      );
    }

    return (
      <TarjetaSolida>
        <Insignia icono="checkmark-circle" color={colores.exito} texto="Sesión en curso" />
        <Text style={styles.mensaje}>Check-in abierto, ingresa el PIN.</Text>
      </TarjetaSolida>
    );
  }

  if (sesionActual?.sesionEstado === "cancelada") {
    return (
      <TarjetaSolida>
        <Insignia
          icono="close-circle"
          color={colores.acentoSecundario}
          texto="Sesión cancelada"
        />
        <Text style={styles.mensaje}>La sesión fue cancelada por el admin.</Text>
      </TarjetaSolida>
    );
  }

  return null;
}