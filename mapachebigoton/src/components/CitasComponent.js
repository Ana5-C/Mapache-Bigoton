import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CitaService from '../services/CitaService';
import ServicioService from '../services/ServicioService';
import BarberoService from '../services/BarberoService';

export const AgendarCitaComponent = () => {
    const [descripcion, setDescripcion] = useState('');
    const [nombreBar, setNombreBar] = useState('');
    const [costo, setCosto] = useState('');
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [error, setError] = useState(null);
    const [servicios, setServicios] = useState([]);
    const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
    const [barberos, setBarberos] = useState([]);
    const [barberoSeleccionado, setBarberoSeleccionado] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        ServicioService.findAll()
            .then(response => {
                console.log('Servicios obtenidos:', response.data);
                setServicios(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los servicios:', error);
            });
    }, []);

    useEffect(() => {
        BarberoService.findAll()
            .then(response => {
                console.log('Barberos obtenidos:', response.data);
                setBarberos(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los barberos:', error);
            });
    }, []);

    const handleDescripcionChange = (e) => {
        const servicioSeleccionado = e.target.value;
        const servicio = servicios.find((s) => s.tiposervico === servicioSeleccionado);
        setDescripcion(servicio.tiposervico);
        setServicioSeleccionado(servicioSeleccionado);
        setCosto(servicio.precio);
    };

    const handleBarberoChange = (e) => {
        const barberoSeleccionado = e.target.value;
        setNombreBar(barberoSeleccionado);
        const barbero = barberos.find((b) => b.nombre === barberoSeleccionado);
        setBarberoSeleccionado(barbero.nombre);
    };

    const createCita = (e) => {
        e.preventDefault();
        if (!servicioSeleccionado || !costo || !nombre || !telefono || !fecha || !hora || !barberoSeleccionado) {
            setError('Por favor, complete todos los campos obligatorios');
        } else {
            const cita = {
                nombre,
                telefono,
                fecha,
                hora,
                servicio: {
                    idServicio: servicioSeleccionado.idServicio
                },
                barbero: {
                    idBarbero: barberoSeleccionado.idBarbero
                },
                costo: costo, // Include the costo field
                descripcion: descripcion, // Include the descripcion field
                nombreBar: nombreBar // Include the nombreBar field
            };
            CitaService.create(cita)
                .then((response) => {
                    console.log(response.data);
                    navigate('/cita');
                })
                .catch((error) => {
                    console.error('Error al registrar la cita:', error);
                    setError('Error al registrar la cita');
                });
        }
    };

   /* const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const minDate = yesterday.toISOString().split('T')[0];*/

    return (
        <div>
            <div className='containerCitas'>
                <div className='headerCitas'>
                    <div className='nav-menuCitas'>
                        <nav>
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/servicios">Servicios</Link></li>
                                <li><Link to="/citas">Citas</Link></li>
                                <li><Link to="/ubicacion">Ubicación</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <button className='logoutCitas' onClick={() => navigate('/')}>Cerrar Sesión</button>
                </div>
                <div className='image-containerCitas' />
                <h1>Agendar cita</h1>
                <div className='form-containerCitas'>
                    <form onSubmit={createCita}>
                        <div className='form-columnCitas'>
                            <div className='form-groupCitas'>
                                <label htmlFor='servicio'>Descripción:</label>
                                <select id='servicio' value={servicioSeleccionado} onChange={handleDescripcionChange}>
                                    <option value='Seleccion'>Seleccione un servicio</option>
                                    {servicios.map((servicio) => (
                                        <option key={servicio.idServicio} value={servicio.tiposervico}>
                                            {servicio.tiposervico}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='form-groupCitas'>
                                <label htmlFor='cost'>Costo:</label>
                                <input
                                    type='text'
                                    id='cost'
                                    placeholder='$'
                                    value={costo}
                                    readOnly
                                />
                            </div>
                            <div className='form-groupCitas'>
                                <label htmlFor='barbero'>Barbero:</label>
                                <select id='barbero' value={barberoSeleccionado} onChange={handleBarberoChange}>
                                    <option value=''>Seleccione un barbero</option>
                                    {barberos.map(barbero => (
                                        <option key={barbero.idBarbero} value={barbero.nombre}>
                                            {barbero.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='form-columnCitas'>
                            <div className='form-groupCitas'>
                                <label htmlFor='nombre'>Nombre:</label>
                                <input
                                    type='text'
                                    id='nombre'
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='form-groupCitas'>
                                <label htmlFor='telefono'>Teléfono:</label>
                                <input
                                    type='tel'
                                    id='telefono'
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    maxLength={10}
                                    required
                                />
                            </div>
                            <div className='form-groupCitas'>
                                <label htmlFor='date'>Fecha:</label>
                                <input
                                    type='date'
                                    id='date'
                                    value={fecha}
                                    onChange={(e) => setFecha(e.target.value)}
                                    //min={minDate}
                                    min={new Date().toISOString().split('T')[0]}
                                    required
                                />
                            </div>
                            <div className='form-groupCitas'>
                                <label htmlFor='time'>Hora:</label>
                                <input
                                    type='time'
                                    id='time'
                                    value={hora}
                                    onChange={(e) => setHora(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        {error && <div className='alert'>{error}</div>}
                        <div className='btn-container'>
                            <button type='submit' className='btncita btn-successCita'>Guardar</button>
                            <Link to='/' className='btncita btn-dangerCita'>Cancelar</Link>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};


export default AgendarCitaComponent;