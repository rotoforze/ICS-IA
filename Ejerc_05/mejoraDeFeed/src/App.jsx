import React, { useState } from 'react';
import { SearchBar } from './componentes/SearchBar';
import { ArticleList } from './componentes/ArticleList';

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
    <div className="container mt-4">
      <h1 className="text-center mb-4">Feed de Noticias</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <hr />
      <ArticleList allArticles={allArticles} searchTerm={searchTerm} />
    </div>
  );
}
export default App;