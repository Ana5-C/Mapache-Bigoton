import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ServiciosComponent() {
    const navigate = useNavigate();
    return (
        <div className='containerServicios'>
            {/* Sección de Encabezado con el logo y barra de navegación */}
            <header className='header-containerS'>
                <div className='logo-containerS' />
                <nav className='nav-containerS'>
                    <Link to="/inicio" className='nav-btnS'>Inicio</Link>
                    <Link to="/servicios" className='nav-btn activeS'>Servicios</Link>
                    <Link to="/citas" className='nav-btnS'>Citas</Link>
                    <Link to="/ubicacion" className='nav-btnS'>Ubicación</Link>
                </nav>
                <button className='inicio-btn' onClick={() => navigate('/')}>Cerrar Sesión</button>
            </header>

            {/* Contenido Principal */}
            <main className='content-containerS'>
                <h1 className='titleS'>Nuestros Servicios</h1>
                <div class="servicios">
                    <div class="servicio">
                        <div className='servicio-container1' />
                        <p>Corte de cabello</p>
                        <p>Precio: $100.00</p>
                    </div>
                    <div class="servicio">
                        <div className='servicio-container2' />
                        <p>Afeitado con navaja</p>
                        <p>Precio: $100.00</p>
                    </div>
                    <div class="servicio">
                        <div className='servicio-container3' />
                        <p>Arreglo de barba y bigote</p>
                        <p>Precio: $150.00</p>
                    </div>
                    <div class="servicio">
                        <div className='servicio-container4' />
                        <p>Tratamientos capilares</p>
                        <p>Precio: $250.00</p>
                    </div>
                    <div class="servicio">
                        <div className='servicio-container5' />
                        <p>Tratamiento Facial</p>
                        <p>Precio: $300.00</p>
                    </div>
                    <div class="servicio">
                        <div className='servicio-container6' />
                        <p>Corte Escolarr</p>
                        <p>Precio: $50.00</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
