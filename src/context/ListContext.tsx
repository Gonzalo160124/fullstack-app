import { createContext, useContext, useState, useEffect } from "react";
import type { AnimeGuardado, EstadoAnime } from "../types/tipos";

interface ListContextType {
  lista: AnimeGuardado[];
  añadir: (anime: AnimeGuardado) => void;
  actualizar: (mal_id: number, estado: EstadoAnime, puntuacion: number | null, notas: string) => void;
  eliminar: (mal_id: number) => void;
}

const ListContext = createContext<ListContextType | null>(null);

export function ListProvider({ children }: { children: React.ReactNode }) {
  const [lista, setLista] = useState<AnimeGuardado[]>(() => {
    const guardado = localStorage.getItem("otakulist");
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("otakulist", JSON.stringify(lista));
  }, [lista]);

  function añadir(anime: AnimeGuardado) {
    if (!lista.find(a => a.mal_id === anime.mal_id)) {
      setLista([...lista, anime]);
    }
  }

  function actualizar(mal_id: number, estado: EstadoAnime, puntuacion: number | null, notas: string) {
    setLista(lista.map(a => a.mal_id === mal_id ? { ...a, estado, puntuacion, notas } : a));
  }

  function eliminar(mal_id: number) {
    setLista(lista.filter(a => a.mal_id !== mal_id));
  }

  return (
    <ListContext.Provider value={{ lista, añadir, actualizar, eliminar }}>
      {children}
    </ListContext.Provider>
  );
}

export function useList() {
  const context = useContext(ListContext);
  if (!context) throw new Error("useList debe usarse dentro de ListProvider");
  return context;
}