import type { AnimeAPI } from "../types/tipos";

const BASE_URL = "http://localhost:3001/api/v1";


async function peticion<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error ?? "Error desconocido");
  }
  return response.json();
}

export async function buscarAnime(query: string): Promise<AnimeAPI[]> {
  return peticion<AnimeAPI[]>(`${BASE_URL}/anime?q=${encodeURIComponent(query)}`);
}

export async function buscarManga(query: string): Promise<AnimeAPI[]> {
  return peticion<AnimeAPI[]>(`${BASE_URL}/manga?q=${encodeURIComponent(query)}`);
}

export async function obtenerDetalleAnime(id: number): Promise<AnimeAPI> {
  return peticion<AnimeAPI>(`${BASE_URL}/anime/${id}`);
}

export async function obtenerDetalleManga(id: number): Promise<AnimeAPI> {
  return peticion<AnimeAPI>(`${BASE_URL}/manga/${id}`);
}