import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { AnimeCard } from "../components/AnimeCard";
import { AnimeDetail } from "../components/AnimeDetail";
import { buscarAnime, buscarManga } from "../api/animeApi";
import type { AnimeAPI } from "../types/tipos";

export function HomePage() {
  const [resultados, setResultados] = useState<AnimeAPI[]>([]);
  const [seleccionado, setSeleccionado] = useState<AnimeAPI | null>(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleBuscar(query: string, tipo: "anime" | "manga") {
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
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-purple-400">OtakuList</h1>
        <p className="text-gray-400 text-center mb-8">Gestiona tu lista de anime y manga</p>

        <div className="flex justify-center mb-8">
          <SearchBar onBuscar={handleBuscar} cargando={cargando} />
        </div>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        {resultados.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {resultados.map(anime => (
              <AnimeCard key={anime.mal_id} anime={anime} onClick={setSeleccionado} />
            ))}
          </div>
        )}

        {seleccionado && (
          <AnimeDetail anime={seleccionado} onCerrar={() => setSeleccionado(null)} />
        )}
      </div>
    </div>
  );
}