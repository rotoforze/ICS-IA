import { useCallback } from "react";
import CartItem from "./CartItem";

function Cart({ carrito, getNombres, dispatchCarrito }) {
    const itemsDelCarrito = carrito.map(item => <CartItem nombre={getNombres(item.id)}
        id={item.id} key={item.id} precio={item.price} 
        cantidad={item.quantity} dispatchCarrito={dispatchCarrito} />);

    return (
        <>
            <div style={{ width: 100 + "dvw", padding: 10 + "px", margin: 10 + "px", borderRadius: 10 + "px", backgroundColor: "#dddaaa" }}>
                {itemsDelCarrito}
                <div style={{width: 100+"%", display: "flex", justifyContent: "center"}}>
                    <button style={{ width: 80 + "%"}} onClick={() => useCallback(dispatchCarrito({type: 'borrar_todo'}), []) }>Borrar todo</button>
                </div>
            </div>
        </>
    )
}

export default Cart;