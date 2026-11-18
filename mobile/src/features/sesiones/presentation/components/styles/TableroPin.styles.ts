import { StyleSheet } from "react-native";
import { colores, tipografia, espaciado, bordes } from "../../../../../core/theme/tema";

const TAMANO_MUESCA = 20;

export const styles = StyleSheet.create({
  // --- Boleto ---
  contenedor: {
    backgroundColor: colores.acentoPrimario,
    borderRadius: bordes.radioChato,
    padding: espaciado.sm,
  },
  perforacion: {
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: colores.fondo + "66",
    padding: espaciado.lg,
    gap: espaciado.md,
  },
  muesca: {
    position: "absolute",
    top: "50%",
    width: TAMANO_MUESCA,
    height: TAMANO_MUESCA,
    marginTop: -TAMANO_MUESCA / 2,
    borderRadius: TAMANO_MUESCA / 2,
    backgroundColor: colores.fondo, // debe coincidir con el fondo de la screen
  },
  muescaIzquierda: { left: -TAMANO_MUESCA / 2 },
  muescaDerecha: { right: -TAMANO_MUESCA / 2 },

  // --- Textos ---
  etiqueta: {
    ...tipografia.etiqueta,
    color: colores.fondo,
    opacity: 0.6,
    textAlign: "center",
  },
  titulo: {
    ...tipografia.titulo,
    color: colores.fondo,
    textAlign: "center",
  },

  // --- PIN ---
  input: {
    ...tipografia.display,
    letterSpacing: 12,
    textAlign: "center",
    color: colores.acentoPrimario,
    backgroundColor: colores.fondo,
    borderRadius: bordes.radioChato,
    paddingVertical: espaciado.md,
  },
  error: {
    ...tipografia.etiqueta,
    color: colores.acentoSecundario,
    textAlign: "center",
  },

  // --- Botón principal ---
  boton: {
    backgroundColor: colores.fondo,
    borderRadius: bordes.radioChato,
    paddingVertical: espaciado.md,
    alignItems: "center",
  },
  botonPresionado: { backgroundColor: colores.acentoSecundario },
  botonDeshabilitado: { opacity: 0.4 },
  botonTexto: {
    ...tipografia.etiqueta,
    color: colores.acentoPrimario,
  },

  // --- Estado confirmado ---
  confirmadoContenedor: {
    alignItems: "center",
    gap: espaciado.sm,
    paddingVertical: espaciado.md,
  },
  confirmado: {
    ...tipografia.titulo,
    color: colores.fondo,
    textAlign: "center",
  },

  // --- Modal de motivo ---
  modalFondo: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    padding: espaciado.lg,
  },
  modalCaja: {
    backgroundColor: colores.fondoSuperficie,
    borderWidth: bordes.anchoLinea,
    borderColor: colores.acentoPrimario,
    borderRadius: bordes.radioChato,
    padding: espaciado.lg,
    gap: espaciado.md,
  },
  modalTitulo: {
    ...tipografia.titulo,
    color: colores.acentoPrimario,
  },
  inputMotivo: {
    ...tipografia.cuerpo,
    color: colores.textoSobreFondo,
    backgroundColor: colores.fondo,
    borderWidth: bordes.anchoLinea,
    borderColor: colores.acentoPrimario,
    borderRadius: bordes.radioChato,
    padding: espaciado.md,
    minHeight: 96,
    textAlignVertical: "top",
  },
  modalBoton: {
    backgroundColor: colores.acentoPrimario,
    borderRadius: bordes.radioChato,
    paddingVertical: espaciado.md,
    alignItems: "center",
  },
  modalBotonTexto: {
    ...tipografia.etiqueta,
    color: colores.textoSobreClaro,
  },
  modalCancelar: {
    ...tipografia.cuerpo,
    color: colores.textoSobreFondo,
    opacity: 0.7,
    textAlign: "center",
  },
});