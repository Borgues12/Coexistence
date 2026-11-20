import { View, Text, Alert, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "../store/use-auth-store";
import {
  signInWithEmailPassword,
  signInWithGoogle,
  signOutUser,
} from "../../data/auth.repository";
import { BotonCasino } from "../../../../shared/components/BotonCasino";
import { colores, tipografia, espaciado } from "../../../../core/theme/tema";

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
        <Text style={styles.titulo} numberOfLines={1} adjustsFontSizeToFit>
          COEXISTENCE
        </Text>
        <View style={styles.lemaFila}>
          <View style={styles.filete} />
          <Text style={styles.subtitulo}>Convivencia audiovisual</Text>
          <View style={styles.filete} />
        </View>{" "}
      </View>

      <View style={styles.bloqueInferior}>
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: espaciado.sm,
    paddingBottom: espaciado.md,
    backgroundColor: colores.fondo,
  },
  cabecera: {
    alignItems: "center",
    gap: 0,
    paddingHorizontal: espaciado.md,
  },
  logo: {
    width: 360,
    height: 360,
    marginTop: espaciado.lg, // sube el logo hacia arriba, recorta el padding superior
    marginBottom: -50, // acerca el título al dibujo, recorta el padding inferior
  },
  titulo: {
  ...tipografia.marquesinaTitulo,
  lineHeight: 56,
  width: "100%",
  textTransform: "uppercase",
  color: colores.acentoPrimario,
  textAlign: "center",
  textShadowColor: "#C9A24B80",
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: 12,
},
  subtitulo: {
    ...tipografia.marquesinaLema,
    lineHeight: 22,
    textTransform: "uppercase",
    color: colores.textoSobreFondo,
    textAlign: "center",
  },
  bloqueInferior: {
    paddingHorizontal: espaciado.lg,
    gap: espaciado.md,
    marginTop: espaciado.xl, // separación entre el lema y los botones
  },
  acciones: {
    width: "100%",
  },
  devLoginContainer: {
    borderTopWidth: 1,
    borderTopColor: colores.bordeSutil,
    paddingTop: espaciado.sm,
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
  lemaFila: {
    flexDirection: "row",
    alignItems: "center",
    gap: espaciado.sm,
    marginTop: espaciado.xs,
  },
  filete: {
    width: 28,
    height: 1,
    backgroundColor: colores.acentoPrimario,
  },
});
