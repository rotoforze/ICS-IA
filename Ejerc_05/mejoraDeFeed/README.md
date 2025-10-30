# Fase 1.
## Análisis
1. Al pasar los artículos a HTML se usa el índice de la función .map en vez del propio ID del objeto.

2. El input de la barra de búsqueda refrescará el contenido de la página de forma dinámica, pero al no tener el atributo value vinculado al contenido del searchTerm podría causar errores.

3. En el map se devuelve null si no coincide, debería usarse .filter primero.

4. Los fijados deberían estar los primeros, por ende habría que hacer un .sort para ponerlos primero.

5. El array de los artículos está dentro del propio componente.
