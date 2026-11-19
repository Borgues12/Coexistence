import { StyleSheet } from "react-native";
import { bordes, colores, espaciado, tipografia } from "../../../../../core/theme/tema";

const TAMANO_CIRCULO = 44;

export const styles = StyleSheet.create({
  fila: {
    gap: espaciado.sm,
    paddingVertical: espaciado.xs, // Evita que la sombra se corte en el ScrollView
  },
  chip: {
    width: TAMANO_CIRCULO,
    height: TAMANO_CIRCULO,
    borderRadius: TAMANO_CIRCULO / 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: bordes.anchoLinea,
    borderColor: bordes.colorLinea,
    backgroundColor: colores.fondoSuperficie,
  },
  chipActivo: {
    backgroundColor: colores.acentoPrimario,
    borderColor: colores.acentoPrimario,
    // Elevación y sombra para resaltar la temporada activa
    elevation: 4,
    shadowColor: colores.acentoPrimario,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  texto: {
    ...tipografia.etiqueta,
    color: colores.textoSobreFondo,
    textAlign: "center",
    includeFontPadding: false, // Centra mejor el texto verticalmente en Android
  },
  textoActivo: {
    color: colores.textoSobreClaro,
    fontWeight: "700",
  },
});