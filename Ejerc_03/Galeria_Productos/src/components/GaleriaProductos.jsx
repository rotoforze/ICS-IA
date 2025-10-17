import React from 'react';
import FichaProducto from './FichaProductos.jsx';

function GaleriaProductos({ productos }) {
  return (
    <div>
      <h2>Galería de Productos</h2>
      <div className="galeria">
        {productos.map((producto) => (
          <FichaProducto key={producto.id} producto={producto}>
            <button>Más información</button>
          </FichaProducto>
        ))}
      </div>
    </div>
  );
}

export default GaleriaProductos;
