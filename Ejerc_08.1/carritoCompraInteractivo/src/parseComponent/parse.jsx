import { productos } from "../data/products";

export function reducer(state, action) {
  
  let existe = false;
  let newCart;
  switch (action.type) {
    case 'incrementar_cantidad':
      newCart = structuredClone(state);

      for (const cartItem of newCart) {
        if (cartItem.id == action.id) {
          existe = true;
          cartItem.quantity += 1;
        }
      }

      if (!existe) throw Error('no existe el item en el carrito: ' + action.id);

      return newCart;
      break;
    case 'añadir_nuevo':
      newCart = structuredClone(state);

      for (const cartItem of newCart) {
        if (cartItem.id == action.id) {
          existe = true;
          cartItem.quantity += 1;
        }
      }

      if (!existe) {
        for (const item of productos) {
          if (item.id == action.id) {
            newCart.push({
              id: item.id,
              price: item.price,
              quantity: 1
            });
            existe = true;
          }
        }
      }

      if (!existe) throw Error('No existe el item: ' + action.id);

      return newCart;;
      break;
    case 'quitar_uno':
      newCart = structuredClone(state);

      newCart.map((item) => {
        if (item.id == action.id) item.quantity -= 1;
      })

      newCart = newCart.filter((item) => {
        if (item.quantity > 0) return item;
      })

      return newCart;
      break;
    case 'borrar_item':
      newCart = structuredClone(state);

      newCart.map((item) => {
        if (item.id == action.id) item.quantity = item.quantity * (-1);
      })

      newCart = newCart.filter((item) => {
        if (item.quantity > 0) return item;
      })

      return newCart;
      break;
    case 'borrar_todo':
      return [];
      break;
    default:
      throw Error('acción desconocida: ' + action.type);
  }
}