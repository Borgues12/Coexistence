import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { IconoAcceso } from "../components/FichaAcceso";
import { SelectorModoAcceso } from "../components/ModoAcceso";
import { FormularioAccesoSala } from "../components/FormAccesoSala";
import { useRoomAccessForm } from "../hooks/useRoomAccessForm";
import { styles } from "./styles/acceso-sala.styles";

export function AccesoSalaScreen() {
  const form = useRoomAccessForm();

  return (
    <KeyboardAvoidingView
      style={styles.contenedor}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.contenido}
        keyboardShouldPersistTaps="handled"
      >
        <IconoAcceso />
        <SelectorModoAcceso
          modoActual={form.modoActual}
          onSelectMode={form.handleChangeMode}
        />
        <FormularioAccesoSala
          modo={form.modoActual}
          texto={form.texto}
          onChangeTexto={form.setTexto}
          onSubmit={form.handleSubmit}
          isLoading={form.isLoading}
          puedeEnviar={form.puedeEnviar}
          error={form.error}
          mensajeResultado={form.mensajeResultado}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
