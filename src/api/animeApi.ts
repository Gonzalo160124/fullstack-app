import type { AnimeAPI } from "../types/tipos";

const BASE_URL = "https://api.jikan.moe/v4";

export async function buscarAnime(query: string): Promise<AnimeAPI[]> {
  const response = await fetch(`${BASE_URL}/anime?q=${query}&limit=10`);
  const data = await response.json();
  return data.data;
}

export async function buscarManga(query: string): Promise<AnimeAPI[]> {
  const response = await fetch(`${BASE_URL}/manga?q=${query}&limit=10`);
  const data = await response.json();
  return data.data;
}

export async function obtenerDetalleAnime(id: number): Promise<AnimeAPI> {
  const response = await fetch(`${BASE_URL}/anime/${id}`);
  const data = await response.json();
  return data.data;
}

export async function obtenerDetalleManga(id: number): Promise<AnimeAPI> {
  const response = await fetch(`${BASE_URL}/manga/${id}`);
  const data = await response.json();
  return data.data;
}