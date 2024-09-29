import React from "react";
import { Link } from "react-router-dom";

export default function ServiciosComponent() {
    return (
        <div className='containerServicios'>
            {/* Sección de Encabezado con el logo y barra de navegación */}
            <header className='header-containerS'>
                <div className='logo-containerS' />
                <nav className='nav-containerS'>
                    <Link to="/" className='nav-btnS'>Inicio</Link>
                    <Link to="/servicios" className='nav-btn activeS'>Servicios</Link>
                    <Link to="/citas" className='nav-btnS'>Citas</Link>
                    <Link to="/ubicacion" className='nav-btnS'>Ubicación</Link>
                </nav>
                <button className='close-btn'><Link to="/">Cerrar Sesion</Link></button>
            </header>

            {/* Contenido Principal */}
            <main className='content-containerS'>
                <h1 className='titleS'>Nuestros Servicios</h1>
                <div class="servicios">
                    <div class="servicio">
                        <div className='servicio-containerS' />
                        <p>Tipo de Servicio: Corte Escolar</p>
                        <p>Precio: $50.00</p>
                    </div>
                    <div class="servicio">
                        <div className='servicio-containerS' />
                        <p>Tipo de Servicio: Corte Escolar</p>
                        <p>Precio: $50.00</p>
                    </div>
                    <div class="servicio">
                        <div className='servicio-containerS' />
                        <p>Tipo de Servicio: Corte Escolar</p>
                        <p>Precio: $50.00</p>
                    </div>
                    <div class="servicio">
                        <div className='servicio-containerS' />
                        <p>Tipo de Servicio: Corte Escolar</p>
                        <p>Precio: $50.00</p>
                    </div>
                    <div class="servicio">
                        <div className='servicio-containerS' />
                        <p>Tipo de Servicio: Corte Escolar</p>
                        <p>Precio: $50.00</p>
                    </div>
                    <div class="servicio">
                        <div className='servicio-containerS' />
                        <p>Tipo de Servicio: Corte Escolar</p>
                        <p>Precio: $50.00</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
