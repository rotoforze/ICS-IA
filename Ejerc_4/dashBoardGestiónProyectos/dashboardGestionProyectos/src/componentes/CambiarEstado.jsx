import React from "react";

export function CambiarEstado({ estado, id, handler }) {
    const estados = ['Pendiente', 'En Progreso', 'Completado'];
    const estadosDisponibles = estados.filter((e) => e !== estado);
    const estadosImprimir = [];
    for (const value of estadosDisponibles) {
        estadosImprimir.push(
            <li key={value}>
                <button
                    className="dropdown-item"
                    onClick={() => handler(id, value)}
                >
                    {value}
                </button>
            </li>);
    };
    return (
        <div className="dropdown text-center">
            <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Mover a otro estado
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {estadosImprimir}
            </ul>
        </div>
    );
}