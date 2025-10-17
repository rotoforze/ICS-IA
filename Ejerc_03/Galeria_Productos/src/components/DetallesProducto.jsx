import React from 'react';

function DetallesProducto({ caracteristicas, children }) {
  return (
    <div className="detalles-producto">
      <h4>Características:</h4>
      <ul>
        {caracteristicas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {}
      {children}
    </div>
  );
}

export default DetallesProducto;
