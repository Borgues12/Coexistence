import { View, Text, Pressable } from 'react-native';
import type { ModoAccesoSala } from '../../domain/sala.domain';
import { styles } from './styles/ModoAcceso.styles';

type Props = {
  modoActual: ModoAccesoSala;
  onSelectMode: (modo: ModoAccesoSala) => void;
};

const opciones: { modo: ModoAccesoSala; etiqueta: string }[] = [
  { modo: 'crear', etiqueta: 'Crear sala' },
  { modo: 'unirse', etiqueta: 'Unirse a sala' },
];

export function SelectorModoAcceso({ modoActual, onSelectMode }: Props) {
  return (
    <View style={styles.contenedor}>
      {opciones.map(({ modo, etiqueta }) => {
        const activo = modo === modoActual;
        return (
          <Pressable
            key={modo}
            onPress={() => onSelectMode(modo)}
            accessibilityRole="tab"
            accessibilityState={{ selected: activo }}
            style={[styles.tab, activo && styles.tabActivo]}
          >
            <Text style={[styles.texto, activo && styles.textoActivo]}>
              {etiqueta.toUpperCase()}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}