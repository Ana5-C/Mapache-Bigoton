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
            <div className='containerRegistro'>
                <div className='image-containerRegistro' />
                <div className='form-containerRegistro'>
                    <h2>Registrarse</h2>
                    <div className='card-bodyRegistro'>
                        <form>
                            <div className='form-groupRegistro'>
                                <label className='form-labelRegistro'>Nombre</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese el nombre'
                                    name='nombre'
                                    className='form-controlRegistro'
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>
                            <div className='form-groupRegistro'>
                                <label className='form-labelRegistro'>Telefono</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese su número de telefono'
                                    name='telefono'
                                    className='form-controlRegistro'
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    maxLength={10}
                                />
                            </div>
                            <div className='form-groupRegistro'>
                                <label className='form-labelRegistro'>Nombre de usuario</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese el nombre de usuario'
                                    name='nombreUsuario'
                                    className='form-controlRegistro'
                                    value={nombreUsuario}
                                    onChange={(e) => setNombreUsuario(e.target.value)}
                                />
                            </div>
                            <div className='form-groupRegistro'>
                                <label className='form-labelRegistro'>Contraseña</label>
                                <input
                                    type='password'
                                    placeholder='Ingrese la contraseña'
                                    name='contraseña'
                                    className='form-controlRegistro'
                                    value={contrasena}
                                    onChange={(e) => setContrasena(e.target.value)}
                                />
                            </div>
                            {error && (
                                <div className='alert alert-dangerRegistro'>
                                    {error}
                                </div>
                            )}
                            <button className='btnRegistro btn-successRegistro' onClick={(e) => createCliente(e)}>Registrar</button>
                            &nbsp;&nbsp;
                            <Link to='/' className='btnRegistro btn-dangerRegistro'>Cancelar</Link>
                        </form>
                        <a href="/iniciosesion" class="login-linkRegistro">¿Ya tienes una cuenta? Inicia Sesión</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistroComponent;