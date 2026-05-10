import { useState, useCallback } from "react";
import { buscarAnime, buscarManga } from "../api/animeApi";
import type { AnimeAPI, EstadoRed } from "../types/tipos";

export function useAnimeSearch() {
  const [estadoRed, setEstadoRed] = useState<EstadoRed<AnimeAPI[]>>({ estado: "CARGANDO" });
  const [hasBuscado, setHasBuscado] = useState(false);

  const buscar = useCallback(async (query: string, tipo: "anime" | "manga") => {
    setHasBuscado(true);
    setEstadoRed({ estado: "CARGANDO" });
    try {
      const datos = tipo === "anime" ? await buscarAnime(query) : await buscarManga(query);
      setEstadoRed({ estado: "EXITO", datos });
    } catch (error) {
      setEstadoRed({ estado: "ERROR", mensaje: error instanceof Error ? error.message : "Error desconocido" });
    }
  }, []);

  return { estadoRed, hasBuscado, buscar };
}