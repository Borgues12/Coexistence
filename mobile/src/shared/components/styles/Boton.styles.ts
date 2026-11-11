// shared/components/Boton/Boton.styles.ts
import { StyleSheet } from "react-native";
import {
  colores,
  tipografia,
  espaciado,
  bordes,
} from "../../../core/theme/tema";

export const styles = StyleSheet.create({
  base: {
    paddingVertical: espaciado.sm + espaciado.xs,
    paddingHorizontal: espaciado.lg,
    borderWidth: bordes.anchoLinea,
    borderRadius: bordes.radioChato,
    alignItems: "center",
  },
  presionado: { opacity: 0.85 },
  inactivo: { opacity: 0.5 },
  texto: { ...tipografia.etiqueta, textTransform: "uppercase" },
});

export const variantes = StyleSheet.create({
  primario: {
    backgroundColor: colores.acentoPrimario,
    borderColor: colores.acentoPrimarioIntenso,
  },
  secundario: {
    backgroundColor: "transparent",
    borderColor: colores.acentoPrimario,
  },
  peligro: {
    backgroundColor: colores.acentoSecundario,
    borderColor: colores.acentoSecundario,
  },
  contorno: {
    backgroundColor: "transparent",
    borderColor: colores.fondo,
  },
});

export const textos = StyleSheet.create({
  primario: { color: colores.textoSobreClaro },
  secundario: { color: colores.acentoPrimario },
  peligro: { color: colores.textoSobreFondo },
  contorno: { color: colores.textoSobreClaro },
});
