import axios from "axios";
const token = localStorage.getItem("token");

const url_api = import.meta.env.VITE_API_URL;

  const api = axios.create({
    baseURL: url_api + '/users',
    headers: {
      Authorization: `Bearer ${token}`,
      'Cache-Control': 'no-cache'
    }
  });

  export default api