import React from "react";
import { Link } from "react-router-dom";

export default function ServiciosComponent() {
    return (
        <div className='containerServicios'>
            <header>
                <div className="mapache"></div>
                <nav>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/servicios" className="active">Servicios</a></li>
                        <li><a href="/citas">Citas</a></li>
                        <li><a href="/ubicacion">Ubicación</a></li>
                    </ul>
                </nav>
                <button className="cerrar-sesion-btn"><a href="/">Cerrar Sesión</a></button>
            </header>
            <main>
                <h2>Nuestros Servicios</h2>
                <div className="servicios">
                    <div className="servicio">
                        <p>Corte Escolar</p>
                    </div>
                    <div className="servicio">
                        <p>Corte alineado de bigote</p>
                    </div>
                    <div className="servicio">
                        <p>Tratamiento Facial</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
