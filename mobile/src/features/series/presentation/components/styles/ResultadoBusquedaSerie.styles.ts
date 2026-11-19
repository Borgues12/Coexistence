import { StyleSheet } from "react-native";
import { bordes, colores, espaciado, tipografia } from "../../../../../core/theme/tema"; // ajusta la ruta

export const styles = StyleSheet.create({
  fila: {
    flexDirection: "row",
    alignItems: "center",
    gap: espaciado.md,
    padding: espaciado.md,
    borderBottomWidth: bordes.anchoLinea,
    borderBottomColor: bordes.colorLinea,
  },
  titulo: {
    ...tipografia.titulo,
    flex: 1,
    fontSize: 16,
    color: colores.textoSobreFondo,
  },
});