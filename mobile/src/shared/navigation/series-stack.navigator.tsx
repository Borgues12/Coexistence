import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SeriesStackParamList } from "./types";
import { SerieScreen } from "../../features/series/presentation/screens/SerieScreen";
import { ConfigurarInicioScreen } from "../../features/series/presentation/screens/ConfigurarInicio";

const Stack = createNativeStackNavigator<SeriesStackParamList>();

export function SeriesStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BuscarSerie">
        {({ navigation }) => (
          <SerieScreen
            onSeleccionar={(r) => navigation.navigate("ConfigurarInicio", r)}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="ConfigurarInicio">
        {({ route, navigation }) => (
          <ConfigurarInicioScreen
            serie={route.params}
            onConfirmado={() => navigation.popToTop()}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}