import React from "react";
import { Link } from "react-router-dom";


export default function MapacheBigotonComponent() {
    return (
        <div className='containerCitaR'>
            <header>
                <i>Mapache Bigotón</i>
            </header>
                <div className='img-containerCitaR'>
                </div>
                <div className='form-containerCitaR'>
                    <nav>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/servicios">Servicios</Link></li>
                            <li><Link to="/citas">Citas</Link></li>
                            <li><Link to="/ubicacion">Ubicación</Link></li>
                        </ul>
                    </nav>
                    <div className="text-aling">
                        <h2>Su cita ha sido registrada exitosamente</h2>
                    </div>
                </div>
        </div>
    );
}