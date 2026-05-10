# Capa de red y cliente de API – OtakuList

## Cliente de API: src/api/animeApi.ts

Todas las llamadas al backend pasan por este archivo. Usa una función
genérica `peticion<T>` que gestiona los errores HTTP y devuelve datos
tipados con TypeScript.

## Función genérica peticion<T>
Centraliza la lógica de fetch: si la respuesta no es OK extrae el
mensaje de error del JSON y lanza una excepción. Esto evita duplicar
el manejo de errores en cada función.

## Tres estados de red: EstadoRed<T>
Se define en `src/types/tipos.ts` como una unión discriminada:
- `CARGANDO`: la petición está en curso
- `EXITO`: la petición ha devuelto datos
- `ERROR`: la petición ha fallado con un mensaje

Este patrón garantiza que la UI siempre muestra el estado correcto
y TypeScript obliga a manejar los tres casos.

## Gestión en la UI
En `HomePage` se muestran los tres estados:
- **CARGANDO**: mensaje "Buscando..." mientras espera respuesta
- **EXITO**: grid con los resultados de la búsqueda
- **ERROR**: mensaje de error en rojo con sugerencia de revisar
  que el servidor está arrancado

## Fuente de verdad
Los datos de anime y manga vienen siempre del backend (que actúa
como proxy de Jikan). Solo se persiste en LocalStorage la lista
personal del usuario (estado, puntuación y notas), que son datos
que el usuario genera y que no existen en ninguna API externa.