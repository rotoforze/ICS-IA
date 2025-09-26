import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'green' }}>
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">Mi Sitio</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Proyecto</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="recursosDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Recursos
              </a>
              <ul className="dropdown-menu" aria-labelledby="recursosDropdown">
                <li><a className="dropdown-item" href="#">Documentación</a></li>
                <li><a className="dropdown-item" href="#">Tutoriales</a></li>
                <li><a className="dropdown-item" href="#">API</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
