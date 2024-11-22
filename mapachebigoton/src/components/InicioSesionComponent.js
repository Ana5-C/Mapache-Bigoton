import React, { useState } from 'react';
import ClienteService from '../services/ClienteService';
import { Link } from 'react-router-dom';

export default function LoginComponents() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!nombreUsuario || !contrasena) {
      setError('Por favor, complete todos los campos obligatorios');
    } else {
      try {
        const response = await ClienteService.login(nombreUsuario, contrasena);
        console.log(response);
        window.location.href = '/inicio';
      } catch (error) {
        if (error.message === 'Bad Request') {
          setError('Faltan campos por llenar');
        } else if (error.response && error.response.status === 400) {
          setError('Usuario y/o contraseña incorrectos');
        } else {
          setError(error.message);
        }
      }
    }
  }
  
  return (
    <div>
      <div className='containerInicioSesion'>
        <div className='im-containerInicioSesion' />
        <div className='form-containerInicioSesion'>
          <h2>Iniciar Sesión</h2>
          <div className='card-bodyInicioSesion'>
            <form onSubmit={handleSubmit}>
              <div className='form-groupInicioSesion'>
                <label className='form-labelInicioSesion'>Nombre de usuario:</label>
                <input
                  type='text'
                  placeholder='Ingrese el nombre de usuario'
                  name='nombreUsuario'
                  className='form-controlInicioSesion'
                  value={nombreUsuario}
                  onChange={(e) => setNombreUsuario(e.target.value)} />
              </div>
              <div className='form-groupInicioSesion'>
                <label className='form-labelInicioSesion'>Contraseña:</label>
                <input
                  type='password'
                  placeholder='Ingrese la contraseña'
                  name='contrasena'
                  className='form-controlInicioSesion'
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)} />
              </div>
              {(!nombreUsuario || !contrasena) && (
                <div style={{ color: 'red' }}>
                </div>
              )}
              {error && (
                <div style={{ color: 'red' }}>
                  {error}
                </div>
              )}
              <button className='btnInicioSesion btn-successInicioSesion'> Iniciar Sesión </button>
              &nbsp;&nbsp;
              <Link to='/' className='btnInicioSesion btn-dangerInicioSesion'>Cancelar</Link>
            </form>
            <a href="/registro" class="login-linkInicioSesion">¿No tienes una cuenta? Regístrate</a>
          </div>
        </div>
      </div>
    </div>
  )
}