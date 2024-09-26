import axios from "axios";
const URL_BASE = "http://localhost:8080/cita";

class CitaService {
    // Obtener todas las citas
    findAll() {
        return axios.get(URL_BASE);
    }
    create(cita) {
        return axios.post(URL_BASE, cita);
    }

}

export default new CitaService();
