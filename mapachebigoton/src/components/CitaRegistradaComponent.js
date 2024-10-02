import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function MapacheBigotonComponent() {
    const navigate = useNavigate();

    return (
        <div className='containerCitaR'>
            <div className='img-containerCitaR' />
            <button className='logoutCitasR' onClick={() => navigate('/')}>Cerrar Sesión</button>
            <div className='form-containerCitaR'>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/servicios">Servicios</Link></li>
                        <li><Link to="/citas">Citas</Link></li>
                        <li><Link to="/ubicacion">Ubicación</Link></li>
                    </ul>
                </nav>
                <div className="text-alignR">
                    <h2>Su cita ha sido registrada exitosamente</h2>
                </div>
            </div>
        </div>
    );
}