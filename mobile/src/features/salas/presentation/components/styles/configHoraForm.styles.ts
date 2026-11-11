// features/salas/presentation/components/ConfigHoraForm/ConfigHoraForm.styles.ts
import { StyleSheet } from "react-native";
import {
  colores,
  tipografia,
  espaciado,
  bordes,
} from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  fila: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  columna: { gap: espaciado.xs },
  etiqueta: {
    ...tipografia.etiqueta,
    color: colores.acentoPrimarioIntenso,
    textTransform: "uppercase",
  },
  hora: {
    ...tipografia.display,
    color: colores.textoSobreClaro,
  },
  aviso: {
    ...tipografia.cuerpo,
    fontSize: 14,
    color: colores.textoSobreClaro,
  },
  selector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: espaciado.md,
    backgroundColor: colores.fondo,
    borderRadius: bordes.radioChato,
  },
  selectorPresionado: { opacity: 0.85 },
  selectorTexto: {
    ...tipografia.display,
    color: colores.acentoPrimario,
    letterSpacing: 4,
  },
  textoError: {
    ...tipografia.cuerpo,
    fontSize: 14,
    color: colores.error,
  },
});