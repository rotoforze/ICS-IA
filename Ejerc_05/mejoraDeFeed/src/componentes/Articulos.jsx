export function Articulos({article}) {
    return (
        <div key={article.id} className="card w-100 shadow-sm border-0">
            <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text text-muted mb-2">
                    Categoría: {article.category}
                </p>
                {article.pinned && (
                    <span className="badge bg-warning text-dark">Fijado</span>
                )}
            </div>
        </div>
    );
}