// features/salas/presentation/components/SesionEstadoPanel/SesionEstadoPanel.styles.ts
import { StyleSheet } from "react-native";
import {
  colores,
  tipografia,
  espaciado,
  bordes,
} from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  insignia: {
    flexDirection: "row",
    alignItems: "center",
    gap: espaciado.sm,
  },
  insigniaTexto: {
    ...tipografia.etiqueta,
    textTransform: "uppercase",
  },
  mensaje: {
    ...tipografia.cuerpo,
    color: colores.textoSobreClaro,
  },
  bloquePin: {
    padding: espaciado.md,
    alignItems: "center",
    gap: espaciado.xs,
    backgroundColor: colores.fondo,
    borderRadius: bordes.radioChato,
  },
  pinEtiqueta: {
    ...tipografia.etiqueta,
    color: colores.textoSobreFondo,
    textTransform: "uppercase",
  },
  pinValor: {
    ...tipografia.display,
    fontSize: 40,
    color: colores.acentoPrimario,
    letterSpacing: 12,
  },
});