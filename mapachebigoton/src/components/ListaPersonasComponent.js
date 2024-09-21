import React, {useEffect, useState} from 'react'
import ClienteService from '../services/ClienteService';

export default function ListaPersonasComponents(){
    const [clientes, setClientes] = useState([]);

    useEffect(() =>{
        ClienteService.findAll().then(response =>{
            setClientes(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    },[])

    return (
        <div className='container'>
            <h2 className='text-center'>Clientes Registrados</h2>
            <table className='table table-borderd table-striped'>
                <thead>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Nombre Usuario</th>
                    <th>Contraseña</th>
                </thead>
                <tbody>
                    {
                        clientes.map(
                            cliente =>
                                <tr key={cliente.idCliente}>
                                    <td>{cliente.idCliente}</td>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.telefono}</td>
                                    <td>{cliente.nombreUsuario}</td>
                                    <td>{cliente.contrasena}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}