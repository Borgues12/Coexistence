import { StyleSheet } from "react-native";
import { bordes, colores, espaciado, tipografia } from "../../../../../core/theme/tema";

const TAM = 48;

export const styles = StyleSheet.create({
  grilla: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: espaciado.sm,
  },
  casilla: {
    width: TAM,
    height: TAM,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: bordes.radioChato,
    borderWidth: bordes.anchoLinea,
    borderColor: bordes.colorLinea,
    backgroundColor: colores.fondoSuperficie,
  },
  casillaVista: {
    backgroundColor: colores.acentoPrimario,
    borderColor: colores.acentoPrimario,
  },
  casillaActual: {
    borderWidth: bordes.anchoGrueso,
    borderColor: colores.acentoPrimario,
    backgroundColor: colores.fondo,
  },
  numero: { ...tipografia.etiqueta, color: colores.textoSobreFondo },
  numeroVisto: { color: colores.textoSobreClaro },
  numeroActual: { color: colores.acentoPrimario },
});