import React from "react";
import { Link } from "react-router-dom";

export default function ServiciosComponent() {
    return (
        <div className='containerServicios'>
            <header>
                <div class="mapache">
                </div>
                <nav>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/servicios" class="active">Servicios</a></li>
                        <li><a href="/citas">Citas</a></li>
                        <li><a href="/ubicacion">Ubicación</a></li>
                    </ul>
                </nav>
                <button class="cerrar-sesion-btn"><a href="/">Cerrar Sesión</a></button>
            </header>
            <main>
                <h2>Nuestros Servicios</h2>
                <div class="servicios">
                    <div class="servicio">

                        <p>Corte Escolar</p>
                    </div>
                    <div class="servicio">

                        <p>Corte alineado de bigote</p>
                    </div>
                    <div class="servicio">

                        <p>Tratamiento Facial</p>
                    </div>
                </div>
            </main>

        </div>

    );
}