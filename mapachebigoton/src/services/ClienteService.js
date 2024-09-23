import axios from "axios";
const URL_BASE = "http://localhost:8080/cliente";
class ClienteService{
    findAll(){
        return axios.get(URL_BASE);
    }

    create(cliente){
        return axios.post(URL_BASE, cliente)
    }

    findByID(idCliente){
        return axios.get(URL_BASE+'/'+idCliente);
    }

    update(idCliente, cliente){
        return axios.put(URL_BASE+'/'+idCliente,cliente);
        
    }
    login(nombreUsuario, contrasena) {
        return axios.post(`${URL_BASE}/login`, { nombreUsuario, contrasena });
      }
}

export default new ClienteService();