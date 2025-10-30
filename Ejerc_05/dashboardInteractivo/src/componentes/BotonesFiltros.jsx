import { Filtro } from './Filtro';
export function BotonesFiltros({ conjunto, handleFiltro, handleLista }) {
    // Convertimos el Set en un array para poder mapearlo
    const opciones = Array.from(conjunto);

    return (
        <div className="p-3 border rounded shadow-sm bg-light">
            <label className="form-label fw-bold text-primary">
                Filtrar por:
            </label>
            <select
                className="form-select border-primary"
                onChange={(e) => {
                    handleFiltro(e.target.value);
                }}
            >
                <option value="">-- Elegir --</option>
                {opciones.map((valor, index) => (
                    <Filtro key={index} filtro={valor} />
                ))}
            </select>
        </div>
    );
}