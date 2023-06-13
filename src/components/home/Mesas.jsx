import React, { useState, useEffect, useContext } from 'react'
import {Link} from "react-router-dom";
import '../../style/Home/Mesa.scss'
import '../../style/Home/Nav.scss'
import Api from '../../db/api'
import MesaVazia from './MesaVazia';
import  {ContextApi}  from '../../context/context';



const Mesas = () => {
  const {  } = useContext(ContextApi)
    const [mesas, setMesas] = useState([]);
    const [busca, setBusca] = useState('')
    const idAuth = localStorage.getItem("id")
   const loadMesas = async () => {
    try {
      const response = await Api.get(`/${idAuth}/mesa`);
      setMesas(response.data);
    } catch (error) {
      console.error('Erro ao carregar as mesas:', error);
    }
  };

      useEffect(()=>{
        loadMesas()
      },[]);
     //funcao que busca mesa
      const filterMesa = mesas.filter((mesa)=>mesa.numero.includes(busca))
     // 

  return (
    <>
            <div  className="input">
              <input type="number"
              value={busca} 
              className="form-control"
              placeholder='Buscar mesa'
              onChange={(e)=>setBusca(e.target.value)}/>
                <div className='statusMesa'>
                  <p className='livre'>Livre</p>
                  <p className='ocupado'>Ocupada</p>
                  <p className='reserva'>Reservada</p>
                </div>
            </div>
        
    <div className='Mesa'>
    {filterMesa.length > 0 ?
    filterMesa.map((posts)=>{
      return(
        <div key={posts.id} className={`${posts.estatus === '0.00' ? 'mesaId' : posts.estatus === 'Reservado' ? 'mesaIdReservada' : 'mesaIdOcupada'}`}>
          <Link to={{ pathname: `/mesa/${posts.id}` }}>
        <ul>  
          <li>Mesa {posts.numero}</li>
          <li>Total R$ - {posts.estatus}</li>
        </ul></Link>
        </div>
      )
    }): <MesaVazia />}

    </div>
    </>
  )
}

export default Mesas