import { useState, useCallback } from "react";
import { buscarAnime, buscarManga } from "../api/animeApi";
import type { AnimeAPI } from "../types/tipos";

export function useAnimeSearch() {
  const [resultados, setResultados] = useState<AnimeAPI[]>([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const buscar = useCallback(async (query: string, tipo: "anime" | "manga") => {
    setCargando(true);
    setError(null);
    try {
      const datos = tipo === "anime" ? await buscarAnime(query) : await buscarManga(query);
      setResultados(datos);
    } catch {
      setError("Error al buscar. Inténtalo de nuevo.");
    } finally {
      setCargando(false);
    }
  }, []);

  return { resultados, cargando, error, buscar };
}