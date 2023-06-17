import axios from "axios";

//Rota de login e logout da API feita com LARAVEL
 const apiLogin = axios.create({
    baseURL: `https://apicontrolemesa-production.up.railway.app/api/auth/`,
  });

  export default apiLogin