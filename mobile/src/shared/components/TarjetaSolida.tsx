// shared/components/TarjetaSolida/TarjetaSolida.tsx
import { ReactNode } from "react";
import { View } from "react-native";
import { styles } from "./styles/TarjetaSolida.styles";

interface TarjetaSolidaProps {
  children: ReactNode;
}

export function TarjetaSolida({ children }: TarjetaSolidaProps) {
  return (
    <View style={styles.contenedor}>
      <View style={styles.sombra} />
      <View style={styles.tarjeta}>{children}</View>
    </View>
  );
}