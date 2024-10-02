import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function InicioComponent() {
    const navigate = useNavigate();
    return (
        <div className='containerInicio'>
            <main>
                <div className='contentI'>
                    <div className='img-containerI'>
                    </div>
                    <div className='form-containerInicio'>
                        {/* Sección combinada con el título y los botones */}
                        <div className="title-buttonsI">
                            <h1 className="titleI">Mapache Bigotón</h1>
                            <div className="buttons-navI">
                                <Link to="/"><button className="nav-btnI">Inicio</button></Link>
                                <Link to="/servicios"><button className="nav-btnI">Servicios</button></Link>
                                <Link to="/citas"><button className="nav-btnI">Citas</button></Link>
                                <Link to="/ubicacion"><button className="nav-btnI">Ubicación</button></Link>
                            </div>
                            <div className="buttonsI">
                            <button className='inicio-btn' onClick={() => navigate('/')}>Cerrar Sesión</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
