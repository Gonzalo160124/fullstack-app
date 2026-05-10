# Formularios e interacción – OtakuList

## Formularios controlados
En React, un formulario controlado es aquel donde el valor de cada
input está vinculado al estado del componente mediante `useState`.
Cada cambio en el input actualiza el estado, y el estado determina
lo que se muestra en el input.

## Ejemplos en OtakuList

### AnimeDetail – Formulario para añadir a la lista
Campos controlados:
- `estado`: selector controlado con `useState<EstadoAnime>`
- `puntuacion`: selector numérico controlado con `useState<number | null>`
- `notas`: textarea controlado con `useState<string>`

### Validación
Antes de guardar se ejecuta la función `validar()` que comprueba:
- Que se haya seleccionado un estado
- Que la puntuación esté entre 1 y 10 si se ha introducido

Si hay errores, se muestran en rojo debajo de cada campo.
Si todo es correcto, se guarda y aparece un mensaje de confirmación
en verde durante 3 segundos.

### MyListItem – Formulario de edición
Permite editar el estado, puntuación y notas de un título ya
guardado. Al hacer clic en Editar se muestran los campos con los
valores actuales. Al guardar se actualizan en el contexto y en
LocalStorage.

## Mensajes de error y confirmación
- **Error**: texto en rojo debajo del campo con el problema
- **Confirmación**: texto en verde durante 3 segundos tras guardar