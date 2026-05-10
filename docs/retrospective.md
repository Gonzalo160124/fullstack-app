# Retrospectiva final – OtakuList

## ¿Qué aprendiste durante el proyecto?

### TypeScript
Aprendí a tipar correctamente las respuestas de una API externa,
usando interfaces para definir la estructura de los datos que
devuelve Jikan. También aprendí la diferencia entre declarar un
tipo e importarlo con `import type`, y cómo las uniones discriminadas
como `EstadoRed<T>` obligan a manejar todos los estados posibles.

### React
Aprendí a organizar una aplicación en componentes reutilizables,
a gestionar el estado global con Context API y a crear custom hooks
para separar la lógica de negocio de los componentes visuales.
También entendí cuándo usar `useMemo` y `useCallback` para optimizar
renders innecesarios.

### Express y arquitectura por capas
Aprendí a estructurar un backend en capas separadas: routes para
las URLs, controllers para la lógica de entrada/salida y services
para la lógica de negocio. Esta separación hace el código más fácil
de mantener y escalar.

### Conexión frontend–backend–API
Aprendí cómo el frontend llama al backend, que a su vez actúa como
proxy de Jikan. En producción simplifiqué esto llamando directamente
a Jikan desde el frontend usando variables de entorno para cambiar
la URL según el entorno.

## Principales problemas encontrados

### Error de Vite con rolldown en Windows
Al crear el proyecto con Vite 6, Windows bloqueaba un archivo nativo
de rolldown por políticas de seguridad. Se solucionó instalando
Vite 5 con `--legacy-peer-deps`.

### Compatibilidad entre backend y Jikan en producción
El backend devolvía los datos directamente mientras que Jikan los
envuelve en un objeto `{ data: [...] }`. Se solucionó detectando
si la respuesta tiene la propiedad `data` y extrayéndola si es así.

### Tipado de la respuesta de la API
Al principio el tipo `EstadoRed<T>` estaba definido en `animeApi.ts`
pero se necesitaba también en el hook. Se movió a `tipos.ts` para
que fuera accesible desde cualquier parte del proyecto.

### Responsive en mobile
El buscador desbordaba la pantalla en dispositivos móviles. Se
solucionó poniendo el botón en una línea propia con `w-full` y
añadiendo `overflow-x-hidden` al contenedor principal.

## ¿Cómo utilicé la IA durante el desarrollo?

Utilicé IA como asistente durante todo el desarrollo. Me ayudó a:
- Entender conceptos como uniones discriminadas, genéricos y hooks
- Generar el código base de cada componente y archivo
- Detectar y corregir errores de TypeScript
- Redactar la documentación técnica de cada parte del proyecto
- Resolver problemas específicos como la compatibilidad de Vite
  o la diferencia entre la respuesta de Jikan y el backend

En todo momento entendí el código generado antes de aplicarlo,
lo que me permitió adaptarlo cuando era necesario y aprender
los conceptos detrás de cada decisión.

## Reflexión final

Este proyecto me ha permitido conectar con todas las
piezas de una aplicación web moderna: un frontend en React con
TypeScript y Tailwind, un backend en Express con arquitectura por
capas, una API externa real y un despliegue en producción con Vercel.

Lo más valioso ha sido entender cómo fluyen los datos de extremo
a extremo, desde que el usuario escribe en el buscador hasta que
los resultados aparecen en pantalla, pasando por el cliente de API,
el backend y la API de Jikan.

También he aprendido la importancia de TypeScript para detectar
errores antes de ejecutar el código, especialmente al trabajar con
respuestas de APIs externas donde no controlas la estructura de
los datos.