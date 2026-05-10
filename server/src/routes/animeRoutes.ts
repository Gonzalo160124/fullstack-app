import { Router } from "express";
import {
  buscarAnime,
  buscarManga,
  obtenerDetalleAnime,
  obtenerDetalleManga,
} from "../controllers/animeController";

const router = Router();

router.get("/anime", buscarAnime);
router.get("/manga", buscarManga);
router.get("/anime/:id", obtenerDetalleAnime);
router.get("/manga/:id", obtenerDetalleManga);

export default router;