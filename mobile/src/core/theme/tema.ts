// core/tema.ts
export const colores = {
  fondo: "#0D1B2A",
  fondoClaro: "#F5E6C8",
  fondoSuperficie: "#162B40",
  fondoSuperficieClara: "#FBF3E2",
  acentoPrimarioIntenso: "#A8832F",
  acentoPrimario: "#C9A24B",
  acentoSecundario: "#8B1E3F",
  exito: "#2E7D5B",
  error: "#B23A2E",
  info: "#C9A24B",
  advertencia: "#8B1E3F",
  textoSobreFondo: "#F5E6C8",
  textoSobreClaro: "#0D1B2A",
  bordeSutil: "#C9A24B33", // dorado al 20% de opacidad, para líneas finas
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