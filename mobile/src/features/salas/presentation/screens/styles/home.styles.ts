// features/salas/presentation/screens/home.styles.ts
import { StyleSheet } from "react-native";
import {
  colores,
  bordes,
  tipografia,
  espaciado,
} from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colores.fondo, // antes: colores.fondoPano
    padding: espaciado.md,
    gap: espaciado.md,
  },
  scroll: {
    flex: 1, // ocupa todo el espacio que deja el pie
  },
  titulo: {
    ...tipografia.display,
    color: colores.textoSobreFondo,
  },
  contenido: {
    padding: espaciado.lg,
    gap: espaciado.md,
  },
  salaInfo: {
    gap: espaciado.xs,
  },
  pie: {
    padding: espaciado.lg,
    gap: espaciado.sm,
    borderTopWidth: bordes.anchoLinea,
    borderTopColor: bordes.colorLinea,
    backgroundColor: colores.fondo,
  },
  sinSala: {
    ...tipografia.cuerpo,
    color: colores.textoSecundario, // antes: colores.textoTenue
    textAlign: "center",
  },
});
