# Documentación de componentes – OtakuList

## SearchBar
Barra de búsqueda con selector de tipo (anime/manga) y campo de texto.
- **Props**: `onBuscar(query, tipo)`, `cargando`
- **Estado local**: query, tipo
- **Uso**: HomePage

## AnimeCard
Tarjeta visual con portada, título, puntuación y géneros de un título.
- **Props**: `anime: AnimeAPI`, `onClick(anime)`
- **Uso**: HomePage para mostrar resultados de búsqueda

## AnimeDetail
Modal con información completa de un título y formulario para añadirlo
a la lista personal con estado, puntuación y notas.
- **Props**: `anime: AnimeAPI`, `onCerrar()`
- **Estado local**: estado, puntuacion, notas
- **Contexto**: useList para añadir a la lista
- **Uso**: HomePage al hacer clic en una AnimeCard

## MyListItem
Fila de la lista personal con opciones de editar y eliminar.
- **Props**: `anime: AnimeGuardado`
- **Estado local**: editando, estado, puntuacion, notas
- **Contexto**: useList para actualizar y eliminar
- **Uso**: MyListPage

## FilterBar
Selectores para filtrar la lista por estado y puntuación mínima.
- **Props**: `estadoFiltro`, `puntuacionFiltro`, `onEstadoChange`, `onPuntuacionChange`
- **Uso**: MyListPage

## Stats
Tarjetas con estadísticas de la colección: total, viendo, completados,
pendientes y media de puntuación.
- **Props**: ninguna
- **Contexto**: useList para leer la lista
- **Uso**: MyListPage