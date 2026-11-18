import { StyleSheet } from 'react-native';
import { colores } from '../../../../../core/theme/tema';

const TAMANO_FICHA = 120;
const MARGEN_INTERIOR = 10;

export const styles = StyleSheet.create({
  simbolo: {
    fontSize: 40,
    color: colores.acentoPrimario,
  },
  contenedor: {
    alignSelf: 'center',
  },
});