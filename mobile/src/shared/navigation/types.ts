// TIPO: para representar las rutas
export type RootStackParamList = {
  Login: undefined;
  CrearOUnirseSala: undefined;
  SalaTabs: undefined;
};
// TIPO: para representar las rutas de la pantalla Home
export type SalaTabsParamList = {
  Home: { salaId: string };
  Faltas: { salaId: string };
  Series: undefined;
};

// TIPO: para representar las rutas de la pantalla Series
export type SeriesStackParamList = {
  BuscarSerie: undefined;
  ConfigurarInicio: {
    serieTmdbId: number;
    serieTitulo: string;
    seriePosterPath: string | null;
  };
};