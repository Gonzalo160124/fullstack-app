# Pruebas y mejoras – OtakuList

## Pruebas manuales

| Funcionalidad | Resultado |
|---|---|
| Buscar anime por nombre | ✅ Correcto |
| Buscar manga por nombre | ✅ Correcto |
| Ver detalle de un título | ✅ Correcto |
| Añadir título a la lista | ✅ Correcto |
| Puntuar un título | ✅ Correcto |
| Añadir notas personales | ✅ Correcto |
| Ver estadísticas | ✅ Correcto |
| Editar título de la lista | ✅ Correcto |
| Eliminar título de la lista | ✅ Correcto |
| Filtrar por estado | ✅ Correcto |
| Filtrar por puntuación | ✅ Correcto |
| Página 404 | ✅ Correcto |
| Persistencia en LocalStorage | ✅ Correcto |

## Pruebas responsive

| Dispositivo | Resultado |
|---|---|
| Mobile 375px (iPhone) | ✅ Correcto tras ajustes |
| Tablet 768px (iPad) | ✅ Correcto |
| Desktop 1280px | ✅ Correcto |

## Bugs encontrados y corregidos

### SearchBar desbordaba en mobile
El botón Buscar se salía de la pantalla en dispositivos móviles.
Se corrigió poniendo el botón en una línea propia con `w-full` y
añadiendo `min-w-0` al input para que no desborde el contenedor.

### Fondo blanco lateral en mobile
El contenido desbordaba el ancho de la pantalla mostrando un fondo
blanco lateral. Se corrigió añadiendo `overflow-x-hidden` al
contenedor principal de `HomePage`.

## Errores en consola
No se detectaron errores en consola durante las pruebas.