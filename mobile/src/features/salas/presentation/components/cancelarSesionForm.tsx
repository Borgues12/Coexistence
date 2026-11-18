// features/salas/presentation/components/CancelarSesionForm/CancelarSesionForm.tsx
import { Text, TextInput } from "react-native";
import { colores } from "../../../../core/theme/tema";
import { TarjetaSolida } from "../../../../shared/components/TarjetaSolida";
import { BotonCasino } from "../../../../shared/components/BotonCasino";
import { styles } from "./styles/cancelarSesionForm.styles";

type CancelarSesionFormProps = {
  sePuedeCancelar: boolean;
  mostrandoInputCancelar: boolean;
  setMostrandoInputCancelar: (valor: boolean) => void;
  motivoCancelacion: string;
  setMotivoCancelacion: (valor: string) => void;
  cancelandoSesion: boolean;
  handleCancelarSesion: () => void;
};

export function CancelarSesionForm({
  sePuedeCancelar,
  mostrandoInputCancelar,
  setMostrandoInputCancelar,
  motivoCancelacion,
  setMotivoCancelacion,
  cancelandoSesion,
  handleCancelarSesion,
}: CancelarSesionFormProps) {
  if (!sePuedeCancelar) return null;

  if (!mostrandoInputCancelar) {
    return (
      <BotonCasino
        titulo="Cancelar sesión de hoy"
        icono="ban"
        variante="acento"
        onPress={() => setMostrandoInputCancelar(true)}
      />
    );
  }

  // El motivo es obligatorio (las reglas exigen size() > 0)
  const motivoVacio = motivoCancelacion.trim().length === 0;

  return (
    <TarjetaSolida>
      <Text style={styles.etiqueta}>Cancelación administrativa</Text>
      <Text style={styles.ayuda}>
        Nadie recibirá falta por hoy, incluso si ya había check-ins.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Motivo de la cancelación"
        placeholderTextColor={colores.textoSecundario}
        value={motivoCancelacion}
        onChangeText={setMotivoCancelacion}
        editable={!cancelandoSesion}
        multiline
      />

      <BotonCasino
        titulo={cancelandoSesion ? "Cancelando..." : "Confirmar cancelación"}
        variante="peligro"
        deshabilitado={cancelandoSesion || motivoVacio}
        onPress={handleCancelarSesion}
      />
      <BotonCasino
        titulo="Volver"
        variante="contornoClaro"
        deshabilitado={cancelandoSesion}
        onPress={() => {
          setMostrandoInputCancelar(false);
          setMotivoCancelacion("");
        }}
      />
    </TarjetaSolida>
  );
}