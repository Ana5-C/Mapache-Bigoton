import React, { useState } from "react";
import PrincipalService from '../services/PrincipalService';
import { Link } from "react-router-dom";

export default function MapacheBigotonComponent() {

  return (
    <div className='containerPrincipal'>
      <div className='im-container' >
        <div className='form-containerPrincipal'>
          <div className="col-md-4 d-flex justify-content-center">
            <img src="imagen/de/mapache.png" />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-4" >Mapache Bigotón</h1>
            <div className="btn-group mt-4" role="group" aria-label="Menu Principal">
              <Link to="/" className="btn btn-lg rounded-0" >Inicio</Link>
              <Link to="/servicios" className="btn btn-lg rounded-0" >Servicios</Link>
              <Link to="/citas" className="btn btn-lg rounded-0" >Citas</Link>
              <Link to="/ubicacion" className="btn btn-lg rounded-0" >Ubicación</Link>
            </div>
            <div className="mt-4">
              <Link to="/registro" className="btn btn-lg rounded-pill px-5 me-3" >Registrarse</Link>
              <Link to="/iniciosesion" className="btn btn-lg rounded-pill px-5" >Iniciar Sesión</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
