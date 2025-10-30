export function SearchBar({ setSearchTerm }) {
    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Buscar artículo..."
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}