import axios from "axios";
const URL_BASE="http://localhost:8080/principal";

class PrincipalService{
    findAll(){
        return axios.get(URL_BASE);
    }
}

export default new PrincipalService();