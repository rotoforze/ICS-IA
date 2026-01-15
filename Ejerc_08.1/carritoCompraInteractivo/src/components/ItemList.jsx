import ItemCard from "./ItemCard";

function ItemList({ listaProductos, dispatchCarrito }) {

    const itemCards = listaProductos.map(item => <ItemCard id={item.id} nombre={item.name} precio={item.price} key={item.id} dispatchCarrito={dispatchCarrito} />)

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {itemCards}
        </div>
    );

}

export default ItemList;