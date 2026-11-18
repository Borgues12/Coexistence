import { View, Text, TextInput, Pressable, ActivityIndicator } from 'react-native';
import { LONGITUD_CODIGO_SALA, type ModoAccesoSala } from '../../domain/sala.domain';
import { colores } from '../../../../core/theme/tema';
import { styles } from './styles/FormAccesoSala.styles';

type Props = {
  modo: ModoAccesoSala;
  texto: string;
  onChangeTexto: (texto: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  puedeEnviar: boolean;
  error: string | null;
  mensajeResultado: string | null;
};

const textosPorModo: Record<
  ModoAccesoSala,
  { etiqueta: string; placeholder: string; boton: string }
> = {
  crear: { etiqueta: 'Nombre de la sala', placeholder: 'Ej. Noche de cine', boton: 'Crear sala' },
  unirse: { etiqueta: 'Código de invitación', placeholder: 'ABC123', boton: 'Unirme' },
};

export function FormularioAccesoSala({
  modo,
  texto,
  onChangeTexto,
  onSubmit,
  isLoading,
  puedeEnviar,
  error,
  mensajeResultado,
}: Props) {
  const textos = textosPorModo[modo];
  const esUnirse = modo === 'unirse';

  return (
    <View style={styles.contenedor}>
      <Text style={styles.etiqueta}>{textos.etiqueta.toUpperCase()}</Text>

      <TextInput
        style={styles.input}
        value={texto}
        onChangeText={onChangeTexto}
        placeholder={textos.placeholder}
        placeholderTextColor={colores.textoSobreFondo + '66'}
        selectionColor={colores.acentoPrimario}
        autoCapitalize={esUnirse ? 'characters' : 'sentences'}
        autoCorrect={false}
        maxLength={esUnirse ? LONGITUD_CODIGO_SALA : undefined}
      />

      <Pressable
        onPress={onSubmit}
        disabled={!puedeEnviar}
        accessibilityRole="button"
        style={({ pressed }) => [
          styles.boton,
          !puedeEnviar && styles.botonDeshabilitado,
          pressed && styles.botonPresionado,
        ]}
      >
        {isLoading ? (
          <ActivityIndicator color={colores.textoSobreClaro} />
        ) : (
          <Text style={styles.textoBoton}>{textos.boton.toUpperCase()}</Text>
        )}
      </Pressable>

      {error && <Text style={styles.error}>{error}</Text>}
      {mensajeResultado && <Text style={styles.exito}>{mensajeResultado}</Text>}
    </View>
  );
}