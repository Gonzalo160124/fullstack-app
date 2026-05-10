import { config } from "../config/config";

export async function buscarAnimeService(query: string) {
  const response = await fetch(`${config.jikanBaseUrl}/anime?q=${query}&limit=10`);
  if (!response.ok) throw new Error("Error al conectar con Jikan API");
  const data = await response.json();
  return data.data;
}

export async function buscarMangaService(query: string) {
  const response = await fetch(`${config.jikanBaseUrl}/manga?q=${query}&limit=10`);
  if (!response.ok) throw new Error("Error al conectar con Jikan API");
  const data = await response.json();
  return data.data;
}

export async function obtenerDetalleAnimeService(id: number) {
  const response = await fetch(`${config.jikanBaseUrl}/anime/${id}`);
  if (!response.ok) throw new Error("Anime no encontrado");
  const data = await response.json();
  return data.data;
}

export async function obtenerDetalleMangaService(id: number) {
  const response = await fetch(`${config.jikanBaseUrl}/manga/${id}`);
  if (!response.ok) throw new Error("Manga no encontrado");
  const data = await response.json();
  return data.data;
}