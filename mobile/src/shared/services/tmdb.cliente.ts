import axios from "axios";
import { TMDB_URL_API, TMDB_IDIOMA } from "../../core/constants/tmdb.constantes";

const tmdbToken = process.env.EXPO_PUBLIC_TMDB_TOKEN;

if (!tmdbToken) {
  throw new Error("Falta EXPO_PUBLIC_TMDB_TOKEN en el archivo .env");
}

export const clienteTmdb = axios.create({
  baseURL: TMDB_URL_API,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${tmdbToken}`,
    accept: "application/json",
  },
  params: { language: TMDB_IDIOMA },
});