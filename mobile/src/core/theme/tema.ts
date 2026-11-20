// core/theme/tema.ts
export const colores = {
  // Base (de la paleta)
  fondo: "#2A2824",
  fondoSuperficie: "#3A362F", // derivado: entre #2A2824 y #635849
  acentoPrimario: "#D4B880",
  acentoSecundario: "#934637",

  // Superficies claras (derivadas del arena #D4B880)
  fondoClaro: "#EFE3C8",
  fondoSuperficieClara: "#E9DCBC",

  // Detalles derivados
  acentoPrimarioIntenso: "#7A5E24", // dorado oscuro, legible sobre tarjetas claras
  bordeSutil: "#D4B88033", // arena al 20% de opacidad

  // Textos
  textoSobreFondo: "#EFE3C8",
  textoSecundario: "#A19783", // nuevo: subtítulos y datos de apoyo sobre fondo oscuro
  textoSobreClaro: "#2A2824",

  // Estados (la paleta no trae verde, este es cálido para no desentonar)
  exito: "#46663A",
  error: "#A63A2C",
  info: "#D4B880",
  advertencia: "#934637",
} as const;

export const tipografia = {
  display: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 28,
    letterSpacing: 0.5,
  },
  titulo: {
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
    letterSpacing: 0.3,
  },
  cuerpo: {
    fontFamily: "PTSerif_400Regular",
    fontSize: 16,
    lineHeight: 24,
  },
  etiqueta: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    letterSpacing: 0.4,
  },
  marquesina: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    letterSpacing: 2.5,
    textTransform: "uppercase",
  },
  marquesinaTitulo: {
    fontFamily: "Monoton_400Regular",
    fontSize: 40,
    letterSpacing: 3,
  },
  marquesinaLema: {
    fontFamily: "PoiretOne_400Regular",
    fontSize: 15,
    letterSpacing: 6,
  },
} as const;

export const espaciado = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const bordes = {
  radioChato: 2, // esquina casi recta, look Art Decó en vez de pill/rounded genérico
  anchoLinea: 1,
  anchoGrueso: 2, // nuevo: borde de tarjetas sólidas
  colorLinea: colores.bordeSutil,
} as const;

export const sombraSolida = {
  desplazamiento: 4, // nuevo: cuánto se corre la sombra hacia abajo-derecha
  color: colores.acentoPrimario,
} as const;
