import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useProjects } from '../context/ProjectContext';
import { whichState } from '../utils/api';

export const ProjectDetailsPage = () => {
  const { projectid } = useParams();
  const navigate = useNavigate();

  const { getProjectFromID, getTasksFromProjectId, removeProjectFromID, removeTaskFromID } = useProjects();
  const project = getProjectFromID(projectid)[0];

  if (!project) return (<h2>No existe el projecto con ID {projectid}</h2>);

  const tasks = getTasksFromProjectId(projectid);

  return (
    <div>
      <h2>{project.title}</h2>
      <em>{whichState(project.state)}</em>
      <p>{project.description}</p>
      <div className='actions'>
        <button onDoubleClick={() => {
          if (removeProjectFromID(project.id)) navigate('/projects');
        }} title='Doble clikc para eliminar'>Eliminar projecto</button>
        <button>Siguiente estado</button>
        <button onClick={() => navigate(`/projects/${project.id}/newTask`)}>Añadir nueva tarea</button>
      </div>
      <h3>Tareas</h3>
      <ul>
        {tasks.length > 0 ? tasks.map((task) => (
          <li key={task.id}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <em>{whichState(Number.parseInt(task.state))}</em>
            <div className='actions'>
              <button>Siguiente estado</button>
              <button onDoubleClick={() => {
                if (removeTaskFromID(task.id)) navigate('/projects/'+project.id);
              }} title='Doble clikc para eliminar'>Eliminar tarea</button>
            </div>
          </li>
        )): <h4>No hay tareas asignadas a este projecto.</h4>}
      </ul>
    </div>
  )
}
