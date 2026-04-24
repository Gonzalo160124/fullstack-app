import { useState } from "react";
import { useList } from "../context/ListContext";
import { MyListItem } from "../components/MyListItem";
import { FilterBar } from "../components/FilterBar";
import { Stats } from "../components/Stats";
import type { EstadoAnime } from "../types/tipos";

export function MyListPage() {
  const { lista } = useList();
  const [estadoFiltro, setEstadoFiltro] = useState<EstadoAnime | "TODOS">("TODOS");
  const [puntuacionFiltro, setPuntuacionFiltro] = useState<number | null>(null);

  const listaFiltrada = lista.filter(anime => {
    const cumpleEstado = estadoFiltro === "TODOS" || anime.estado === estadoFiltro;
    const cumplePuntuacion = puntuacionFiltro === null || (anime.puntuacion ?? 0) >= puntuacionFiltro;
    return cumpleEstado && cumplePuntuacion;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-purple-400">Mi Lista</h1>

        <Stats />

        <div className="mt-6 mb-4">
          <FilterBar
            estadoFiltro={estadoFiltro}
            puntuacionFiltro={puntuacionFiltro}
            onEstadoChange={setEstadoFiltro}
            onPuntuacionChange={setPuntuacionFiltro}
          />
        </div>

        {listaFiltrada.length === 0 ? (
          <p className="text-gray-400 text-center mt-12">
            {lista.length === 0 ? "Tu lista está vacía. ¡Busca un anime para empezar!" : "No hay títulos con esos filtros."}
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {listaFiltrada.map(anime => (
              <MyListItem key={anime.mal_id} anime={anime} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}