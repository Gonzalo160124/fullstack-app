import { useState, useMemo } from "react";
import { SearchBar } from "../components/SearchBar";
import { AnimeCard } from "../components/AnimeCard";
import { AnimeDetail } from "../components/AnimeDetail";
import { useAnimeSearch } from "../hooks/useAnimeSearch";
import type { AnimeAPI } from "../types/tipos";

export function HomePage() {
  const { estadoRed, hasBuscado, buscar } = useAnimeSearch();
  const [seleccionado, setSeleccionado] = useState<AnimeAPI | null>(null);
  const [filtroGenero, setFiltroGenero] = useState<string>("TODOS");

  const resultados = estadoRed.estado === "EXITO" ? estadoRed.datos : [];

  const resultadosFiltrados = useMemo(() => {
    if (filtroGenero === "TODOS") return resultados;
    return resultados.filter(a => a.genres?.some(g => g.name === filtroGenero));
  }, [resultados, filtroGenero]);

  const generosDisponibles = useMemo(() => {
    const todos = resultados.flatMap(a => a.genres?.map(g => g.name) ?? []);
    return ["TODOS", ...Array.from(new Set(todos))];
  }, [resultados]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-purple-400">OtakuList</h1>
        <p className="text-gray-400 text-center mb-8">Gestiona tu lista de anime y manga</p>

        <div className="flex justify-center mb-8 px-2">
          <SearchBar onBuscar={buscar} cargando={estadoRed.estado === "CARGANDO" && hasBuscado} />
        </div>

        {hasBuscado && estadoRed.estado === "CARGANDO" && (
          <p className="text-center text-gray-400">Buscando...</p>
        )}

        {estadoRed.estado === "ERROR" && (
          <div className="text-center">
            <p className="text-red-400 mb-2">{estadoRed.mensaje}</p>
            <p className="text-gray-500 text-sm">Asegúrate de que el servidor está arrancado.</p>
          </div>
        )}

        {estadoRed.estado === "EXITO" && resultados.length > 0 && (
          <>
            <div className="mb-4">
              <select
                value={filtroGenero}
                onChange={e => setFiltroGenero(e.target.value)}
                className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-600"
              >
                {generosDisponibles.map(g => (
                  <option key={g} value={g}>{g === "TODOS" ? "Todos los géneros" : g}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {resultadosFiltrados.map(anime => (
                <AnimeCard key={anime.mal_id} anime={anime} onClick={setSeleccionado} />
              ))}
            </div>
          </>
        )}

        {seleccionado && (
          <AnimeDetail anime={seleccionado} onCerrar={() => setSeleccionado(null)} />
        )}
      </div>
    </div>
  );
}