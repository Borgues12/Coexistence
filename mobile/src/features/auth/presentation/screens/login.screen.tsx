import { View, Text, Alert, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "../store/use-auth-store";
import {
  signInWithEmailPassword,
  signInWithGoogle,
  signOutUser,
} from "../../data/auth.repository";
import { BotonCasino } from "../../../../shared/components/BotonCasino";
import {
  colores,
  tipografia,
  espaciado,
} from "../../../../core/theme/tema";

export function LoginScreen() {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const handleSignIn = async () => {
    console.log("[Auth] Iniciando sesión con Google");
    try {
      const authenticatedUser = await signInWithGoogle();
      console.log("[Auth] Usuario autenticado:", authenticatedUser?.uid);
      setUser(authenticatedUser);
    } catch (error: any) {
      console.error("[Auth] Error al iniciar sesión con Google:", error);
      Alert.alert("Error al iniciar sesión", error.message);
    }
  };

  async function handleDevLogin(email: string) {
    try {
      await signInWithEmailPassword(email, "Testa.123");
    } catch (err: any) {
      console.error("[Auth] Error en login de desarrollo:", err);
      Alert.alert("Error en login de prueba", err.message);
    }
  }

  async function handleSignOut() {
    try {
      await signOutUser();
    } catch (err: any) {
      console.error("[Auth] Error al cerrar sesión:", err);
      Alert.alert("Error al cerrar sesión", err.message);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cabecera}>
        <Image
          source={require("../../../../../assets/android-icon-foreground.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.titulo}>COEXISTENCE</Text>
        <Text style={styles.subtitulo}>Convivencia audiovisual</Text>
      </View>

      <View style={styles.acciones}>
        {user ? (
          <BotonCasino
            titulo="Cerrar sesión"
            icono="log-out-outline"
            variante="textoPeligro"
            onPress={handleSignOut}
          />
        ) : (
          <BotonCasino
            titulo="Continuar con Google"
            icono="logo-google"
            variante="primario"
            onPress={handleSignIn}
          />
        )}
      </View>

      {__DEV__ && (
        <View style={styles.devLoginContainer}>
          <Text style={styles.devLabel}>Solo desarrollo</Text>
          <BotonCasino
            titulo="Login como Usuario A"
            icono="person-outline"
            variante="contorno"
            onPress={() => handleDevLogin("test.a@coexistence.ec")}
          />
          <BotonCasino
            titulo="Login como Usuario B"
            icono="person-outline"
            variante="contorno"
            onPress={() => handleDevLogin("test.b@coexistence.ec")}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: espaciado.lg,
    backgroundColor: colores.fondo,
    gap: espaciado.xl,
  },
  cabecera: {
    alignItems: "center",
    gap: espaciado.xs,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: espaciado.sm,
  },
  titulo: {
    ...tipografia.display,
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: 3.5,
    textTransform: "uppercase",
    color: colores.acentoPrimario,
    textAlign: "center",
  },
  subtitulo: {
    ...tipografia.cuerpo,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 1.2,
    color: colores.textoSecundario,
    textAlign: "center",
  },
  acciones: {
    width: "100%",
  },
  devLoginContainer: {
    marginTop: espaciado.md,
    borderTopWidth: 1,
    borderTopColor: colores.bordeSutil,
    paddingTop: espaciado.md,
    gap: espaciado.sm,
    opacity: 0.85,
  },
  devLabel: {
    ...tipografia.marquesina,
    fontSize: 10,
    letterSpacing: 1.2,
    color: colores.textoSecundario,
    textAlign: "center",
    marginBottom: espaciado.xs,
  },
});