import { StyleSheet } from "react-native";
import {
  colores,
  tipografia,
  espaciado,
  bordes,
} from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  celda: {
    width: "20%",
    padding: espaciado.xs,
  },
  celdaPresionada: {
    opacity: 0.6,
  },
  tarjeta: {
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    backgroundColor: colores.fondoClaro,
    borderWidth: bordes.anchoGrueso,
    borderRadius: bordes.radioChato,
  },
  dia: {
    ...tipografia.etiqueta,
    fontSize: 20,
    lineHeight: 22,
    includeFontPadding: false, // Elimina el espacio extra superior/inferior en Android
    color: colores.textoSobreClaro,
  },
  mes: {
    ...tipografia.marquesina,
    fontSize: 9,
    lineHeight: 11,
    letterSpacing: 1.2,
    includeFontPadding: false,
    color: colores.textoSobreClaro,
    opacity: 0.65,
  },
});