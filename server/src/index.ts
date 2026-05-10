import express from "express";
import cors from "cors";
import { config } from "./config/config";
import animeRoutes from "./routes/animeRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", animeRoutes);

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "OK", mensaje: "Servidor funcionando" });
});

app.use((_req, res) => {
  res.status(404).json({ error: "Endpoint no encontrado" });
});

app.listen(config.port, () => {
  console.log(`Servidor corriendo en http://localhost:${config.port}`);
});