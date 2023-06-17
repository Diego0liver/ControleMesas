import React from 'react'
import {useParams} from "react-router-dom";
import API from '../db/api'
import { useNavigate } from 'react-router-dom';
import Bar from '../assets/img/bar.jpg'
import MenuLateral from '../components/menu/MenuLateral'
import '../style/Ajuste/Reserva.scss'
import swal from 'sweetalert';

//Rota para confirmar a reserva da mesa pegando o ID da mesma
const ReservaId = () => {
  let nav = useNavigate()
    const { id, numero } = useParams()
    let reserva = 'Reservado'

    //Atualiza o status da mesa para RESERVADO
    function updatePost() {
        const baseURL = '/mesa/'
        API.put(`${baseURL + id}`, {
          estatus: reserva
          })
          .then((response) => {
           console.log(response.data);
           swal("Ok!", "Mesa Reservada com sucesso!", "success");
             nav('/')
          })};

  return (
    <>
    <MenuLateral/>
    <div className='Reserva '>
      <h1>Reservar mesa {numero}</h1>
      <img src={Bar} alt="" /><br/>
      <p>Deseja reservar a mesa {numero}?</p>
    <button className='btn btn-success' onClick={updatePost} > Reservar</button>
    </div>
    </> )
}

export default ReservaId