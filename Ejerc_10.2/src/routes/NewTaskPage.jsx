import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getAllStates } from '../utils/api'
import { useProjects } from '../context/ProjectContext';

export const NewTaskPage = () => {
  const { projectid } = useParams();
  const navigate = useNavigate();

  const { getProjectFromID, getNextTaskID, addTask } = useProjects();

  const project = getProjectFromID(projectid)[0];

  if (!project) return (<h2>No existe el projecto con ID {projectid}</h2>);

  let states = [];

  getAllStates().forEach((val, key) => {
    states.push((
      <option key={key} value={key}>
        {val}
      </option>
    ));
  }); F

  return (
    <fieldset>
      <legend>Añadir nueva tarea para el proyecto con ID {projectid}</legend>
      <form>
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
      </form>
    </fieldset>
  )
}
