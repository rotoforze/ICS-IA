import { memo } from "react";
import UserCard from "./UserCard";
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

// HAY QUE CREAR UNA FUNCIÓN (LA COPIÉ DE LA DOC. DE REACT)
// PARA QUE COMPARE LOS PROPS AAAAAAAAAAAA
function arePropsEqual(oldProps, newProps) {
  return (
    oldProps.UserList.length === newProps.UserList.length &&
    oldProps.UserList.every((oldPoint, index) => {
      const newPoint = newProps.UserList[index];
      return oldPoint.x === newPoint.x && oldPoint.y === newPoint.y;
    })
  );
}

export default UserList;