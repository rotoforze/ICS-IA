import React, { useEffect, useState } from 'react'
import { getAllStates } from '../utils/api'
import { useProjects } from '../context/ProjectContext';
import { useNavigate, Form, useActionData, useParams } from 'react-router-dom';

class TypeOfMessages {
  static ERROR_MESSAGE = 'error';
  static INFO_MESSAGE = 'info';
  static TIME_MESSAGE = 2500;

  static existTypeMessage(typeMessage) {
    for (const att in TypeOfMessages) {
      if (TypeOfMessages[att] == typeMessage) return true;
    }
    return false;
  }
}

export const NewTaskPage = () => {
  const response = useActionData();
  const { getProjectFromID, addTask } = useProjects();
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState('');
  const [mensajeClass, setMensajeClass] = useState('');
  const { projectid } = useParams();

  const project = getProjectFromID(projectid)[0];
  if (!project) return (<h2>No existe el projecto con ID {projectid}</h2>);

  const handleMensaje = (mensaje, typeOfMenssage = TypeOfMessages.INFO_MESSAGE) => {
    if (TypeOfMessages.existTypeMessage(typeOfMenssage)) {
      setMensaje(mensaje);
      setMensajeClass(typeOfMenssage);
      let idInterval = setInterval(() => {
        setMensajeClass('');
        clearInterval(idInterval);
      }, TypeOfMessages.TIME_MESSAGE)
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

  useEffect(() => {

    if (response) {

      try {

        if (response.errorMenssage) {
          throw new Error(response.errorMenssage);
        }

        const addedTask = addTask(response?.object || response);
        if (addedTask) {
          handleMensaje("Se ha añadido correctamente la tarea. Se le redireccionará en 3s.");
          let id = setInterval(() => {
            navigate(`/projects/${projectid}`);
            clearInterval(id);
          }, TypeOfMessages.TIME_MESSAGE)
        } else handleMensaje("Ha ocurrido un error intentando añadir el proyecto.", 'error')

      } catch (error) {
        console.error(error);
        handleMensaje(error.message, 'error');
      }

    }
  }, [response])

  return (
    <>
      <div className={mensajeClass + ' message'}>{mensaje}</div>
      <fieldset>
        <legend>Añadir nueva tarea para el proyecto con ID {projectid}</legend>
        <Form action={action} method='POST'>
          <input type="number" defaultValue={projectid} name='projectId' id='projectId' hidden />
          <div>
            <label htmlFor="title">Titulo</label>
            <input type="text" name="title" id="title" />
          </div>
          <div>
            <label htmlFor="description">Descripción</label>
            <input type="text" name="description" id="description" />
          </div>
          <div>
            <label htmlFor="state">Estado incial</label>
            <select name="state" id="state">
              {states}
            </select>
          </div>
          <input type="submit" name='enviar' id='enviar' value="Añadir proyecto" />
        </Form>
      </fieldset>
    </>
  )
}

export async function action({ request }) {
  console.log(request)
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  postData.state = Number.parseInt(postData.state);
  if (postData?.title.length < 5 || !postData?.title) {
    return { errorMenssage: `El titulo "${postData?.title}" está vacío o no tiene una longitud de al menos 5 carácteres (${postData?.title.length}).`, object: postData };
  } else if (!postData?.description) {
    return { errorMenssage: `La descripción "${postData?.description}" está vacía.`, object: postData };
  } else if (!(postData?.state > -1 && postData?.state < 4) || postData?.state == -1) {
    return { errorMenssage: `El Estado inicial no es válido (${postData?.state}) o está vacía.`, object: postData };
  } else return postData;
}
