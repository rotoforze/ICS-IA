import { useState, useEffect } from 'react'
import { ListaTareas } from './componentes/ListaTareas'
import { datos } from './scripts/datos.js'
import { BotonesFiltros } from './componentes/BotonesFiltros.jsx';
import { ResumenTareas } from './componentes/ResumenTareas.jsx';


function App() {
  const prioridades = new Set();
  datos.map((item) => {
    if (!prioridades.has(item.prioridad)) prioridades.add(item.prioridad);
  })

  const [filtro, setFiltro] = useState("all");
  function handleFiltro(filtroNuevo) {
    if (prioridades.has(filtroNuevo)) {
      setFiltro(filtroNuevo);
    } else setFiltro("all");
  }

  // lista
  const [listaTareasSinFiltrar, setListaTareasSinFiltrar] = useState(datos);
  function handleLista(idTarea) {
    if (idTarea) {
      setListaTareasSinFiltrar(listaTareasSinFiltrar.map((tarea) => {
        if (tarea.id == idTarea) {
          return { ...tarea, completada: !tarea.completada };
        }
        return tarea;
      }));

    }
  }
  const [listaTareasFinal, setListaTareasFinal] = useState(listaTareasSinFiltrar);

  // si existe esa prioridad, vamos a modificar la lista filtrada
  useEffect(() => {
    if (prioridades.has(filtro)) {
      // filtrado por prioridad
      setListaTareasFinal(
        listaTareasSinFiltrar.filter((tarea) => tarea.prioridad === filtro)
      );
    } else {
      // si no hay filtro, copiamos la lista
      setListaTareasFinal(listaTareasSinFiltrar);
    }
    // Si la lista esta vacia, metemos un item que ponga que no hay tareas
    if (listaTareasSinFiltrar.length == 0) {
      listaTareasSinFiltrar.push({ id: -1, completada: null, prioridad: null, texto: 'NO HAY TAREAS QUE CUMPLAN LOS FILTROS' })
    }
  }, [filtro, listaTareasSinFiltrar]);



  return (
    <>
      <BotonesFiltros conjunto={prioridades} handleFiltro={handleFiltro} />
      <ListaTareas listaTareas={listaTareasFinal} handlerLista={handleLista} />
      <ResumenTareas listaSinFiltrar={listaTareasSinFiltrar} listaFinal={listaTareasFinal}/>
    </>
  )
}

export default App