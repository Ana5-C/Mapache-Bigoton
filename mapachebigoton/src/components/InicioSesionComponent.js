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
        window.location.href = '/';
      } catch (error) {
        if (error.message === 'Bad Request') {
          setError('Faltan campos por llenar');
        } else {
          setError(error.message);
        }
      }
    }
  }

  return (
    <div>
      <div className='containerInicioC'>
        <div className='im-containerC' />
        <div className='form-containerInicioC'>
          <h2>Iniciar Sesión</h2>
          <div className='card-bodyInicioC'>
            <form onSubmit={handleSubmit}>
              <div className='form-groupInicioC'>
                <label className='form-labelInicioC'>Nombre de usuario:</label>
                <input
                  type='text'
                  placeholder='Ingrese el nombre de usuario'
                  name='nombreUsuario'
                  className='form-controlInicioC'
                  value={nombreUsuario}
                  onChange={(e) => setNombreUsuario(e.target.value)} />
              </div>
              <div className='form-groupInicioC'>
                <label className='form-labelInicioC'>Contraseña:</label>
                <input
                  type='password'
                  placeholder='Ingrese la contraseña'
                  name='contrasena'
                  className='form-controlInicioC'
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
              <button className='btnC btn-successC'> Iniciar Sesión </button>
              &nbsp;&nbsp;
              <Link to='/' className='btnC btn-dangerC'>Cancelar</Link>
            </form>
            <a href="/registro" class="login-linkC">¿No tienes una cuenta? Regístrate</a>
          </div>
        </div>
      </div>
    </div>
  )
}
