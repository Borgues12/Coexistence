// shared/components/TarjetaSolida/TarjetaSolida.styles.ts
import { StyleSheet } from "react-native";
import {
  colores,
  espaciado,
  bordes,
  sombraSolida,
} from "../../../core/theme/tema";

const { desplazamiento } = sombraSolida;

export const styles = StyleSheet.create({
  // Deja libre el hueco por donde asoma la sombra
  contenedor: {
    paddingRight: desplazamiento,
    paddingBottom: desplazamiento,
  },
  // Rectángulo detrás, corrido hacia abajo-derecha
  sombra: {
    position: "absolute",
    top: desplazamiento,
    left: desplazamiento,
    right: 0,
    bottom: 0,
    backgroundColor: sombraSolida.color,
    borderRadius: bordes.radioChato,
  },
  tarjeta: {
    padding: espaciado.md,
    gap: espaciado.sm,
    backgroundColor: colores.fondoSuperficieClara,
    borderWidth: bordes.anchoGrueso,
    borderColor: colores.fondo,
    borderRadius: bordes.radioChato,
  },
});