import { memo } from "react";
import ToastItem from "./ToastItem";

const ToastContainer = memo(({ listaErrores, funcionQuitarSegunID }) => {
    const erroresHTML = listaErrores.map(error => {
        return <ToastItem key={error.id} id={error.id} 
            message={error.message} 
            funcionQuitarSegunID={funcionQuitarSegunID} />
    });
    return (
        <>
        <div style={{width: 50+"dvw", display: "flex", flexWrap: "wrap", margin: 0+"px auto"}}>
            {erroresHTML}
        </div>
        </>
    );
}, arePropsEqual);

// HAY QUE CREAR UNA FUNCIÓN (LA COPIÉ DE LA DOC. DE REACT)
// PARA QUE COMPARE LOS PROPS AAAAAAAAAAAA
function arePropsEqual(oldProps, newProps) {
  return (
    oldProps.listaErrores.length === newProps.listaErrores.length &&
    oldProps.listaErrores.every((oldPoint, index) => {
      const newPoint = newProps.listaErrores[index];
      return oldPoint.x === newPoint.x && oldPoint.y === newPoint.y;
    })
  );
}

export default ToastContainer;