import React from "react";
import { MemberList } from "./MemberList";
import { CambiarEstado } from "./CambiarEstado";

export function ProyectList({ listaProyectos, handler }) {
    if (!listaProyectos) {
        console.error('NO ES UNA LISTA VÁLIDA', listaProyectos)
        return (<div>NO HAY LISTA VÁLIDA</div>);
    }
    const proyectos = [];


    for (const proyecto of listaProyectos) {


        // Color de fondo según el estado
        let estadoColor = "";
        switch (proyecto.estado) {
            case "Pendiente":
                estadoColor = "border-warning";
                break;
            case "En Progreso":
                estadoColor = "border-info";
                break;
            case "Completado":
                estadoColor = "border-success";
                break;
            default:
                estadoColor = "border-light";
        }

        // Color de la prioridad
        let prioridadColor = "";
        switch (proyecto.prioridad) {
            case "Alta":
                prioridadColor = "bg-danger";
                break;
            case "Media":
                prioridadColor = "bg-warning text-dark";
                break;
            case "Baja":
                prioridadColor = "bg-success";
                break;
            default:
                prioridadColor = "bg-secondary";
        }

        proyectos.push(
            <div
                key={proyecto.id}
                id={proyecto.id}
                className={`card mb-4 shadow-sm border-2 ${estadoColor}`}
                style={{ backgroundColor: "#f8f9fa", borderRadius: "1rem" }}
            >
                <div className="card-body">
                    {/* Cabecera */}
                    <div className="d-flex justify-content-between align-items-start mb-2">
                        <h4 className="card-title text-dark">{proyecto.titulo}</h4>
                        <span className={`badge ${prioridadColor} px-3 py-2`}>
                            {proyecto.prioridad}
                        </span>
                    </div>

                    {/* Descripción */}
                    <p className="card-text text-muted">{proyecto.descripcion}</p>

                    {/* Estado */}
                    <p className="text-uppercase small fw-semibold mb-2">
                        Estado:{" "}
                        <span
                            className={`badge ${proyecto.estado === "Completado"
                                    ? "bg-success"
                                    : proyecto.estado === "En Progreso"
                                        ? "bg-info text-dark"
                                        : "bg-secondary"
                                }`}
                        >
                            {proyecto.estado}
                        </span>
                    </p>

                    {/* Responsables */}
                    <div>
                        <MemberList proyecto={proyecto} />
                    </div>
                    
                    {/* Boton para cambiar de estado */}
                    <div>
                        <CambiarEstado estado={proyecto.estado} id={proyecto.id} handler={handler}/>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            {proyectos.length > 0 ? (proyectos) : (
                <div className="text-center text-muted py-5">
                    <i className="bi bi-clipboard-x fs-1 mb-3"></i>
                    <h5>No hay proyectos disponibles</h5>
                </div>
            )}
        </div>
    );
}
