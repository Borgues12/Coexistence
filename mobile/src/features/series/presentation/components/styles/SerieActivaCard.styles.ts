import { StyleSheet } from "react-native";
import { bordes, colores, espaciado, tipografia } from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  contenedor: { alignItems: "center", gap: espaciado.md },
  titulo: {
    ...tipografia.display,
    color: colores.textoSobreFondo,
    textAlign: "center",
  },
  card: {
    alignSelf: "stretch",
    backgroundColor: colores.fondoSuperficie,
    borderWidth: bordes.anchoLinea,
    borderColor: colores.acentoPrimario,
    borderRadius: bordes.radioChato,
    padding: espaciado.lg,
    gap: espaciado.xs,
    alignItems: "center",
  },
  etiqueta: { ...tipografia.etiqueta, color: colores.acentoPrimario },
  episodio: { ...tipografia.titulo, color: colores.textoSobreFondo },
  detalle: { ...tipografia.cuerpo, color: colores.textoSobreFondo },
});