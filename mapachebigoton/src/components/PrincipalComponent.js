import React from "react";
import { Link } from "react-router-dom";

export default function MapacheBigotonComponent() {
    return (
        <div className='containerPrincipal'>
            <main>
                <div className='content'>
                    <div className='img-container'>
                    </div>
                    <div className='form-containerPrincipal'>
                        {/* Sección combinada con el título y los botones */}
                        <div className="title-buttons">
                            <h1 className="title">Mapache Bigotón</h1>
                            <div className="buttons-nav">
                                <Link to="/"><button className="nav-btn">Inicio</button></Link>
                                <Link to="/servicios"><button className="nav-btn">Servicios</button></Link>
                                <Link to="/citas"><button className="nav-btn">Citas</button></Link>
                                <Link to="/ubicacion"><button className="nav-btn">Ubicación</button></Link>
                            </div>
                            <div className="buttons">
                                <Link to="/registro"><button className="register-btn">Registrarse</button></Link>
                                <Link to="/iniciosesion"><button className="inicio-sesion-btn">Iniciar Sesión</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
