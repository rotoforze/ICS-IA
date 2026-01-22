## Justificación de Arquitectura

Separar AuthContext y TasksContext sigue el principio de separación de responsabilidades. Los datos (usuarios, tareas) viven fuera de los contextos y estos solo gestionan estado y reglas de negocio.

Un único GlobalContext provocaría re-renders masivos ante cualquier cambio irrelevante.

Ejemplo: UserInfo no se re-renderiza cuando cambia una tarea, y la lista de tareas no se vuelve a calcular al cambiar de usuario invitado.

## Depuración y Optimización

Al cambiar de usuario:

Se actualiza AuthContext.

Solo los componentes que consumen autenticación se re-renderizan.

TaskItem se mantiene estable gracias a React.memo, salvo cuando cambian permisos reales.

Claves:

Datos normalizados (authorId en lugar de nombre)

Contextos pequeños y específicos

React.memo para aislar renders

Este enfoque escala correctamente cuando los datos provienen de una API real.