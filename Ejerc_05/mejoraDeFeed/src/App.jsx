import React, { useState } from 'react';

// Simula una llamada a una API
const allArticles = [
  { id: 'a1', title: 'React 19 ya está aquí', category: 'React', pinned: true },
  { id: 'a2', title: 'Novedades en CSS: View Transitions', category: 'CSS', pinned: false },
  { id: 'a3', title: 'State Management con Zustand', category: 'React', pinned: false },
  { id: 'a4', title: 'El futuro de JavaScript: Records y Tuples', category: 'JavaScript', pinned: false },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div>
      <h1>Feed de Noticias</h1>
      <input
        type="text"
        placeholder="Buscar artículo..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <hr />
     
      {allArticles.map((article, index) => {
        if (article.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return (
            <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
              <h2>{article.title}</h2>
              <p>Categoría: {article.category}</p>
             
              {article.pinned && <strong>(Fijado)</strong>}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
export default App;