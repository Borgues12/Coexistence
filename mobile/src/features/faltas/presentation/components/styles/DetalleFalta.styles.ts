import { StyleSheet } from "react-native";
import { colores, espaciado } from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    justifyContent: "center",
    padding: espaciado.lg,
    backgroundColor: "#000000AA",
  },
  tarjeta: {
    padding: espaciado.lg,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: colores.fondo,
  },
  encabezado: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: espaciado.md,
  },
  titulo: { marginLeft: espaciado.sm, fontSize: 20, fontWeight: "bold" },
  fila: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: espaciado.sm,
  },
  valor: {
    flex: 1,
    marginLeft: espaciado.sm,
    color: colores.textoSobreFondo,
    fontSize: 15,
  },
  estado: { textTransform: "capitalize" },
});