# Preguntas
## Medir con el profiler sin optimizar la app
-> [Captura del profiler sin optimizar](./public/sinOptimizar.png)

## La app es muy lenta, ¿Cuáles son sus puntos débiles?
-> Renderizar miles de usuarios.

## Tras aplicar memo y useMemo incluye capturas de pantalla de los resultados de Profiles.
-> [Captura del profiler una vez optimizado](./public/optimizado.png)

## ¿A mejorado la velocidad de la aplicación? ¿qué cambios y por qué has hecho? Copia el código con ellos README.md
-> Sí, ahora no se queda pillada al escribir aunque no cambie la lista. Solo se actualiza si la lista es diferente. Añadí useMemo() en App.jsx para el filtro
```
  const filtro = useMemo(() => {
    if (!search) return usuarios;
    return usuarios.filter(
      (u) => u.name.toLowerCase()
        .includes(search.toLowerCase()));
  }, [search, usuarios]);
```
 y en el componente UserList.jsx añadí memo() para comparar los porps entre renderizados.
 ```
 const UserList = memo(({ UserList }) => {
    const tarjetas = UserList.map((usuario, key) => {
        return <UserCard key={key} id={usuario.id} name={usuario.name}
            email={usuario.email} organization={usuario.organization} />
    });

    return (
        <div style={{display: "flex", flexWrap: "wrap", width: 100+'dvw'}}>
            {tarjetas}
        </div>
    );
}, arePropsEqual);

function arePropsEqual(oldProps, newProps) {
  return (
    oldProps.UserList.length === newProps.UserList.length &&
    oldProps.UserList.every((oldPoint, index) => {
      const newPoint = newProps.UserList[index];
      return oldPoint.x === newPoint.x && oldPoint.y === newPoint.y;
    })
  );
}
 ```