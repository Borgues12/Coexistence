import { StyleSheet } from "react-native";
import { colores, espaciado } from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  celda: {
    width: "20%",
    padding: espaciado.xs,
  },
  tarjeta: {
  aspectRatio: 1,
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 1,
  borderRadius: 12,
  backgroundColor: colores.fondo,
},
dia: {
  color: colores.textoSobreFondo,
  fontSize: 13,
  fontWeight: "bold",
  marginTop: 2,
},
mes: {
  color: colores.textoSobreFondo,
  fontSize: 9,
  letterSpacing: 0.8,
  opacity: 0.6,
},
  celdaPresionada: { opacity: 0.6 },
});
