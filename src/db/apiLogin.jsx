import axios from "axios";



 const apiLogin = axios.create({
    baseURL: `https://apicontrolemesa-production.up.railway.app/api/auth/`,
  });

  export default apiLogin