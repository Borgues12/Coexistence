import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles/SelectorHora.styles";
import {
  colores,
  tipografia,
  espaciado,
  bordes,
  sombraSolida,
} from "../../core/theme/tema";

type Props = {
  valor: string; // "HH:MM"
  onChange: (valor: string) => void;
  deshabilitado?: boolean;
  pasoMinutos?: number;
};

const pad = (n: number) => String(n).padStart(2, "0");
const mod = (n: number, m: number) => ((n % m) + m) % m;

export function SelectorHora({
  valor,
  onChange,
  deshabilitado = false,
  pasoMinutos = 5,
}: Props) {
  const [h, m] = valor.split(":").map(Number);

  const cambiarHora = (d: number) =>
    onChange(`${pad(mod(h + d, 24))}:${pad(m)}`);
  const cambiarMinuto = (d: number) =>
    onChange(`${pad(h)}:${pad(mod(m + d * pasoMinutos, 60))}`);

  return (
    <View style={styles.fila}>
      <Columna
        texto={pad(h)}
        etiqueta="Hora"
        onArriba={() => cambiarHora(1)}
        onAbajo={() => cambiarHora(-1)}
        deshabilitado={deshabilitado}
      />
      <Text style={styles.separador}>:</Text>
      <Columna
        texto={pad(m)}
        etiqueta="Min"
        onArriba={() => cambiarMinuto(1)}
        onAbajo={() => cambiarMinuto(-1)}
        deshabilitado={deshabilitado}
      />
    </View>
  );
}

type ColumnaProps = {
  texto: string;
  etiqueta: string;
  onArriba: () => void;
  onAbajo: () => void;
  deshabilitado: boolean;
};

function Columna({
  texto,
  etiqueta,
  onArriba,
  onAbajo,
  deshabilitado,
}: ColumnaProps) {
  return (
    <View style={styles.columna}>
      <Text style={styles.etiqueta}>{etiqueta}</Text>

      <Flecha nombre="chevron-up" onPress={onArriba} deshabilitado={deshabilitado} />

      <View style={styles.cajaContenedor}>
        <View style={styles.sombra} />
        <View style={styles.caja}>
          <Text style={styles.numero}>{texto}</Text>
        </View>
      </View>

      <Flecha nombre="chevron-down" onPress={onAbajo} deshabilitado={deshabilitado} />
    </View>
  );
}

function Flecha({
  nombre,
  onPress,
  deshabilitado,
}: {
  nombre: "chevron-up" | "chevron-down";
  onPress: () => void;
  deshabilitado: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={deshabilitado}
      hitSlop={8}
      style={({ pressed }) => [
        styles.flecha,
        pressed && styles.flechaPresionada,
        deshabilitado && { opacity: 0.4 },
      ]}
    >
      <Ionicons name={nombre} size={22} color={colores.acentoPrimarioIntenso} />
    </Pressable>
  );
}

