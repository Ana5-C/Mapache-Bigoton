import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ClienteService from '../services/ClienteService';

export const RegistroComponent = () => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const navigate = useNavigate();

    const createCliente = (e) => {
        e.preventDefault();
        const cliente = { nombre, telefono, nombreUsuario, contrasena };
        ClienteService.create(cliente).then((response) => {
            console.log(response.data);
            navigate('/clientes');
        }).catch(error => {
            console.log(error)
        });
    }

    return (
        <div>
            <div className='container'>
                <div className='image-container'>
                    <img src='https://www.ngenespanol.com/wp-content/uploads/2024/04/estos-son-algunos-de-los-datos-mas-curiosos-sobre-los-mapaches-1280x720.jpg' alt='Descripción de la imagen' />
                </div>
                <div className='form-container'>
                    <h2>Registro</h2>
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
                                    placeholder='Ingrese el nombre'
                                    name='nombre'
                                    className='form-control'
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Nombre de usuario</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese el nombre'
                                    name='nombre'
                                    className='form-control'
                                    value={nombreUsuario}
                                    onChange={(e) => setNombreUsuario(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Contraseña</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese el nombre'
                                    name='nombre'
                                    className='form-control'
                                    value={contrasena}
                                    onChange={(e) => setContrasena(e.target.value)}
                                />
                            </div>
                            <button className='btn btn-success' onClick={(e) => createCliente(e)}>Guardar</button>
                            &nbsp;&nbsp;
                            <Link to='/clientes' className='btn btn-danger'>Cancelar</Link>
                        </form>
                        <a href="InicioSesion.html" class="login-link">¿Ya tienes una cuenta? Inicia Sesión</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistroComponent;