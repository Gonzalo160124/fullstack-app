import { useState } from "react";

interface SearchBarProps {
  onBuscar: (query: string, tipo: "anime" | "manga") => void;
  cargando: boolean;
}

export function SearchBar({ onBuscar, cargando }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [tipo, setTipo] = useState<"anime" | "manga">("anime");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) onBuscar(query, tipo);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-2xl">
      <select
        value={tipo}
        onChange={e => setTipo(e.target.value as "anime" | "manga")}
        className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-600"
      >
        <option value="anime">Anime</option>
        <option value="manga">Manga</option>
      </select>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Busca un anime o manga..."
        className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-purple-500"
      />
      <button
        type="submit"
        disabled={cargando}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg disabled:opacity-50"
      >
        {cargando ? "Buscando..." : "Buscar"}
      </button>
    </form>
  );
}