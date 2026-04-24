import type { EstadoAnime } from "../types/tipos";

interface FilterBarProps {
  estadoFiltro: EstadoAnime | "TODOS";
  puntuacionFiltro: number | null;
  onEstadoChange: (estado: EstadoAnime | "TODOS") => void;
  onPuntuacionChange: (puntuacion: number | null) => void;
}

export function FilterBar({ estadoFiltro, puntuacionFiltro, onEstadoChange, onPuntuacionChange }: FilterBarProps) {
  return (
    <div className="flex gap-3 flex-wrap">
      <select
        value={estadoFiltro}
        onChange={e => onEstadoChange(e.target.value as EstadoAnime | "TODOS")}
        className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-600"
      >
        <option value="TODOS">Todos los estados</option>
        <option value="VIENDO">Viendo</option>
        <option value="COMPLETADO">Completado</option>
        <option value="PENDIENTE">Pendiente</option>
      </select>
      <select
        value={puntuacionFiltro ?? ""}
        onChange={e => onPuntuacionChange(e.target.value ? Number(e.target.value) : null)}
        className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-600"
      >
        <option value="">Cualquier puntuación</option>
        {[1,2,3,4,5,6,7,8,9,10].map(n => (
          <option key={n} value={n}>Mínimo {n}</option>
        ))}
      </select>
    </div>
  );
}