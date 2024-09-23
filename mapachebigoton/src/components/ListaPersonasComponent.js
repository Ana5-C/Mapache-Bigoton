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
        <div className='containerInicio'>
          <div className='imag-container' />
          <h2 className='text-center'>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <label>Nombre de usuario:</label>
            <input
              type='text'
              placeholder='Ingrese el nombre de usuario'
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)} />
            <br />
            <label>Contraseña:</label>
            <input
              type='password'
              placeholder='Ingrese la contraseña'
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)} />
            <button className='btn btn-primary'>
              Iniciar Sesión
            </button>
            <Link to='/' className='btn btn-danger'>Cancelar</Link>
            <br />
            {(!nombreUsuario || !contrasena) && (
              <div style={{ color: 'red' }}>
                Por favor, complete todos los campos obligatorios
              </div>
            )}
            {error && (
              <div style={{ color: 'red' }}>
                {error}
              </div>
            )}
            <a href="/registro" class="login-link">¿No tienes una cuenta? Regístrate</a>
          </form>
        </div>
      )
}