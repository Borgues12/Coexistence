// shared/components/BotonCasino/BotonCasino.styles.ts
import { StyleSheet } from "react-native";
import {
  colores,
  tipografia,
  espaciado,
  bordes,
} from "../../../core/theme/tema";

export const coloresTexto = {
  primario: colores.fondo,
  contorno: colores.acentoPrimario,
  contornoClaro: colores.textoSobreClaro, // para usar sobre tarjetas crema
  acento: colores.textoSobreFondo,
  peligro: colores.textoSobreFondo,
} as const;

export const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: espaciado.sm,
    paddingVertical: 14,
    paddingHorizontal: espaciado.lg,
    borderRadius: bordes.radioChato,
    borderWidth: bordes.anchoLinea,
  },
  primario: {
    backgroundColor: colores.acentoPrimario,
    borderColor: colores.acentoPrimarioIntenso,
  },
  contorno: {
    backgroundColor: "transparent",
    borderColor: colores.acentoPrimario,
  },
  contornoClaro: {
    backgroundColor: "transparent",
    borderColor: colores.fondo,
  },
  acento: {
    backgroundColor: colores.fondo,
    borderColor: colores.acentoSecundario,
  },
  peligro: {
    backgroundColor: colores.acentoSecundario,
    borderColor: colores.acentoSecundario,
  },
  presionado: { opacity: 0.85 },
  deshabilitado: { opacity: 0.4 },
  texto: { ...tipografia.etiqueta, textTransform: "uppercase" },
});
