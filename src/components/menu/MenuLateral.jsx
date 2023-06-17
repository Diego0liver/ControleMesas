import React from 'react'
import '../../style/Ajuste/MenuLateral.scss'

//Menu lateral que fica no Ajuste
const MenuLateral = () => {
  return (
    <div className='MenuLateral'>
        <ul>
            <a href="/"><button className='btn btn-dark' >Voltar</button></a>
            <a href="/ajuste"><li>Menu</li></a>
            <a href="/produtos"><li>Cardapio</li></a>
            <a href="/editemesa"><li>Mesas</li></a>
            <a href="/reserva"><li>Reservas</li></a>
            <a href="/"><li>Home</li></a>
        </ul>
    </div>
  )
}

export default MenuLateral