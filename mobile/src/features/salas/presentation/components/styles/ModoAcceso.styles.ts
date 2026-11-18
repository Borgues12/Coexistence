import { StyleSheet } from 'react-native';
import { colores, tipografia, espaciado, bordes } from '../../../../../core/theme/tema';

export const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    borderBottomWidth: bordes.anchoLinea,
    borderBottomColor: bordes.colorLinea,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: espaciado.md,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActivo: {
    borderBottomColor: colores.acentoPrimario,
  },
  texto: {
    ...tipografia.etiqueta,
    color: colores.textoSobreFondo,
    opacity: 0.5,
  },
  textoActivo: {
    color: colores.acentoPrimario,
    opacity: 1,
  },
});