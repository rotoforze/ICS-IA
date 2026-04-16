import React from 'react'
import { whichState } from '../utils/api';
import { useProjects } from '../context/ProjectContext';
import { NavLink } from 'react-router-dom';

export const ProjectList = () => {
  const { listaProjects } = useProjects();
  return (
    <div>
      <h2>Tus proyectos</h2>
      {listaProjects.map((project) => {
        return (
          <div key={project.id}>
            <h3><NavLink to={`/projects/${project.id}`}> {project.title}</NavLink></h3>
            <p>{project.description}</p>
            <p>{whichState(Number.parseInt(project.state))}</p>
          </div>
        )
      })}
    </div>
  )
}
