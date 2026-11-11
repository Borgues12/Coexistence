import { StyleSheet } from "react-native";
import { colores, espaciado } from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: colores.fondoClaro },
  mensaje: {
    color: colores.textoSobreClaro,
    textAlign: "center",
    marginTop: espaciado.xl,
  },
});
