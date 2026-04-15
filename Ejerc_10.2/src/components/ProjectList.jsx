import React from 'react'
import { whichState } from '../utils/api';
import { useProjects } from '../context/ProjectContext';

export const ProjectList = () => {
  const { listaProjects } = useProjects();
  return (
    <div>
      {listaProjects.map((project) => {
        return (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{whichState(Number.parseInt(project.state))}</p>
          </div>
        )
      })}
    </div>
  )
}
