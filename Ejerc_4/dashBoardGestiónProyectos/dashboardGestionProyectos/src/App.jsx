import { useState } from 'react'
import { proyectos } from './datos/proyectos.js';
import { ProyectColumn } from './componentes/ProyectColumn.jsx';
function App() {

  const [arregloProyectos, setArregloProyectos] = useState(proyectos);
  function handleActualizarEstado(proyectoId, nuevoEstado) {
    const nuevoArreglo = arregloProyectos.map((proyecto) =>
      // si tienen la misma ID, cambiamos el estado a uno nuevo,
      // si no, dejamos el proyecto de la iteración
      proyecto.id === proyectoId
        ? { ...proyecto, estado: nuevoEstado } // nueva copia con estado actualizado
        : proyecto
    );
    setArregloProyectos(nuevoArreglo);
  }

  // filtrado por estado
  let filtradoEstado = new Map([
    ["Pendiente", []],
    ["En Progreso", []],
    ["Completado", []]
  ]);

  // recorro el proyectos para filtrarlos y guardarlos por PRIORIDAD
  for (const proyecto of arregloProyectos) {
      filtradoEstado.get(proyecto.estado).push(proyecto);
      filtradoEstado.get(proyecto.estado).sort(compararPrioridad);
  }


  const elementos = [];
  filtradoEstado.forEach((valor, clave) => {
    elementos.push(<ProyectColumn key={clave} titulo={clave} proyectosFiltrados={valor} handler={handleActualizarEstado} />);
  });

  return (
    <div className="container my-4">
      <div className="row">
        {elementos}
      </div>
    </div>
  );
}

function compararPrioridad(a, b) {
  const prioridad = ['Baja', 'Media', 'Alta'];
  return prioridad.indexOf(b.prioridad) - prioridad.indexOf(a.prioridad);
}

export default App