import React, { useState } from 'react'
import { getAllStates } from '../utils/api'
import { useProjects } from '../context/ProjectContext';

class TypeOfMessages {
  static ERROR_MESSAGE = 'error';
  static INFO_MESSAGE = 'info';

  static existTypeMessage(typeMessage) {
    for (const att in TypeOfMessages) {
      if (TypeOfMessages[att] == typeMessage) return true;
    }
    return false;
  }
}

export const NewProjectPage = () => {
  const { addProject } = useProjects();

  const [mensaje, setMensaje] = useState('');
  const [mensajeClass, setMensajeClass] = useState('');
  const handleMensaje = (mensaje, typeOfMenssage = TypeOfMessages.INFO_MESSAGE) => {
    if (TypeOfMessages.existTypeMessage(typeOfMenssage)) {
      setMensaje(mensaje);
      setMensajeClass(typeOfMenssage);
      let idInterval = setInterval(() => {
        setMensajeClass('');
      }, 5000)
    }
  }

  let states = [];

  getAllStates().forEach((val, key) => {
    states.push((
      <option key={key} value={key}>
        {val}
      </option>
    ));
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      title: e.target.titulo.value,
      description: e.target.descripcion.value,
      state: e.target.state.value
    };
    e.target.enviar.disabled = true;
    let id = setInterval(() => {
      e.target.enviar.disabled = false;
    }, 4000)

    try {

      for (const key in newProject) {
        const element = newProject[key];

        if (element == undefined || element == '') {
          throw new Error(`${key} está vacío o es inválido`)
        }
      }

      if (addProject(newProject)) {
        handleMensaje("Se ha añadido correctamente el proyecto.");
        e.target.reset;
      } else handleMensaje("Ha ocurrido un error intentando añadir el proyecto.", 'error')

    } catch (error) {
      console.error(error)
      handleMensaje(error.message, 'error')

    }
  }

  return (
    <>
      <div className={mensajeClass + ' message'}>{mensaje}</div>
      <fieldset>
        <legend>Añadir nuevo proyecto</legend>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="titulo">Titulo</label>
            <input type="text" name="titulo" id="titulo" />
          </div>
          <div>
            <label htmlFor="descripcion">Descripción</label>
            <input type="text" name="descripcion" id="descripcion" />
          </div>
          <div>
            <label htmlFor="state">Estado incial</label>
            <select name="state" id="state">
              {states}
            </select>
          </div>
          <input type="submit" name='enviar' id='enviar' value="Añadir proyecto" />
        </form>
      </fieldset>
    </>
  )
}
