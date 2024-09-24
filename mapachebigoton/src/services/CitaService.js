import axios from "axios";

// URL base de la API para las citas
const URL_BASE = "http://localhost:8080/citas";

class CitaService {
    // Obtener todas las citas
    findAll() {
        return axios.get(URL_BASE);
    }

    // Crear una nueva cita
    create(cita) {
        return axios.post(URL_BASE, cita);
    }

    // Buscar una cita por ID
    findByID(idCita) {
        return axios.get(`${URL_BASE}/${idCita}`);
    }

    // Actualizar una cita por ID
    update(idCita, cita) {
        return axios.put(`${URL_BASE}/${idCita}`, cita);
    }

    // Eliminar una cita por ID
    delete(idCita) {
        return axios.delete(`${URL_BASE}/${idCita}`);
    }
}

export default new CitaService();
