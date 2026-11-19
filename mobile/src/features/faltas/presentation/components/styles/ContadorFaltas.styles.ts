import { StyleSheet } from "react-native";
import {
  colores,
  tipografia,
  espaciado,
  bordes,
  sombraSolida,
} from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  grilla: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: espaciado.xs,
    borderBottomWidth: bordes.anchoLinea,
    borderColor: colores.bordeSutil,
  },
  celda: {
    width: "25%",
    padding: espaciado.xs,
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
    alignItems: "center",
    paddingVertical: espaciado.sm,
    paddingHorizontal: espaciado.xs,
    backgroundColor: colores.fondoClaro,
    borderWidth: bordes.anchoGrueso,
    borderColor: colores.textoSobreClaro,
    borderRadius: bordes.radioChato,
  },
  nombre: {
    ...tipografia.marquesina,
    fontSize: 10,
    letterSpacing: 1.5,
    color: colores.acentoSecundario,
  },
  total: {
    ...tipografia.display,
    fontSize: 32,
    color: colores.textoSobreClaro,
    marginTop: espaciado.xs,
  },
});