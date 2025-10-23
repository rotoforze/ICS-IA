import React from "react";
import { ProyectList } from "./ProyectList";

export function ProyectColumn({ titulo, proyectosFiltrados, handler }) {

    return (
        <div
            id={titulo}
            className="col-lg-4 col-md-6 col-sm-12 mb-4"
        >
            <div
                className="card h-100 border-0 shadow-sm"
                style={{
                    backgroundColor: "#f8f9fa",
                    borderRadius: "1rem",
                }}
            >
                {/* Encabezado del estado */}
                <div
                    className={`card-header text-center fw-bold`}
                    style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }}
                >
                    <h5 className="m-0">{titulo}</h5>
                </div>

                {/* Lista de proyectos */}
                <div className="card-body p-3">
                    <ProyectList listaProyectos={proyectosFiltrados} handler={handler} />
                </div>
            </div>
        </div>
    );

}