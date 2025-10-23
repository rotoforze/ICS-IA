import { useState } from "react";


export function ProfileCard({ usuario }) {
    // cojo el array de aficiones del usuario
    if (!usuario.id) {
        return (
            <div
                className="d-flex flex-column align-items-center justify-content-center text-secondary py-5"
                style={{
                    backgroundColor: "#3a3d42",
                    borderRadius: "1rem",
                    minHeight: "200px",
                }}
            >
                <i className="bi bi-person-circle fs-1 mb-3"></i>
                <h5 className="mb-0">Selecciona un usuario</h5>
            </div>

        );
    }
    
    const aficiones = [];
    for (const aficion of usuario.aficiones) {
        aficiones.push(<div
            key={aficiones.length}
            className="badge rounded-pill px-3 py-2"
            style={{ backgroundColor: "#6c757d", color: "#f8f9fa" }}
        >
            {aficion}
        </div>)
    }
    return (
        <div
            id={usuario.id}
            className="card mb-3 shadow-sm border-0 text-light"
            style={{
                backgroundColor: "#3a3d42",
                borderRadius: "1rem",
            }}
        >
            <div className="card-body d-flex align-items-center">
                <img
                    src={usuario.avatarUrl}
                    alt="avatar"
                    className="rounded-circle me-3 border border-secondary"
                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                />
                <div>
                    <h5 className="card-title mb-1 fw-semibold">{usuario.nombre}</h5>
                    <span className="d-block small">{usuario.email}</span>
                    <p className="card-text mb-2 small">
                        {usuario.direccion.calle}, {usuario.direccion.ciudad}
                    </p>
                    <div className="d-flex flex-wrap gap-2">{aficiones}</div>
                </div>
            </div>
        </div>

    );
}