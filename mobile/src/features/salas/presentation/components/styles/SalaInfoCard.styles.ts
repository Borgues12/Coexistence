// features/salas/presentation/components/SalaInfoCard/SalaInfoCard.styles.ts
import { StyleSheet } from "react-native";
import {
  colores,
  tipografia,
  espaciado,
  bordes,
} from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  etiqueta: {
    ...tipografia.etiqueta,
    color: colores.acentoPrimarioIntenso,
    textTransform: "uppercase",
  },
  nombre: {
    ...tipografia.titulo,
    color: colores.textoSobreClaro,
  },
  bloqueCodigo: {
    marginTop: espaciado.xs,
    padding: espaciado.sm,
    gap: espaciado.xs,
    backgroundColor: colores.fondo,
    borderRadius: bordes.radioChato,
  },
  codigoEtiqueta: {
    ...tipografia.etiqueta,
    color: colores.textoSobreFondo,
  },
  codigo: {
    ...tipografia.display,
    color: colores.acentoPrimario,
    letterSpacing: 4,
  },
});