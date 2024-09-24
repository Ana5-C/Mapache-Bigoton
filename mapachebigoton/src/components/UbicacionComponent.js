import React from "react";
import { Link } from "react-router-dom";

export default function UbicacionComponent() {
    return (
        <div className='containerUbicacion'>
            <header>
                <img src="https://images.app.goo.gl/7KfopC3jCzw2V3B58" alt="Logo" className="logo" />
                <button className="logout-btn"><Link to="/">Cerrar Sesión</Link></button>
            </header>
            <main>
                <div className='form-containerPrincipal'>
                    <nav>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/servicios">Servicios</Link></li>
                            <li><Link to="/citas">Citas</Link></li>
                            <li><Link to="/ubicacion">Ubicación</Link></li>
                        </ul>
                    </nav>
                    <i>Barbería El Mapache Bigotón</i>
                    <div className="info">
                        <p>Nos ubicamos en:</p>
                        <p>Av. Hidalgo No.118 en Teziutlán, Puebla</p> 
                        <p>Tel. 1234567890 correo: bar.mapachito@gmail.com</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
