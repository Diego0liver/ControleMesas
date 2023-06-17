import React from 'react'
import Cardapio from '../assets/img/cardapio.png'
import Mesaa from '../assets/img/mesa.png'
import Garcon from '../assets/img/gracon.png'
import Reserve from '../assets/img/reserve.png'
import {useNavigate} from "react-router-dom";
import '../style/Ajuste/Menu.scss'
import MenuLateral from '../components/menu/MenuLateral'

//Menu de Ajustes
const Ajuste = () => {
   let nav = useNavigate()

  function cardapio(){
      nav('/produtos')
  }
  function mesas(){
   nav('/editemesa')
  }
  function reserva(){
     nav('/reserva')
  }
  function home(){
   nav('/')
  }

  return (<>
   <MenuLateral />
   <h1>Menu</h1>
    <div className='Menu'>
     <div>
        <div className='card'>
             <img src={Cardapio} alt="cardapio" />
             <h3>Cardapio</h3>
             <p>Edite o cardapio com os pratos <br/> das casa</p>
             <button onClick={cardapio} className='btn btn-success'>Cardapio</button>
        </div>

        <div  className='card'>
             <img src={Mesaa} alt="mesas" />
             <h3>Mesas</h3>
             <p>Edite a quantidade de mesas</p>
             <button onClick={mesas} className='btn btn-success'>Mesas</button>
        </div>
     </div>
     <div>
        <div  className='card'>
           <img src={Reserve} alt="reserva" />
            <h3>Reserva</h3>
             <p>Reserva mesas para clientes</p>
             <button onClick={reserva} className='btn btn-success'>Reserva</button>
        </div>

        <div  className='card'>
             <img src={Garcon} alt="garcon" />
             <h3>Controle de mesas</h3>
             <p>Controle de mesas</p>
             <button onClick={home} className='btn btn-success'>Home</button>
        </div>
    </div>
    </div>
    </>)
}

export default Ajuste