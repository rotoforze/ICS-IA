import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainNavigation } from '../components/MainNavigation'
import { useLoaderData } from "react-router-dom";
import { useProjects } from '../context/ProjectContext';

export const RootLayout = () => {
  
  const { listaProjects, setListaProjects } = useProjects();
  if (listaProjects == '') {
    const projects = useLoaderData().projects;
    setListaProjects(projects);
  }


  const { listaTasks, setListaTasks } = useProjects();
    if (listaTasks == '') {
      const tasks = useLoaderData().tasks;
      setListaTasks(tasks);
    }
    
  return (
    <>
      <header>
        <MainNavigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
