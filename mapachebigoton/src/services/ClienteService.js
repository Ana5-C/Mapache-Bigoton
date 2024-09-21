import axios from "axios";
const URL_BASE = "http://localhost:8080/cliente";
class ClienteService{
    findAll(){
        return axios.get(URL_BASE);
    }
}

export default new ClienteService();