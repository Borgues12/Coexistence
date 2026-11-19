import { StyleSheet } from "react-native";
import {
  colores,
  espaciado,
  tipografia,
  bordes,
} from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
  },
  estadoVacio: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: espaciado.xl,
  },
  iconoMarco: {
    width: 56,
    height: 56,
    borderRadius: bordes.radioChato,
    borderWidth: bordes.anchoLinea,
    borderColor: bordes.colorLinea,
    backgroundColor: colores.fondoSuperficie,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: espaciado.md,
  },
  tituloVacio: {
    ...tipografia.titulo,
    color: colores.textoSobreFondo,
    textAlign: "center",
    marginBottom: espaciado.xs,
  },
  mensaje: {
    ...tipografia.cuerpo,
    color: colores.textoSecundario,
    textAlign: "center",
  },
});