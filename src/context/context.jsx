import { createContext, useState, useEffect  } from "react";
import APILogin from "../db/apiLogin";
import {useNavigate} from "react-router-dom";
import swal from 'sweetalert';
import API from '../db/api'

export const ContextApi = createContext();

export function ContextApiProvider({children}){
  const idAuth = localStorage.getItem("id")
    const [produtos, setProdutos] = useState([]);
    const [mesas, setMesas] = useState([]);
    const [user, setUser] = useState(null)
    let history = useNavigate()
     
      //Token e ID do usuario salvo no localStorage
      useEffect(()=>{
        const token = localStorage.getItem("token")
        idAuth
        setUser(token)
        setUser(idAuth)
   },[])
     //

     //Get das mesas
     const loadMesas = async () => {
      try {
        const response = await API.get(`/${idAuth}/mesa`);
        setMesas(response.data);
      } catch (error) {
        console.error('Erro ao carregar as mesas:', error);
      }
    };
     //

    //Get dos produtos do cardapio
   const loadCardapio = async () => {
    const result = await API.get(`/${idAuth}/cardapio`)
    setProdutos(result.data)
  }
   //

   //Funcao que faz o login no sistema
   const createAPI =  (email, password)=>{
    return APILogin.post("login", {email, password})}

    const logi = async (email, password)=>{
    try {
        const res = await createAPI(email, password)
        const dados = res.data
        const idAuth = res.data.id
        console.log(idAuth)
        const token = res.data.token
            if(token !== undefined){
              APILogin.defaults.headers.Authorization = `Bearer ${token}`
            localStorage.setItem("token", token)
            localStorage.setItem("id", idAuth)
            console.log(token)
            setUser(dados)
            history('/')
          }}
          catch (error) {
            if (error.response && error.response.status === 401 || 500) {
              swal("Error no login!", "Login nao autorizado!", "error");
            }}}
//

//Funcao que sai do sistema excluindo o ID e o Token do localStorage
const logout=()=>{
  setUser(null)
  localStorage.removeItem("id")
  localStorage.removeItem("token")
  APILogin.defaults.headers.Authorization = null
  console.log('logout')
}
//
    
    return(
        <ContextApi.Provider value={{ autentificado:!!user, user, logi, loadCardapio, produtos, 
        setProdutos, logout, idAuth, mesas, loadMesas}}>
              {children}
        </ContextApi.Provider>)
}