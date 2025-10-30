import { useState } from "react";
import { Tarea } from "./Tarea";

export function ListaTareas({ listaTareas, handlerLista }) {
    let tarjetasTareas = [];
    listaTareas.map((tareaActual) => {
        tarjetasTareas.push(<Tarea key={tareaActual.id} tarea={tareaActual} handler={handlerLista} />)
    })
    return (
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-body">
                    <h5 className="card-title mb-3">Lista de Tareas</h5>
                    <div className="list-group">
                        {tarjetasTareas}
                    </div>
                </div>
            </div>
        </div>
    );

}