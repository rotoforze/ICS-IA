import { useCallback } from "react";
import CartItem from "./CartItem";

function Cart({ carrito, getNombres, dispatchCarrito }) {
    let total = 0;
    const itemsDelCarrito = carrito.map((item) => {
        total += item.price * item.quantity;
        return <CartItem nombre={getNombres(item.id)}
            id={item.id} key={item.id} precio={item.price}
            cantidad={item.quantity} dispatchCarrito={dispatchCarrito} />
    });

    return (
        <>
            <div style={{ width: 100 + "dvw", padding: 10 + "px", margin: 10 + "px", borderRadius: 10 + "px", backgroundColor: "#dddaaa" }}>
                {itemsDelCarrito.lenght > 0 ? itemsDelCarrito : <i>no hay items en el carrito</i>}
                <div style={{ width: 100 + "%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <p>Total: {total.toFixed(2)}€</p>
                    <button style={{ width: 80 + "%" }} onClick={() => useCallback(dispatchCarrito({ type: 'borrar_todo' }), [])}>Borrar todo</button>
                </div>
            </div>
        </>
    )
}

export default Cart;