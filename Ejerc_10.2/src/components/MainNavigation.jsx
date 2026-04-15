import { NavLink } from "react-router-dom";

export const MainNavigation = () => {

  return (
    <nav>
      <ul>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'activo' : undefined) + " btn-navlink"}>Inicio</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => (isActive ? 'activo' : undefined) + " btn-navlink"}>Proyectos</NavLink></li>
        <li><NavLink to="/projects/new" className={({ isActive }) => (isActive ? 'activo' : undefined) + " btn-navlink"}>Nuevo proyecto</NavLink></li>
      </ul>
    </nav>
  )
}
