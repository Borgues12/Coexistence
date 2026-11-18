import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuthStore } from "../../features/auth/presentation/store/use-auth-store";
import { LoginScreen } from "../../features/auth/presentation/screens/login.screen";

import { AccesoSalaScreen } from "../../features/salas/presentation/screens/acceso-sala.screen";
import { RootStackParamList } from "./types";
import { SalaTabsNavigator } from "./sala-tabs.navigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const user = useAuthStore((state) => state.user);
  const userSalaActualId = useAuthStore(
    (state) => state.usuario?.userSalaActualId,
  );
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : !userSalaActualId ? (
          <Stack.Screen
            name="CrearOUnirseSala"
            component={AccesoSalaScreen}
          />
        ) : (
          <Stack.Screen name="SalaTabs" component={SalaTabsNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
