import React from 'react';

function CabeceraFicha({ nombre, vendedor }) {
  return (
    <div className="cabecera-ficha">
      <h3>{nombre}</h3>
      <p>Vendedor: {vendedor.nombre} ⭐ {vendedor.rating}</p>
    </div>
  );
}

export default CabeceraFicha;
