import { useCallback } from "react";

function ItemCard( { id, nombre, precio, dispatchCarrito } ){

    return (
        <div style={{margin: 5+"px", backgroundColor: "#bff192", padding: 5+"px", borderRadius: 10+"px"}}>
            <h3>{nombre}</h3>
            <p>Precio: {precio}€</p>
            <button onClick={() => useCallback(dispatchCarrito({ type: 'añadir_nuevo', id: id}), [])}>Añadir al carrito</button>
        </div>
    );

}

export default ItemCard;