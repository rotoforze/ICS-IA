# Preguntas
## 1. Demuestra con `console.log` que los 6 niveles se ejecutan en cada clic.
 -> Se actualizan debido al uso de useEffect().

## 2. Abre React DevTools → Profiler → graba 5 clicks.
## 3. Muestra capturas de pantalla mostrando los tiempos de renderizado en cada clic.
[Captura](./public/antesDelCambio.png)
## 4. ¿Se ve lento el navegador? ¿Cuántas funciones (`console.log`) se ejecutan en cada clic?
 -> Sí hago muchos clicks a la vez, sí. 1.011 mensajes.

## 5. ¿Son todos los renderizados necesarios? ¿Por qué?
 -> No son necesarios porque al actualizar el contador no debería actualizarse las tarjetas de usuario.

## 6. **Modificar el programa para evitar los renderizados innecesarios.**
 -> He creado un nuevo componente Contador, lo he puesto dentro de ContadorPadre, ahora solo se actualiza ese componente, en vez del ContadorPadre y forzar la lista de usuarios a renderizarse de nuevo.

## 7. Vuelve a hacer los apartados 1 a 5.

1 -> Solo se ejectua el console.log de Contador.

2 y 3 -> [Captura](./public/despuésDelCambio.png.png)

4 -> Ahora aunque haga muchos clicks no se ve afectado el rendimiento. 1 mensaje por click.

5 -> Ahora sí, son necesarios para poder mostrar el número en la interfaz. 