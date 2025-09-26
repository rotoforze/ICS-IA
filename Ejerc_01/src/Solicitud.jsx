import React, { useState } from 'react';

const Solicitud = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-success">Formulario de Solicitud</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            id="mensaje"
            name="mensaje"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success text-white">Enviar</button>
      </form>
    </div>
  );
};

export default Solicitud;
