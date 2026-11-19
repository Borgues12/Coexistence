import { StyleSheet } from "react-native";
import {
  colores,
  tipografia,
  espaciado,
  bordes,
  sombraSolida,
} from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  cajaContenedor: {
    marginHorizontal: espaciado.md,
    marginTop: espaciado.lg,
    marginRight: espaciado.md + sombraSolida.desplazamiento,
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
  contenedor: {
    padding: espaciado.sm,
    backgroundColor: colores.fondoSuperficieClara,
    borderWidth: bordes.anchoGrueso,
    borderColor: colores.textoSobreClaro,
    borderRadius: bordes.radioChato,
  },
  encabezado: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: espaciado.xs,
    paddingBottom: espaciado.sm,
    borderBottomWidth: bordes.anchoGrueso,
    borderBottomColor: colores.textoSobreClaro,
  },
  titulo: {
    ...tipografia.marquesina,
    flex: 1,
    marginLeft: espaciado.sm,
    color: colores.textoSobreClaro,
  },
  total: {
    minWidth: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: espaciado.xs,
    borderRadius: bordes.radioChato,
  },
  totalTexto: {
    ...tipografia.titulo,
    color: colores.fondoClaro,
  },
  grilla: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: espaciado.sm,
  },
});