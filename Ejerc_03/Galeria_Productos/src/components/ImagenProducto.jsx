import React from 'react';

function ImagenProducto({ url, alt }) {
  return (
    <div className="imagen-producto">
      <img src={url} alt={alt} width="200" height="200" />
    </div>
  );
}

export default ImagenProducto;
