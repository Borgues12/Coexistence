import { View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { colores } from '../../../../core/theme/tema';
import { styles } from './styles/FichaAcceso.styles';

const TAMANO_ICONO = 100;

export function IconoAcceso() {
  return (
    <View style={styles.contenedor} accessibilityRole="image" accessibilityLabel="Estrella dorada">
      <Fontisto
        name="ticket"
        size={TAMANO_ICONO}
        color={colores.acentoPrimario}
      />
    </View>
  );
}