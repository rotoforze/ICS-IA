export function Articulos({ article, onPinToggle }) {
    return (
        <div
            key={article.id}
            className={`card w-100 shadow-sm border-0 mb-3 ${article.pinned ? 'bg-warning' : ''}`}
        >
            <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text text-muted mb-2">
                    Categoría: {article.category}
                </p>
                {article.pinned && (
                    <span className="badge bg-dark me-2">Fijado</span>
                )}

                <button
                    className={`btn btn-sm ${article.pinned ? 'btn-secondary' : 'btn-primary'}`}
                    onClick={() => onPinToggle(article.id)}
                >
                    {article.pinned ? 'Desfijar' : 'Fijar'}
                </button>
            </div>
        </div>
    );
}
