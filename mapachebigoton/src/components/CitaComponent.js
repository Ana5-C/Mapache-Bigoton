import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CitaService from '../services/CitaService'; // Importa el servicio de citas

export const AgendarCitaComponent = () => {
    const [descripcion, setDescripcion] = useState('Corte');
    const [costo, setCosto] = useState('100'); // Inicializa el costo para 'Corte'
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('3:00');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Objeto que mapea descripciones a costos
    const costos = {
        'Corte': '100',
        'Tratamiento Facial': '150',
        'Coloración': '200',
    };

    const handleDescripcionChange = (e) => {
        const nuevaDescripcion = e.target.value;
        setDescripcion(nuevaDescripcion);
        setCosto(costos[nuevaDescripcion]); // Actualiza el costo según la descripción
    };

    const createCita = (e) => {
        e.preventDefault();
        if (!descripcion || !costo || !nombre || !telefono || !fecha || !hora) {
            setError('Por favor, complete todos los campos obligatorios');
        } else {
            const cita = { descripcion, costo, nombre, telefono, fecha, hora };
            CitaService.create(cita)
                .then((response) => {
                    console.log(response.data);
                    navigate('/'); // Redirige al inicio u otra página
                })
                .catch((error) => {
                    console.log(error);
                    setError('Error al registrar la cita');
                });
        }
    };

    return (
        <div>
            <div className='container'>
                <div className='header'>
                    <div className='nav-menu'>
                        <Link to='/'>Inicio</Link>
                        <Link to='/servicios'>Servicios</Link>
                        <Link to='/citas'>Citas</Link>
                        <Link to='/ubicacion'>Ubicación</Link>
                    </div>
                    <button className='logout' onClick={() => navigate('/')}>Cerrar Sesión</button>
                </div>
                <img src='/api/placeholder/100/100' alt='Mascota' className='mascot' />
                <h1>Agendar cita</h1>
                <div className='form-container'>
                    <form>
                        <div className='form-column'>
                            <div className='form-group'>
                                <label htmlFor='description'>Descripción:</label>
                                <select id='description' value={descripcion} onChange={handleDescripcionChange}>
                                    <option value='Corte'>Corte</option>
                                    <option value='Tratamiento Facial'>Tratamiento Facial</option>
                                    <option value='Coloración'>Coloración</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='cost'>Costo:</label>
                                <input
                                    type='text'
                                    id='cost'
                                    placeholder='$'
                                    value={costo}
                                    readOnly // Campo de solo lectura para evitar modificaciones manuales
                                />
                            </div>
                        </div>
                        <div className='form-column'>
                            <div className='form-group'>
                                <label htmlFor='name'>Nombre:</label>
                                <input
                                    type='text'
                                    id='name'
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='phone'>Teléfono:</label>
                                <input
                                    type='tel'
                                    id='phone'
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='date'>Fecha:</label>
                                <input
                                    type='text'
                                    id='date'
                                    placeholder='dd/mm/aa'
                                    value={fecha}
                                    onChange={(e) => setFecha(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='time'>Hora:</label>
                                <input
                                    type='text'
                                    id='time'
                                    value={hora}
                                    onChange={(e) => setHora(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        {error && (
                            <div className='alert alert-danger'>
                                {error}
                            </div>
                        )}
                        <button className='btn btn-success' onClick={createCita}>Guardar</button>
                        &nbsp;&nbsp;
                        <Link to='/' className='btn btn-danger'>Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AgendarCitaComponent;