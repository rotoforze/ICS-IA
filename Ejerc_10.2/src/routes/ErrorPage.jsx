import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorPage = () => {
  const navigate = useNavigate();
  const id = setInterval(() => {
    navigate('/');
    clearInterval(id);
  }, 10000)

  return (
    <div>
      <h1>Ha ocurrido un error se le redireccionará a la página de Inicio en 10 segundos.</h1>
    </div>
  )
}
