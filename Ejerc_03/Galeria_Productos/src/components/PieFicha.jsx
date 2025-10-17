import React from 'react';

function PieFicha({ precio, enStock }) {
  return (
    <div className="pie-ficha">
      {!enStock ? (
        <p className="no-stock">❌ No disponible</p>
      ) : (
        <p className="precio">
          {precio.moneda}{precio.valor.toFixed(2)}
          {precio.enOferta && <span className="oferta"> ¡OFERTA!</span>}
        </p>
      )}
    </div>
  );
}

export default PieFicha;
