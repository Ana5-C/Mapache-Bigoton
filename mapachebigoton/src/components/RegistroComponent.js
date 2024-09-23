import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ClienteService from '../services/ClienteService';

export const RegistroComponent = () => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const createCliente = (e) => {
        e.preventDefault();
        if (!nombre || !telefono || !nombreUsuario || !contrasena) {
            setError('Por favor, complete todos los campos obligatorios');
        } else {
            const cliente = { nombre, telefono, nombreUsuario, contrasena };
            ClienteService.create(cliente).then((response) => {
                console.log(response.data);
                navigate('/iniciosesion');
            }).catch(error => {
                console.log(error);
                setError('Error al registrar el cliente');
            });
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='image-container' />
                <div className='form-container'>
                    <h2>Registrarse</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label className='form-label'>Nombre</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese el nombre'
                                    name='nombre'
                                    className='form-control'
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Telefono</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese su número de telefono'
                                    name='telefono'
                                    className='form-control'
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Nombre de usuario</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese el nombre de usuario'
                                    name='nombreUsuario'
                                    className='form-control'
                                    value={nombreUsuario}
                                    onChange={(e) => setNombreUsuario(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Contraseña</label>
                                <input
                                    type='password'
                                    placeholder='Ingrese la contraseña'
                                    name='contraseña'
                                    className='form-control'
                                    value={contrasena}
                                    onChange={(e) => setContrasena(e.target.value)}
                                />
                            </div>
                            {error && (
                                <div className='alert alert-danger'>
                                    {error}
                                </div>
                            )}
                            <button className='btn btn-success' onClick={(e) => createCliente(e)}>Registrar</button>
                            &nbsp;&nbsp;
                            <Link to='/' className='btn btn-danger'>Cancelar</Link>
                        </form>
                        <a href="/iniciosesion" class="login-link">¿Ya tienes una cuenta? Inicia Sesión</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistroComponent;