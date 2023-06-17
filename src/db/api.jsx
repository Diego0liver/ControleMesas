import axios from "axios";
const token = localStorage.getItem("token")

  const api = axios.create({
    baseURL: 'https://apicontrolemesa-production.up.railway.app/api/users',
    headers: {
      Authorization: `Bearer ${token}`,
      'Cache-Control': 'no-cache'
    }
  });

  export default api