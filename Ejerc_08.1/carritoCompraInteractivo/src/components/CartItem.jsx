import { useCallback } from "react";

function CartItem({id, nombre, precio, cantidad, dispatchCarrito}) {
    return (
        <div style={{display: "flex", flexDirection: "row", margin: 10+"px", width: 100+"%", alignItems: "center", justifyContent: "space-between"}}>
            <h3>{nombre}</h3>
            <p>{precio}€</p>
            <p>x{cantidad}</p>
            <div style={{display: "flex"}}>
                <button onClick={() => useCallback(dispatchCarrito({ type: 'quitar_uno', id: id}), [])}>-</button>
                <button onClick={() => useCallback(dispatchCarrito({ type: 'incrementar_cantidad', id: id}), [])}>+</button>
                <button onClick={() => useCallback(dispatchCarrito({ type: 'quitar', id: id}), [])}>x</button>
            </div>
        </div>
    );
}

export default CartItem;