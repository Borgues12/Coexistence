import { StyleSheet } from 'react-native';
import { colores, tipografia, espaciado, bordes } from '../../../../../core/theme/tema';

export const styles = StyleSheet.create({
  contenedor: {
    gap: espaciado.md,
  },
  etiqueta: {
    ...tipografia.etiqueta,
    color: colores.acentoPrimario,
  },
  input: {
    ...tipografia.cuerpo,
    color: colores.textoSobreFondo,
    backgroundColor: colores.fondoSuperficie,
    borderWidth: bordes.anchoLinea,
    borderColor: colores.acentoPrimario,
    borderRadius: bordes.radioChato,
    paddingHorizontal: espaciado.md,
    paddingVertical: espaciado.md,
  },
  boton: {
    backgroundColor: colores.acentoPrimario,
    borderRadius: bordes.radioChato,
    paddingVertical: espaciado.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonPresionado: {
    backgroundColor: colores.acentoPrimarioIntenso,
  },
  botonDeshabilitado: {
    opacity: 0.4,
  },
  textoBoton: {
    ...tipografia.etiqueta,
    color: colores.textoSobreClaro,
  },
  error: {
    ...tipografia.cuerpo,
    color: colores.error,
  },
  exito: {
    ...tipografia.cuerpo,
    color: colores.exito,
  },
});