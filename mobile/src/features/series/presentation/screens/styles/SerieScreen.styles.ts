import { StyleSheet } from "react-native";
import {
  bordes,
  colores,
  espaciado,
  tipografia,
} from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
    padding: espaciado.md,
    gap: espaciado.md,
  },
  input: {
    ...tipografia.cuerpo,
    color: colores.textoSobreFondo,
    backgroundColor: colores.fondoSuperficie,
    borderWidth: bordes.anchoLinea,
    borderColor: bordes.colorLinea,
    borderRadius: bordes.radioChato,
    paddingHorizontal: espaciado.md,
    paddingVertical: espaciado.sm,
  },
  mensaje: {
    ...tipografia.cuerpo,
    color: colores.textoSecundario,
    textAlign: "center",
    marginTop: espaciado.lg,
  },
  mensajeError: {
    ...tipografia.cuerpo,
    color: colores.error,
    textAlign: "center",
  },
  boton: {
    minHeight: 48,
    paddingHorizontal: espaciado.lg,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: bordes.anchoLinea,
    borderColor: colores.acentoPrimario,
    borderRadius: bordes.radioChato,
  },
  botonTexto: {
    ...tipografia.marquesina,
    color: colores.acentoPrimario,
  },
});
