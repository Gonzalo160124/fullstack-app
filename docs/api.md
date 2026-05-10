# Documentación de la API – OtakuList

## Base URL
http://localhost:3001/api/v1

## Endpoints

### GET /health
Comprueba que el servidor está funcionando.

**Response 200:**
```json
{ "status": "OK", "mensaje": "Servidor funcionando" }
```

---

### GET /api/v1/anime?q={query}
Busca anime por nombre.

**Parámetros:**
- `q` (obligatorio): nombre del anime a buscar

**Response 200:** array de anime
**Response 400:**
```json
{ "error": "El parámetro q es obligatorio" }
```
**Response 500:**
```json
{ "error": "Error al buscar anime" }
```

---

### GET /api/v1/manga?q={query}
Busca manga por nombre.

**Parámetros:**
- `q` (obligatorio): nombre del manga a buscar

**Response 200:** array de manga
**Response 400:**
```json
{ "error": "El parámetro q es obligatorio" }
```

---

### GET /api/v1/anime/:id
Obtiene el detalle de un anime por su ID.

**Response 200:** objeto anime
**Response 400:**
```json
{ "error": "ID inválido" }
```
**Response 404:**
```json
{ "error": "Anime no encontrado" }
```

---

### GET /api/v1/manga/:id
Obtiene el detalle de un manga por su ID.

**Response 200:** objeto manga
**Response 404:**
```json
{ "error": "Manga no encontrado" }
```

## Arquitectura por capas

- **routes/**: define las URLs y los verbos HTTP
- **controllers/**: recibe la petición, valida parámetros y devuelve respuesta
- **services/**: contiene la lógica de negocio y llama a la API de Jikan
- **config/**: configuración del servidor (puerto, URL base)