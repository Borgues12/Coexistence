import { StyleSheet } from "react-native";
import { bordes, colores, espaciado, tipografia } from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  contenedor: { alignItems: "center", gap: espaciado.md },
  card: {
    alignSelf: "stretch",
    backgroundColor: colores.fondoSuperficie,
    borderWidth: bordes.anchoLinea,
    borderColor: colores.acentoPrimario,
    borderRadius: bordes.radioChato,
    paddingVertical: espaciado.md,
    paddingHorizontal: espaciado.md,
    gap: espaciado.sm,
  },
  titulo: {
    ...tipografia.titulo,
    color: colores.textoSobreFondo,
    textAlign: "center",
  },
  filaEpisodio: {
    flexDirection: "row",
    alignItems: "center",
    gap: espaciado.sm,
  },
  chip: {
    backgroundColor: colores.acentoPrimario,
    borderRadius: bordes.radioChato,
    paddingHorizontal: espaciado.sm,
    paddingVertical: espaciado.xs,
  },
  chipTexto: {
    ...tipografia.etiqueta,
    color: colores.textoSobreClaro,
  },
  nombreEpisodio: {
    flex: 1,
    ...tipografia.cuerpo,
    color: colores.textoSobreFondo,
  },
  divisor: {
    height: bordes.anchoLinea,
    backgroundColor: colores.bordeSutil,
  },
  filaDatos: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detalle: { ...tipografia.etiqueta, color: colores.textoSecundario },
  horario: { ...tipografia.etiqueta, color: colores.acentoPrimario },
});