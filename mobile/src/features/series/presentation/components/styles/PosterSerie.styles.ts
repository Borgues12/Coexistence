import { StyleSheet } from "react-native";
import { bordes, colores, tipografia } from "../../../../../core/theme/tema"; // ajusta la ruta

export const styles = StyleSheet.create({
  imagen: {
    backgroundColor: colores.fondoSuperficie,
    borderRadius: bordes.radioChato,
  },
  placeholder: {
    backgroundColor: colores.fondoSuperficie,
    borderRadius: bordes.radioChato,
    borderWidth: bordes.anchoLinea,
    borderColor: bordes.colorLinea,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderTexto: {
    ...tipografia.etiqueta,
    color: colores.textoSecundario,
  },
});