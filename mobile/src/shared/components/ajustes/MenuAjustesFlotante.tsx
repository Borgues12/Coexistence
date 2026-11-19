import { useState } from "react";
import { View, Text, Pressable, Modal, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  colores,
  espaciado,
  tipografia,
  bordes,
  sombraSolida,
} from "../../../core/theme/tema";
import { signOutUser } from "../../../features/auth/data/auth.repository";

type OpcionMenu = {
  id: string;
  etiqueta: string;
  icono: keyof typeof Ionicons.glyphMap;
  peligro?: boolean;
  onPress: () => void;
};

type Props = {
  onIrPerfil?: () => void;
};

export function MenuAjustesFlotante({ onIrPerfil }: Props) {
  const [abierto, setAbierto] = useState(false);
  const insets = useSafeAreaInsets();

  const handleCerrarSesion = async () => {
    try {
      await signOutUser();
    } catch (err) {
      console.error("Error al cerrar sesión:", err);
    }
  };

  const opciones: OpcionMenu[] = [
    ...(onIrPerfil
      ? [
          {
            id: "perfil",
            etiqueta: "Mi perfil",
            icono: "person-outline" as const,
            onPress: () => {
              setAbierto(false);
              onIrPerfil();
            },
          },
        ]
      : []),
    {
      id: "logout",
      etiqueta: "Cerrar sesión",
      icono: "log-out-outline",
      peligro: true,
      onPress: () => {
        setAbierto(false);
        handleCerrarSesion();
      },
    },
  ];

  const topOffset = insets.top + espaciado.sm;

  return (
    <>
      <Pressable
        onPress={() => setAbierto(true)}
        hitSlop={10}
        accessibilityRole="button"
        accessibilityLabel="Abrir menú de configuración"
        style={({ pressed }) => [
          styles.botonCircular,
          { top: topOffset, right: espaciado.md },
          pressed && styles.botonPresionado,
        ]}
      >
        <Ionicons
          name="settings-outline"
          size={20}
          color={colores.acentoPrimario}
        />
      </Pressable>

      <Modal
        visible={abierto}
        transparent
        animationType="fade"
        onRequestClose={() => setAbierto(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setAbierto(false)}>
          <Pressable
            style={[
              styles.menuContenedor,
              { top: topOffset + 48, right: espaciado.md },
            ]}
            onPress={(e) => e.stopPropagation()}
          >
            {opciones.map((opcion, index) => {
              const esUltimo = index === opciones.length - 1;
              return (
                <Pressable
                  key={opcion.id}
                  onPress={opcion.onPress}
                  style={({ pressed }) => [
                    styles.itemMenu,
                    !esUltimo && styles.itemSeparador,
                    pressed && styles.itemPresionado,
                  ]}
                >
                  <Ionicons
                    name={opcion.icono}
                    size={18}
                    color={
                      opcion.peligro ? colores.error : colores.acentoPrimario
                    }
                  />
                  <Text
                    style={[
                      styles.textoItem,
                      opcion.peligro && styles.textoPeligro,
                    ]}
                  >
                    {opcion.etiqueta}
                  </Text>
                </Pressable>
              );
            })}
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

const TAMANO_CIRCULO = 40;

const styles = StyleSheet.create({
  botonCircular: {
    position: "absolute",
    zIndex: 20,
    width: TAMANO_CIRCULO,
    height: TAMANO_CIRCULO,
    borderRadius: TAMANO_CIRCULO / 2,
    borderWidth: bordes.anchoLinea,
    borderColor: bordes.colorLinea,
    backgroundColor: colores.fondoSuperficie,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  botonPresionado: {
    opacity: 0.75,
    transform: [{ scale: 0.95 }],
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
  },
  menuContenedor: {
    position: "absolute",
    minWidth: 195,
    backgroundColor: colores.fondoSuperficie,
    borderRadius: bordes.radioChato,
    borderWidth: bordes.anchoGrueso,
    borderColor: colores.acentoPrimario,
    shadowColor: sombraSolida.color,
    shadowOffset: {
      width: sombraSolida.desplazamiento,
      height: sombraSolida.desplazamiento,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
  itemMenu: {
    flexDirection: "row",
    alignItems: "center",
    gap: espaciado.sm,
    paddingVertical: espaciado.md,
    paddingHorizontal: espaciado.md,
  },
  itemSeparador: {
    borderBottomWidth: bordes.anchoLinea,
    borderBottomColor: bordes.colorLinea,
  },
  itemPresionado: {
    backgroundColor: colores.fondo,
  },
  textoItem: {
    ...tipografia.etiqueta,
    color: colores.textoSobreFondo,
  },
  textoPeligro: {
    color: colores.error,
  },
});