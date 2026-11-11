// features/salas/presentation/components/SalaInfoCard/SalaInfoCard.tsx
import { View, Text } from "react-native";
import { TarjetaSolida } from "../../../../shared/components/TarjetaSolida";
import { styles } from "./styles/SalaInfoCard.styles";

type SalaInfoCardProps = {
  salaNombre: string;
  salaCodigoInvitacion: string;
};

export function SalaInfoCard({ salaNombre, salaCodigoInvitacion }: SalaInfoCardProps) {
  return (
    <TarjetaSolida>
      <Text style={styles.etiqueta}>Sala actual</Text>
      <Text style={styles.nombre}>{salaNombre}</Text>

      <View style={styles.bloqueCodigo}>
        <Text style={styles.codigoEtiqueta}>Código de invitación</Text>
        <Text style={styles.codigo}>{salaCodigoInvitacion}</Text>
      </View>
    </TarjetaSolida>
  );
}