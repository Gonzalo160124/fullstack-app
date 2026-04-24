import type { AnimeAPI } from "../types/tipos";

interface AnimeCardProps {
  anime: AnimeAPI;
  onClick: (anime: AnimeAPI) => void;
}

export function AnimeCard({ anime, onClick }: AnimeCardProps) {
  return (
    <div
      onClick={() => onClick(anime)}
      className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 border border-gray-700 hover:border-purple-500"
    >
      <img
        src={anime.images.jpg.image_url}
        alt={anime.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-3">
        <h3 className="text-white font-semibold text-sm truncate">{anime.title}</h3>
        <div className="flex justify-between items-center mt-1">
          <span className="text-yellow-400 text-xs">⭐ {anime.score ?? "N/A"}</span>
          <span className="text-gray-400 text-xs">{anime.type ?? ""}</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {anime.genres?.slice(0, 2).map(g => (
            <span key={g.name} className="bg-purple-900 text-purple-300 text-xs px-2 py-0.5 rounded-full">
              {g.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}