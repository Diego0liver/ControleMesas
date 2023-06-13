import React, {useEffect} from 'react'
import API from '../db/api'
import {useParams, useNavigate} from "react-router-dom";
import Bar from '../assets/img/bar.jpg'
import '../style/Produtos/Excluir.scss'


const Excluir = () => {
    const { id2, id, subTotal, preco } = useParams()
    let history = useNavigate()
    const baseURL = '/mesa/'

    let precoMesa = parseInt(preco)
    let somarComTaxa = precoMesa * 0.1.toFixed(2)
    let totalIdMesa = parseFloat(somarComTaxa) + precoMesa
    let totalExcluido = subTotal - totalIdMesa

      function voltar(){
        history('/mesa/'+id)
    }
    const excluiPost = ()=> {
      API.delete(`/cardapioMesa/${id}/${id2}`)
       //Edita o status da mesa pro total
       API.put(`${baseURL + id}`, {
        estatus: totalExcluido.toFixed(2)
       })
     .then((response) => {
    console.log(response.data);
      });
     // 
      voltar()
   }

    //funcao disparado com o botao do teclado
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        excluiPost()
      }if(event.key === 'Escape'){
        voltar()
      }
    };
  
    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
   //fim da funcao

  return (
    <div className='Exclui'>
       <div className='cards'>
        <img src={Bar} alt="bar" /><br/>
        <h3>Deseja excluir?</h3>
        <button className='btn btn-success m-3' onClick={ () => {handleKeyDown && excluiPost(id, id2)}} >Sim</button>
        <button className='btn btn-danger m-3' onClick={ handleKeyDown && voltar} >Nao</button>
        <div className='avisos'>
            <div className='enter'>
               * Aperta ENTER para confirmar!
            </div>

            <div className='cancelar'>
               * Aperta ESC para cancelar!
            </div>
        </div>
        </div> 
    </div>
  )
}

export default Excluir