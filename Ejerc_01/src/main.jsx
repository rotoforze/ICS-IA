import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './navBar.jsx'
import ContenedorTarjetas from './ContenedorTarjetas.jsx'
import Solicitud from './Solicitud.jsx'
import PiePagina from './PiePagina.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <ContenedorTarjetas />
    <Solicitud />
    <PiePagina />
  </StrictMode>,
)
