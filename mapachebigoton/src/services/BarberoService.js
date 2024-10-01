import axios from "axios";
const URL_BASE = "http://localhost:8080/barbero";
class BarberoService {
    findAll() {
        return axios.get(URL_BASE);
    }
    findById(idBarbero){
        return axios.get(URL_BASE+'/'+idBarbero);
    }
}
export default new BarberoService();