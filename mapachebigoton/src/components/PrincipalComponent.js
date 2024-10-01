import React from "react";
import { Link } from "react-router-dom";

export default function MapacheBigotonComponent() {
    return (
        <div className='containerPrincipal'>
            <header>
                <i>Mapache Bigotón</i>
            </header>
            <main>
                <div className='content'>
                    <div className='img-container' />
                    <div className='form-containerPrincipal'>
                        <nav>
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/servicios">Servicios</Link></li>
                                <li><Link to="/citas">Citas</Link></li>
                                <li><Link to="/ubicacion">Ubicación</Link></li>
                            </ul>
                        </nav>
                        <div className="buttons">
                            <Link to="/registro"><button className="register-btn">Registrarse</button></Link>
                            <Link to="/iniciosesion"><button className="inicio-sesion-btn">Iniciar Sesión</button></Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
