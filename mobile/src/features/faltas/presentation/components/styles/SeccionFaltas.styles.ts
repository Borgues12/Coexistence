import { StyleSheet } from "react-native";
import { colores, espaciado } from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  contenedor: {
    marginHorizontal: espaciado.sm,
    marginTop: espaciado.md,
    padding: espaciado.sm,
    borderRadius: 12,
    borderWidth: 1,
    borderLeftWidth: 6,
  },
  encabezado: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: espaciado.xs,
    paddingBottom: espaciado.xs,
    borderBottomWidth: 1,
    borderColor: colores.bordeSutil,
  },
  titulo: {
    flex: 1,
    marginLeft: espaciado.sm,
    color: colores.textoSobreClaro,
    fontSize: 16,
  },
  total: { fontSize: 24, fontWeight: "bold" },
  grilla: { flexDirection: "row", flexWrap: "wrap", paddingTop: espaciado.xs },
});
