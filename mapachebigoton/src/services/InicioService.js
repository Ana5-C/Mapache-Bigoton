import axios from "axios";
const URL_BASE = "http://localhost:8080/inicio";
class InicioService {
    findAll() {
        return axios.get(URL_BASE);
    }
    create(cita) {
        return axios.post(URL_BASE, cita);
    }
}

export default new InicioService();