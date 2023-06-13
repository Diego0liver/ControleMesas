import React,{useContext} from 'react'
import Mesas from '../components/home/Mesas'
import moment from 'moment';
import 'moment-timezone';
import '../style/Home/TopoHome.scss'
import Sair from '../assets/img/sair.png'
import Conf from '../assets/img/conf.png'
import Logo from '../assets/img/logo.png'
import  {ContextApi}  from '../context/context';
import { useNavigate } from 'react-router-dom';


function getCurrentTime() {
  return moment().tz('America/Sao_Paulo').format('HH:mm');
}
function getCurrentDate() {
  return moment().tz('America/Sao_Paulo').format('DD/MM');
}

export const Home = () => {
  const { logout } = useContext(ContextApi)
  const nav = useNavigate()
  const currentTime = getCurrentTime();
  const currentDate = getCurrentDate();

  function ajuste(){
          nav('/ajuste')
  }


  return (
    <div className='Home'>
      <div className='homeLogo'>
      <img className='logo' src={Logo} alt="logo" />
      <h2>Controle de mesas</h2>
      </div>
     <div className='homeTopo'>
          <p className='m-3'>Dia {currentDate} <br/> {currentTime} Hrs</p>
          <div className='btnMenu'>
            <button onClick={ajuste}><img src={Conf} alt="conf"></img><p>Ajuste</p></button>
            <button onClick={logout}><img src={Sair} alt="sair"></img><p>Sair</p></button>
          </div>
      </div>
      <Mesas />
    </div>
  )
}
