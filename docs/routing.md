# Rutas y navegación – OtakuList

## Configuración
Se usa React Router v6 configurado en `App.tsx` con `BrowserRouter`.

## Estructura de rutas

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | `HomePage` | Página principal con buscador y resultados |
| `/milista` | `MyListPage` | Lista personal con filtros y estadísticas |
| `*` | `NotFoundPage` | Página 404 para rutas no existentes |

## Navegación
La barra de navegación usa el componente `Link` de React Router
para cambiar de página sin recargar el navegador.

## Página 404
La ruta `path="*"` captura cualquier URL que no coincida con las
rutas definidas y muestra la página `NotFoundPage` con un botón
para volver al inicio.