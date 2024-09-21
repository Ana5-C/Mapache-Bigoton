import React, {useState} from 'react'

export default function ListaPersonasComponents(){
    const [clientes, setClientes] = useState([]);

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
                                    <td>{cliente.contraseña}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}