import axios from "axios";
const URL_BASE="http://localhost:8080/ubicacion";

class ServiciosService{
    findAll(){
        return axios.get(URL_BASE);
    }
}

export default new ServiciosService();