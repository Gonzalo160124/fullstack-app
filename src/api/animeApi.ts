import type { AnimeAPI } from "../types/tipos";

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001/api/v1";

export type EstadoRed<T> =
  | { estado: "CARGANDO" }
  | { estado: "EXITO"; datos: T }
  | { estado: "ERROR"; mensaje: string };

async function peticion<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: "Error desconocido" }));
    throw new Error(error.error ?? "Error desconocido");
  }
  const data = await response.json();
  // Jikan devuelve { data: [...] }, el backend devuelve directamente el array
  return data.data !== undefined ? data.data : data;
}

export async function buscarAnime(query: string): Promise<AnimeAPI[]> {
  return peticion<AnimeAPI[]>(`${BASE_URL}/anime?q=${encodeURIComponent(query)}&limit=10`);
}

export async function buscarManga(query: string): Promise<AnimeAPI[]> {
  return peticion<AnimeAPI[]>(`${BASE_URL}/manga?q=${encodeURIComponent(query)}&limit=10`);
}

export async function obtenerDetalleAnime(id: number): Promise<AnimeAPI> {
  return peticion<AnimeAPI>(`${BASE_URL}/anime/${id}`);
}

export async function obtenerDetalleManga(id: number): Promise<AnimeAPI> {
  return peticion<AnimeAPI>(`${BASE_URL}/manga/${id}`);
}