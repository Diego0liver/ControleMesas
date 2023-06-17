import React from 'react'
import Mesa from '../../assets/img/mesa.png'
import '../../style/Home/MesaVazia.scss'
import Aviso from '../../assets/img/aviso.png'


//Caso nao tenha nenhuma mesa registrada no sistema
const MesaVazia = () => {
    const string = ' Va ate ajuste(Direita superior) -> Mesas -> Adicionar nova mesa'


  return (
    <div className='MesaVazia'>
        <h2>Nao temos mesas cadastradas</h2>
         {string} <img src={Mesa} alt="mesa" /><br />
         <div className='aviso'>
          <div className='avisoConteiner'>
            <img src={Aviso} alt="aviso" />
          </div>
          Caso nao consiga Adicionar, ou ja tenha mesa cadastrada,
          alguarde alguns minutos
         que estamos com problema no servidor.</div>
    </div>
  )
}

export default MesaVazia