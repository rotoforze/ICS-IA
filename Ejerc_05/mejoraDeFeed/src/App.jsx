import React, { useState } from 'react';
import { SearchBar } from './componentes/SearchBar';
import { Articulos } from './componentes/Articulos';
import { EmptyState } from './componentes/EmptyState';

const allArticles = [
  { id: 'a1', title: 'React 19 ya está aquí', category: 'React', pinned: true },
  { id: 'a2', title: 'Novedades en CSS: View Transitions', category: 'CSS', pinned: false },
  { id: 'a3', title: 'State Management con Zustand', category: 'React', pinned: false },
  { id: 'a4', title: 'El futuro de JavaScript: Records y Tuples', category: 'JavaScript', pinned: false },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [articles, setArticles] = useState(allArticles);

  const categories = ['Todas', ...new Set(allArticles.map(article => article.category))];

  const handlePinToggle = (id) => {
    setArticles(prevArticles =>
      prevArticles.map(article => ({
        ...article,
        pinned: article.id === id ? !article.pinned : false
      }))
    );
  };

  const filteredArticles = articles.filter(article =>
    (selectedCategory === 'Todas' || article.category === selectedCategory) &&
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedArticles = [...filteredArticles].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Feed de Noticias</h1>
      <SearchBar setSearchTerm={setSearchTerm} />

      <div className="mb-3">
        <label htmlFor="categorySelect" className="form-label">Filtrar por categoría:</label>
        <select
          id="categorySelect"
          className="form-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <hr />

      {displayedArticles.length === 0 ? (
        <EmptyState/>
      ) : (
        displayedArticles.map(article => (
          <Articulos
            key={article.id}
            article={article}
            onPinToggle={handlePinToggle}
          />
        ))
      )}
    </div>
  );
}

export default App;