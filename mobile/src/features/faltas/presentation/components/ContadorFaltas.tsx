import { View, Text } from "react-native";
import { styles } from "./styles/ContadorFaltas.styles";

interface Props {
  faltasContadores: Record<string, number>;
  nombresPorUid: Record<string, string>;
}

export function ContadorFaltas({ faltasContadores, nombresPorUid }: Props) {
  return (
    <View style={styles.grilla}>
      {Object.entries(faltasContadores).map(([userUid, total]) => (
        <View key={userUid} style={styles.celda}>
          <View style={styles.cajaContenedor}>
            <View style={styles.sombra} />
            <View style={styles.tarjeta}>
              <Text style={styles.nombre} numberOfLines={1}>
                {nombresPorUid[userUid] ?? "Miembro"}
              </Text>
              <Text style={styles.total}>{total}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}