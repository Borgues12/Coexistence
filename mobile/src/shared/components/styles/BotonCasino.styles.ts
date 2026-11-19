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
  secundario: colores.textoSobreClaro,
  contorno: colores.acentoPrimario,
  contornoClaro: colores.textoSobreClaro, // para usar sobre tarjetas crema
  contornoPeligro: colores.error,
  acento: colores.textoSobreFondo,
  peligro: colores.textoSobreFondo,
  critico: colores.textoSobreFondo,
  fantasma: colores.textoSobreFondo,
  fantasmaClaro: colores.textoSobreClaro,
  textoPeligro: colores.error,
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

  // --- Variantes sólidas ---
  primario: {
    backgroundColor: colores.acentoPrimario,
    borderColor: colores.acentoPrimarioIntenso,
  },
  secundario: {
    backgroundColor: colores.fondoClaro,
    borderColor: colores.textoSobreClaro,
  },
  acento: {
    backgroundColor: colores.fondo,
    borderColor: colores.acentoSecundario,
  },
  peligro: {
    backgroundColor: colores.acentoSecundario,
    borderColor: colores.acentoSecundario,
  },
  critico: {
    backgroundColor: colores.error,
    borderColor: colores.error,
  },

  // --- Variantes con contorno (Outline) ---
  contorno: {
    backgroundColor: "transparent",
    borderColor: colores.acentoPrimario,
  },
  contornoClaro: {
    backgroundColor: "transparent",
    borderColor: colores.fondo,
  },
  contornoPeligro: {
    backgroundColor: "transparent",
    borderColor: colores.error,
  },

  // --- Variantes ligeras (Ghost / Sin borde visible) ---
  fantasma: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  fantasmaClaro: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },

  // --- Modificadores de tamaño (opcionales) ---
  compacto: {
    paddingVertical: 8,
    paddingHorizontal: espaciado.md,
  },
  grande: {
    paddingVertical: 18,
    paddingHorizontal: espaciado.xl,
  },
  textoPeligro: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },

  // --- Estados ---
  presionado: { opacity: 0.85 },
  deshabilitado: { opacity: 0.4 },
  texto: {
    ...tipografia.etiqueta,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  textoCompacto: {
    fontSize: 12,
  },
});