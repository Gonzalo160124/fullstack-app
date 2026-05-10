# Context API – OtakuList

## Implementación: ListContext

El contexto `ListContext` gestiona el estado global de la lista
personal del usuario y lo comparte entre todos los componentes
que lo necesitan sin tener que pasar props manualmente.

### Qué almacena
- `lista`: array de títulos guardados por el usuario
- `añadir`: función para añadir un título a la lista
- `actualizar`: función para editar estado, puntuación y notas
- `eliminar`: función para eliminar un título de la lista

### Cómo funciona
1. `ListProvider` envuelve toda la aplicación en `App.tsx`
2. Al iniciarse lee los datos guardados en LocalStorage
3. Cada vez que la lista cambia, la sincroniza con LocalStorage
4. Cualquier componente puede acceder a la lista usando `useList()`

### Dónde se consume
- `AnimeDetail`: usa `añadir` para guardar un título en la lista
- `MyListItem`: usa `actualizar` y `eliminar` para gestionar títulos
- `Stats`: usa `lista` para calcular las estadísticas

## ¿Cuándo es útil Context API?

Context API es útil cuando varios componentes en distintos niveles
del árbol necesitan acceder al mismo estado, evitando el "prop
drilling" (pasar props por múltiples niveles de componentes).

Es la solución adecuada para:
- Estado de autenticación (usuario logueado)
- Preferencias del usuario (tema oscuro/claro, idioma)
- Carritos de compra o listas personales como en este proyecto
- Cualquier dato global que no cambie con mucha frecuencia

No es recomendable para estados que cambian muy frecuentemente
(como animaciones o inputs en tiempo real) porque provoca renders
en todos los componentes que consumen el contexto.