import { StyleSheet } from "react-native";
import { colores, espaciado } from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  grilla: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: espaciado.xs,
    borderBottomWidth: 1,
    borderColor: colores.bordeSutil,
  },
  celda: {
    width: "25%",
    padding: espaciado.xs,
  },
  tarjeta: {
    alignItems: "center",
    paddingVertical: espaciado.md,
    paddingHorizontal: espaciado.xs,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colores.acentoPrimario,
    backgroundColor: colores.fondoClaro + "14",
  },
  nombre: {
    color: colores.textoSobreFondo,
    fontSize: 13,
  },
  total: {
    color: colores.acentoPrimario,
    fontSize: 36,
    fontWeight: "bold",
    marginTop: espaciado.xs,
  },
});