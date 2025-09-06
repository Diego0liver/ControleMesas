import axios from "axios";

const url_api = import.meta.env.VITE_API_URL;

//Rota de login e logout da API feita com LARAVEL
 const apiLogin = axios.create({
    baseURL: url_api + '/auth/',
  });

  export default apiLogin