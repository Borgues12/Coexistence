import { StyleSheet } from "react-native";
import { bordes, colores, espaciado, tipografia, sombraSolida } from "../../../core/theme/tema";

export const styles = StyleSheet.create({
  fila: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: espaciado.md,
    paddingVertical: espaciado.sm,
  },
  columna: {
    alignItems: "center",
    gap: espaciado.sm,
  },
  etiqueta: {
    ...tipografia.marquesina,
    fontSize: 11,
    color: colores.acentoSecundario,
  },
  cajaContenedor: {
    width: 80,
    height: 72,
  },
  sombra: {
    position: "absolute",
    top: sombraSolida.desplazamiento,
    left: sombraSolida.desplazamiento,
    right: -sombraSolida.desplazamiento,
    bottom: -sombraSolida.desplazamiento,
    backgroundColor: sombraSolida.color,
    borderRadius: bordes.radioChato,
  },
  caja: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colores.fondoSuperficieClara,
    borderWidth: bordes.anchoGrueso,
    borderColor: colores.textoSobreClaro,
    borderRadius: bordes.radioChato,
  },
  numero: {
    ...tipografia.display,
    fontSize: 36,
    color: colores.textoSobreClaro,
  },
  separador: {
    ...tipografia.display,
    color: colores.acentoSecundario,
    marginTop: espaciado.lg,
  },
  flecha: {
    paddingHorizontal: espaciado.lg,
    paddingVertical: espaciado.xs,
    borderWidth: bordes.anchoLinea,
    borderColor: bordes.colorLinea,
    borderRadius: bordes.radioChato,
  },
  flechaPresionada: {
    backgroundColor: colores.bordeSutil,
  },
});