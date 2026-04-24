import { useState } from "react";
import type { AnimeGuardado, EstadoAnime } from "../types/tipos";
import { useList } from "../context/ListContext";

interface MyListItemProps {
  anime: AnimeGuardado;
}

export function MyListItem({ anime }: MyListItemProps) {
  const { actualizar, eliminar } = useList();
  const [editando, setEditando] = useState(false);
  const [estado, setEstado] = useState<EstadoAnime>(anime.estado);
  const [puntuacion, setPuntuacion] = useState<number | null>(anime.puntuacion);
  const [notas, setNotas] = useState(anime.notas);

  function handleGuardar() {
    actualizar(anime.mal_id, estado, puntuacion, notas);
    setEditando(false);
  }

  return (
    <div className="bg-gray-800 rounded-lg p-4 flex gap-4 border border-gray-700">
      <img
        src={anime.image_url}
        alt={anime.title}
        className="w-16 h-22 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-white font-semibold">{anime.title}</h3>
        {!editando ? (
          <div className="mt-1 flex flex-col gap-1">
            <span className="text-purple-300 text-sm">{anime.estado}</span>
            <span className="text-yellow-400 text-sm">
              {anime.puntuacion ? `⭐ ${anime.puntuacion}/10` : "Sin puntuación"}
            </span>
            {anime.notas && <p className="text-gray-400 text-sm">{anime.notas}</p>}
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setEditando(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-3 py-1 rounded"
              >
                Editar
              </button>
              <button
                onClick={() => eliminar(anime.mal_id)}
                className="bg-red-700 hover:bg-red-800 text-white text-xs px-3 py-1 rounded"
              >
                Eliminar
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-2 flex flex-col gap-2">
            <select
              value={estado}
              onChange={e => setEstado(e.target.value as EstadoAnime)}
              className="bg-gray-700 text-white px-2 py-1 rounded text-sm"
            >
              <option value="PENDIENTE">Pendiente</option>
              <option value="VIENDO">Viendo</option>
              <option value="COMPLETADO">Completado</option>
            </select>
            <select
              value={puntuacion ?? ""}
              onChange={e => setPuntuacion(e.target.value ? Number(e.target.value) : null)}
              className="bg-gray-700 text-white px-2 py-1 rounded text-sm"
            >
              <option value="">Sin puntuación</option>
              {[1,2,3,4,5,6,7,8,9,10].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
            <textarea
              value={notas}
              onChange={e => setNotas(e.target.value)}
              className="bg-gray-700 text-white px-2 py-1 rounded text-sm resize-none h-16"
            />
            <div className="flex gap-2">
              <button
                onClick={handleGuardar}
                className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 rounded"
              >
                Guardar
              </button>
              <button
                onClick={() => setEditando(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white text-xs px-3 py-1 rounded"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}