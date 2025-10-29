import { useEffect, useState } from 'react'
import GestorListaUsuarios from './componentes/UserList.jsx'
import { ProfileCard } from './componentes/ProfileCard.jsx';
import './App.css'
import { usuarios } from './datos/datos.js';


function App() {
  // uso la función useState de react, para guardar el usuarioSeleccionado y settearlo
  const [usuarioSelecionado, setUsuarioSelecionado] = useState("");
  function handleActualizarUsuarioSeleccionado() {
    setUsuarioSelecionado(getUsuario())
  }
  // esta función devuelve el usuario que está marcado como seleccionado
  function getUsuario() {
    let usuario = null;
    const id = document.querySelector('#selecionado').getAttribute('role');

    usuarios.forEach((user) => {
      if (user.id === id && !usuario) usuario = user;
    });

    return usuario;
  }
  // uso la función useState para guardar el valor de la barra de búsqueda
  // y settearla
  const [searchTerm, setSearchTerm] = useState("");
  function handleUpdateSearchTerm(event) {
    setSearchTerm(event.target.value);
  };


  return (
    <>
      <div className="container my-4">
        <nav className="navbar rounded-3 shadow-sm mb-4 px-3" style={{ backgroundColor: "#343a40" }}>
          <h2 className="navbar-brand mb-0 text-white fs-4">
            Gestor de Perfiles de Usuario
          </h2>
        </nav>
        <section className="card p-4 shadow-sm border-0" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0 text-secondary">Lista de Usuarios</h4>
          </div>
          <div className="input-group mb-4">
            <span className="input-group-text bg-light border-0 text-muted">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Buscar usuario..."
              className="form-control border-0 bg-light"
              onChange={handleUpdateSearchTerm}
            />
            <button
              className="btn btn-secondary text-white"
              type="button"
            >
              Buscar
            </button>
          </div>
          <div className="p-3 bg-white rounded shadow-sm">
            {/* le mando la lista, el handler y la busqueda como parámetro al componente */}
            <GestorListaUsuarios listaUsuarios={usuarios} handlerUsuarioSeleccionado={handleActualizarUsuarioSeleccionado} busqueda={searchTerm} />
          </div>
        </section>
        <section className="card p-4 shadow-sm border-0" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0 text-secondary">Informacion del usuario</h4>
          </div>
          <div className="p-3 bg-white rounded shadow-sm">
            {/* le mando el usuario seleccionado */}
            <ProfileCard usuario={usuarioSelecionado} />
          </div>
        </section>
      </div>

    </>
  )
}

export default App