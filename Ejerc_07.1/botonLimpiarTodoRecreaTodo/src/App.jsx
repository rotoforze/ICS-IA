import { useCallback, useState } from 'react'
import ToastContainer from './components/ToastContainer';
import Controlador from './components/Controlador';

const errores = [
  { id: 1, message: "Error 404 no encontrado" },
  { id: 2, message: "Error al cargar los datos" },
  { id: 3, message: "No se ha encontrado la búsqueda" },
  { id: 4, message: "Falta un parámetro" },
  { id: 5, message: "Server internal error" },
  { id: 6, message: "Fallo de API" },
  { id: 7, message: "El cliente está desactualizado" },
];

let seHanCargadoLos1000ErroresAlCrearLaPagina = 0;

function App() {

  const [erroresModificados, setErroresModificados] = useState(structuredClone(errores));

  const quitarMensaje = useCallback((id) => {
    if (id == undefined || id == null) return;

    setErroresModificados(erroresModificados.filter(error => {
      if (error.id != id) return error;
    }));
  }, [erroresModificados])

  function addMensajeRandom() {
    // lo clono
    const nuevoMensaje = structuredClone(errores[Math.floor(Math.random() * errores.length)]);
    if (erroresModificados.length > 0) {
      nuevoMensaje.id = erroresModificados[erroresModificados.length - 1].id + 1;
    } else nuevoMensaje.id = 1;

    let nuevoArrayDeMensajes = erroresModificados;
    nuevoArrayDeMensajes.push(nuevoMensaje)

    setErroresModificados(structuredClone(nuevoArrayDeMensajes));
  }

  if (seHanCargadoLos1000ErroresAlCrearLaPagina == 0) {
    for (let i = 0; i < 1000; i++) {
      addMensajeRandom();
    }
    seHanCargadoLos1000ErroresAlCrearLaPagina = 1;
  }

  function eliminarTodo() {
    const arrayVacio = [];
    setErroresModificados(structuredClone(arrayVacio));
  }

  return (
    <>
      <Controlador handlerNuevoMensaje={addMensajeRandom} handlerEliminarTodo={eliminarTodo} />
      <div>
        <p style={{ textAlign: 'center', fontFamily: "arial", fontWeight: "bold" }}>Errores ({erroresModificados.length})</p>
        <ToastContainer listaErrores={erroresModificados}
          funcionQuitarSegunID={quitarMensaje} />
      </div>
    </>
  );
}


export default App
