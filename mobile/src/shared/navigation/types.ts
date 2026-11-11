
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
};