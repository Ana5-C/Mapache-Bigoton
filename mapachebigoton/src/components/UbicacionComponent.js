import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UbicacionComponent() {
  const navigate = useNavigate();
  return (
    <div className='containerUbicacion'>
      {/* Sección de Encabezado con el logo y barra de navegación */}
      <header className='header-containerU'>
      <div className='logo-containerU'/>
        <nav className='nav-containerU'>
          <Link to="/inicio" className='nav-btnU'>Inicio</Link>
          <Link to="/servicios" className='nav-btnU'>Servicios</Link>
          <Link to="/citas" className='nav-btnU'>Citas</Link>
          <Link to="/ubicacion" className='nav-btn activeU'>Ubicación</Link>
        </nav>
        <button className='close-btnU'onClick={() => navigate('/')}>Cerrar Sesión</button>
      </header>

      {/* Contenido Principal */}
      <main className='content-containerU'>
        <h1 className='titleU'>Barbería El Mapache Bigotón</h1>
        <h2 className='subtitleU'>Nos ubicamos en:</h2>
        <p className='addressU'>
          Av. Hidalgo No.118, en Teziutlán, Puebla
        </p>
        <p className='contactU'>
          Tel. 1234567890 &nbsp;&nbsp;&nbsp; Correo: bar.mapachito@gmail.com
        </p>
      </main>
    </div>
  );
}
