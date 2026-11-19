import { StyleSheet } from "react-native";
import { bordes, colores, espaciado, tipografia } from "../../../../../core/theme/tema";

export const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
    padding: espaciado.md,
    // Eliminamos el gap general para evitar separaciones globales excesivas
  },
  cabecera: { 
    flexDirection: "row", 
    gap: espaciado.md, 
    alignItems: "center",
    marginBottom: espaciado.md, // Espacio controlado debajo de la cabecera
  },
  seccionTemporadas: {
    marginBottom: espaciado.sm, // Espacio corto y controlado entre temporadas y episodios
  },
  titulo: { ...tipografia.titulo, flex: 1, color: colores.textoSobreFondo },
  etiqueta: { ...tipografia.marquesina, color: colores.textoSecundario },
  episodios: { 
    flex: 1,
    marginTop: espaciado.xs, // Asegura que los episodios arranquen cerca de las temporadas
  },
  error: { ...tipografia.cuerpo, color: colores.error, textAlign: "center" },
  boton: {
    backgroundColor: colores.acentoPrimario,
    borderRadius: bordes.radioChato,
    paddingVertical: espaciado.md,
    alignItems: "center",
    marginTop: espaciado.md, // Espacio antes de llegar al botón inferior
  },
  botonDeshabilitado: { opacity: 0.4 },
  botonTexto: { ...tipografia.etiqueta, color: colores.textoSobreClaro },
});