import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SalaTabsParamList } from "./types";
import { HomeScreen } from "../../features/salas/presentation/screens/home.screen";
import { colores } from "../../core/theme/tema";
import { FaltasScreen } from "../../features/faltas/presentation/screens/Faltas.screen";

const Tab = createBottomTabNavigator<SalaTabsParamList>();

console.log("[tabs]", {
  Home: typeof HomeScreen,
  Faltas: typeof FaltasScreen,
  Tab: typeof createBottomTabNavigator,
  Ionicons: typeof Ionicons,
  colores: typeof colores,
});
export function SalaTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colores.acentoPrimario,
        tabBarInactiveTintColor: colores.textoSobreFondo,
        tabBarStyle: { backgroundColor: colores.fondo, borderTopColor: colores.acentoPrimario },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Sesión",
          tabBarIcon: ({ color, size }) => <Ionicons name="film-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Faltas"
        component={FaltasScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="alert-circle-outline" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}