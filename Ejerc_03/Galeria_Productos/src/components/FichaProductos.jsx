import React from 'react';
import CabeceraFicha from './CabeceraFicha.jsx';
import ImagenProducto from './ImagenProducto.jsx';
import DetallesProducto from './DetallesProducto.jsx';
import PieFicha from './PieFicha.jsx';

function FichaProducto({ producto, children }) {
  const { nombre, vendedor, imagenes, caracteristicas, precio, enStock } = producto;

  return (
    <div className="ficha-producto">
      <CabeceraFicha nombre={nombre} vendedor={vendedor} />
      <ImagenProducto url={imagenes[0]} alt={nombre} />
      <DetallesProducto caracteristicas={caracteristicas}>
        {children}
      </DetallesProducto>
      <PieFicha precio={precio} enStock={enStock} />
    </div>
  );
}

export default FichaProducto;
