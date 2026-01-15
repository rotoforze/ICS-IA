import { useReducer, useState } from 'react'
import ItemList from './components/ItemList'
import { productos } from './data/products';
import Cart from './components/Cart';
import { reducer } from './parseComponent/parse';

function App() {
  const [state, dispatch] = useReducer(reducer,  [])

  function getNombreDelItem(id) {
    for (const item of productos) {
      if (item.id == id) return item.name;
    }
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ItemList listaProductos={productos} dispatchCarrito={dispatch} />
        <Cart carrito={state} getNombres={getNombreDelItem} dispatchCarrito={dispatch} />
      </div>
    </>
  );


}
export default App
