import React from 'react';
import { productos } from './datos/productos.js';
import GaleriaProductos from './components/GaleriaProductos.jsx';
import './App.css'; 

function App() {
  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <GaleriaProductos productos={productos} />
    </div>
  );
}

export default App;