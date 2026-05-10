import { Request, Response } from "express";
import {
  buscarAnimeService,
  buscarMangaService,
  obtenerDetalleAnimeService,
  obtenerDetalleMangaService,
} from "../services/animeService";

export async function buscarAnime(req: Request, res: Response) {
  const query = req.query.q as string;
  if (!query) {
    res.status(400).json({ error: "El parámetro q es obligatorio" });
    return;
  }
  try {
    const datos = await buscarAnimeService(query);
    res.status(200).json(datos);
  } catch {
    res.status(500).json({ error: "Error al buscar anime" });
  }
}

export async function buscarManga(req: Request, res: Response) {
  const query = req.query.q as string;
  if (!query) {
    res.status(400).json({ error: "El parámetro q es obligatorio" });
    return;
  }
  try {
    const datos = await buscarMangaService(query);
    res.status(200).json(datos);
  } catch {
    res.status(500).json({ error: "Error al buscar manga" });
  }
}

export async function obtenerDetalleAnime(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: "ID inválido" });
    return;
  }
  try {
    const datos = await obtenerDetalleAnimeService(id);
    res.status(200).json(datos);
  } catch {
    res.status(404).json({ error: "Anime no encontrado" });
  }
}

export async function obtenerDetalleManga(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: "ID inválido" });
    return;
  }
  try {
    const datos = await obtenerDetalleMangaService(id);
    res.status(200).json(datos);
  } catch {
    res.status(404).json({ error: "Manga no encontrado" });
  }
}