# Hooks utilizados – OtakuList

## useState
Gestiona el estado local de los componentes. Se usa en:
- `SearchBar`: guarda el texto del input y el tipo seleccionado
- `HomePage`: guarda el anime seleccionado y el filtro de género
- `MyListItem`: guarda si se está editando y los valores del formulario
- `AnimeDetail`: guarda el estado, puntuación y notas antes de guardar
- `ListContext`: guarda la lista completa de animes del usuario

## useEffect
Ejecuta efectos secundarios cuando cambia el estado. Se usa en:
- `ListContext`: sincroniza la lista con LocalStorage cada vez que
  cambia, para que los datos persistan al recargar la página

## useMemo
Memoriza el resultado de un cálculo costoso y solo lo recalcula
cuando cambian sus dependencias. Se usa en:
- `HomePage`: filtra los resultados por género sin recalcular en
  cada render
- `HomePage`: extrae los géneros únicos de los resultados sin
  recorrer el array en cada render

## useCallback
Memoriza una función para que no se recree en cada render. Se usa en:
- `useAnimeSearch`: la función `buscar` se memoriza para que al
  pasarla como prop a SearchBar no provoque renders innecesarios

## Custom hook: useAnimeSearch
Encapsula toda la lógica de búsqueda en un hook reutilizable:
- Gestiona el estado de resultados, cargando y error
- Expone la función `buscar` con useCallback
- Separa la lógica de negocio del componente visual
- Si en el futuro se necesita buscar desde otra página, solo hay
  que importar este hook sin duplicar código