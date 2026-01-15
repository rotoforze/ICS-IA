# Preguntas
## Justificación de arquitectura
Usando solo useReducer tenemos todos los datos centralizados y se diversifican menos los datos.

El total se calcula dentro del componente del carrito directamente. Si usase dos useState, se re-renderizaría 2 veces el componente del carrito.

## Análisis de rendimiento
Se re-renderiza si está dentro del componente carrito. Usaría el profiles para identificar si se está renderizando de nuevo con cada nuevo item.