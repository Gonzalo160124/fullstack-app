# Arquitectura de la aplicación – OtakuList

## Estructura de componentes

### Páginas (src/pages/)
- **HomePage**: página principal con buscador y resultados
- **DetailPage**: detalle de un título con botón para añadir a la lista
- **MyListPage**: lista personal del usuario con filtros y estadísticas

### Componentes reutilizables (src/components/)
- **SearchBar**: barra de búsqueda con input y botón
- **AnimeCard**: tarjeta con portada, título y puntuación de un título
- **AnimeDetail**: información completa de un título
- **MyListItem**: fila de la lista personal con estado y puntuación
- **RatingSelector**: selector de puntuación del 1 al 10
- **StatusSelector**: selector de estado (Viendo, Completado, Pendiente)
- **FilterBar**: filtros de la lista personal
- **Stats**: estadísticas de la colección

## Gestión del estado
Se usará **React Context** para compartir el estado de la lista
personal entre componentes. El contexto almacenará:
- La lista de títulos guardados por el usuario
- Funciones para añadir, actualizar y eliminar títulos

El estado local de cada componente (búsqueda, filtros) se gestionará
con **useState**. Los datos se persistirán en **LocalStorage** para
que no se pierdan al recargar la página.

## API externa: Jikan API
No se desarrolla backend propio. Se usa la API pública de Jikan
que proporciona datos reales de MyAnimeList.

### Endpoints utilizados

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `https://api.jikan.moe/v4/anime?q={query}` | Buscar anime por nombre |
| GET | `https://api.jikan.moe/v4/manga?q={query}` | Buscar manga por nombre |
| GET | `https://api.jikan.moe/v4/anime/{id}` | Detalle de un anime |
| GET | `https://api.jikan.moe/v4/manga/{id}` | Detalle de un manga |

### Contrato de datos (respuesta de la API)
```typescript
interface AnimeAPI {
  mal_id: number;
  title: string;
  synopsis: string;
  images: { jpg: { image_url: string } };
  score: number;
  genres: { name: string }[];
  episodes: number;
}
```

## Persistencia de datos
- **En la API (Jikan)**: títulos, portadas, sinopsis, géneros y
  puntuaciones oficiales. Solo se consultan, no se modifican.
- **En el cliente (LocalStorage)**: lista personal del usuario,
  estados, puntuaciones propias y notas personales.

## Diagrama de flujo de datos
Usuario
│
├─── Busca un título
│         │
│         ▼
│    SearchBar ──► Jikan API ──► Resultados
│
├─── Ve el detalle
│         │
│         ▼
│    DetailPage ──► Jikan API ──► AnimeDetail
│
└─── Gestiona su lista
│
▼
ListContext ◄──► LocalStorage
│
▼
MyListPage ──► MyListItem

## Decisiones de arquitectura
- Se usa una API externa en lugar de backend propio para simplificar
  el desarrollo y evitar gestionar una base de datos.
- React Context es suficiente para este proyecto porque el estado
  compartido es simple (una lista de títulos).
- LocalStorage permite persistir los datos sin necesidad de registro
  ni autenticación.
- Los tipos de la API se definen en `src/types/` para garantizar
  seguridad de tipos en todas las llamadas.