import { useState } from "react";

export function Tarea({tarea, handler}) {

  let bgColor = '';
  // si está compleatada, la ponemos clarita y tachada
  if (tarea.completada) {
    bgColor = 'bg-light text-muted';
  } else {
    // si no esta completada comprobamos la prioridad
    // según la prioridad, ponemos diferentes colores de fondo
    bgColor = tarea.prioridad === 'alta' 
      ? 'bg-danger text-white' 
      : tarea.prioridad === 'media' 
        ? 'bg-warning text-dark' 
        : 'bg-success text-white';
  }

  return (
    <div className={`card mb-2 ${bgColor}`}>
      <div className="card-body">
        <p className={`card-text ${tarea.completada ? 'text-decoration-line-through' : ''}`}
            onClick={() => handler(tarea.id)}>
          <strong>Tarea:</strong> {tarea.texto}
        </p>
        <p className={`card-text ${tarea.completada ? 'text-decoration-line-through' : ''}`}>
          <strong>Estado:</strong> {tarea.completada ? 'Completada' : 'Pendiente'}
        </p>
        <p className={`card-text ${tarea.completada ? 'text-decoration-line-through' : ''}`}>
          <strong>Prioridad:</strong> 
          <span className={`badge ${tarea.completada ? 'bg-secondary' : tarea.prioridad === 'alta' ? 'bg-dark' : tarea.prioridad === 'media' ? 'bg-dark' : 'bg-dark'}`}>
            {tarea.prioridad}
          </span>
        </p>
      </div>
    </div>
  );

}