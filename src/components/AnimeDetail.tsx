import { useState } from "react";
import type { AnimeAPI, EstadoAnime } from "../types/tipos";
import { useList } from "../context/ListContext";

interface AnimeDetailProps {
  anime: AnimeAPI;
  onCerrar: () => void;
}

export function AnimeDetail({ anime, onCerrar }: AnimeDetailProps) {
  const { lista, añadir } = useList();
  const [estado, setEstado] = useState<EstadoAnime>("PENDIENTE");
  const [puntuacion, setPuntuacion] = useState<number | null>(null);
  const [notas, setNotas] = useState("");

  const yaGuardado = lista.some(a => a.mal_id === anime.mal_id);

  function handleAñadir() {
    añadir({
      mal_id: anime.mal_id,
      title: anime.title,
      image_url: anime.images.jpg.image_url,
      estado,
      puntuacion,
      notas,
    });
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-white text-2xl font-bold">{anime.title}</h2>
          <button onClick={onCerrar} className="text-gray-400 hover:text-white text-2xl">✕</button>
        </div>

        <div className="flex gap-4 mb-4">
          <img
            src={anime.images.jpg.image_url}
            alt={anime.title}
            className="w-32 h-44 object-cover rounded-lg"
          />
          <div className="flex-1">
            <p className="text-gray-300 text-sm">{anime.synopsis?.slice(0, 300)}...</p>
            <div className="flex gap-4 mt-2">
              <span className="text-yellow-400">⭐ {anime.score ?? "N/A"}</span>
              <span className="text-gray-400">{anime.episodes ? `${anime.episodes} episodios` : ""}</span>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {anime.genres?.map(g => (
                <span key={g.name} className="bg-purple-900 text-purple-300 text-xs px-2 py-0.5 rounded-full">
                  {g.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {!yaGuardado ? (
          <div className="border-t border-gray-700 pt-4 flex flex-col gap-3">
            <select
              value={estado}
              onChange={e => setEstado(e.target.value as EstadoAnime)}
              className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-600"
            >
              <option value="PENDIENTE">Pendiente</option>
              <option value="VIENDO">Viendo</option>
              <option value="COMPLETADO">Completado</option>
            </select>
            <select
              value={puntuacion ?? ""}
              onChange={e => setPuntuacion(e.target.value ? Number(e.target.value) : null)}
              className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-600"
            >
              <option value="">Sin puntuación</option>
              {[1,2,3,4,5,6,7,8,9,10].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
            <textarea
              value={notas}
              onChange={e => setNotas(e.target.value)}
              placeholder="Añade notas personales..."
              className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-600 resize-none h-20"
            />
            <button
              onClick={handleAñadir}
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold"
            >
              Añadir a mi lista
            </button>
          </div>
        ) : (
          <p className="text-green-400 text-center mt-4 font-semibold">✓ Ya está en tu lista</p>
        )}
      </div>
    </div>
  );
}