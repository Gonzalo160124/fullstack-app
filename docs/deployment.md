# Despliegue – OtakuList

## Frontend: Vercel

El frontend está desplegado en Vercel conectado al repositorio
de GitHub. Cada push a `main` genera un nuevo deploy automático.

**URL de producción**: https://fullstack-app-liard.vercel.app

## Variable de entorno
- `VITE_API_URL`: URL base de la API. En producción apunta a
  Jikan directamente (`https://api.jikan.moe/v4`). En local
  apunta al backend Express (`http://localhost:3001/api/v1`).

## Backend
El backend Express se ejecuta en local en el puerto 3001.
En producción el frontend llama directamente a Jikan API
sin necesidad de backend intermedio.

## Pasos para desplegar
1. Hacer push a `main` en GitHub
2. Vercel detecta el cambio y despliega automáticamente
3. Comprobar que la URL de producción funciona correctamente