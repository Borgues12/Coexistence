// features/salas/presentation/components/cancelarSesionForm.styles.ts
import { StyleSheet } from "react-native";
import {
  colores,
  tipografia,
  espaciado,
  bordes,
} from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  etiqueta: {
    ...tipografia.etiqueta,
    color: colores.acentoSecundario,
    textTransform: "uppercase",
  },
  ayuda: {
    ...tipografia.cuerpo,
    fontSize: 14,
    color: colores.textoSobreClaro,
  },
  input: {
    minHeight: 80,
    padding: espaciado.md,
    textAlignVertical: "top", // en Android el texto multilínea arranca arriba
    ...tipografia.cuerpo,
    color: colores.textoSobreFondo,
    backgroundColor: colores.fondo,
    borderRadius: bordes.radioChato,
  },
});