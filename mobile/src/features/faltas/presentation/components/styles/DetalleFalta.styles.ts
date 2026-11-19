import { StyleSheet } from "react-native";
import {
  colores,
  tipografia,
  espaciado,
  bordes,
  sombraSolida,
} from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    justifyContent: "center",
    padding: espaciado.lg,
    backgroundColor: colores.fondo + "CC",
  },
  cajaContenedor: {
    marginRight: sombraSolida.desplazamiento,
    marginBottom: sombraSolida.desplazamiento,
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
  tarjeta: {
    padding: espaciado.lg,
    backgroundColor: colores.fondoClaro,
    borderWidth: bordes.anchoGrueso,
    borderColor: colores.textoSobreClaro,
    borderRadius: bordes.radioChato,
  },
  encabezado: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: espaciado.md,
    marginBottom: espaciado.sm,
    borderBottomWidth: bordes.anchoGrueso,
    borderBottomColor: colores.textoSobreClaro,
  },
  titulo: {
    ...tipografia.marquesina,
    fontSize: 16,
    marginLeft: espaciado.sm,
  },
  fila: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: espaciado.sm,
  },
  valor: {
    ...tipografia.cuerpo,
    flex: 1,
    marginLeft: espaciado.sm,
    color: colores.textoSobreClaro,
  },
  estado: { textTransform: "capitalize" },
});