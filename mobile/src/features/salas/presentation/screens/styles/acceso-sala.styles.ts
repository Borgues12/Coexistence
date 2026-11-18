import { StyleSheet } from 'react-native';
import { colores, espaciado } from '../../../../../core/theme/tema';

export const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
  },
  contenido: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: espaciado.lg,
    gap: espaciado.xl,
  },
});