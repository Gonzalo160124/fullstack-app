export interface AnimeAPI {
  mal_id: number;
  title: string;
  synopsis: string;
  images: { jpg: { image_url: string } };
  score: number;
  genres: { name: string }[];
  episodes: number;
  type: string;
}

export type EstadoAnime = "VIENDO" | "COMPLETADO" | "PENDIENTE";

export interface AnimeGuardado {
  mal_id: number;
  title: string;
  image_url: string;
  estado: EstadoAnime;
  puntuacion: number | null;
  notas: string;
}