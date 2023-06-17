import React, {useEffect} from 'react'
import {useParams, useNavigate} from "react-router-dom";
import Bar from '../assets/img/bar.jpg'
import '../style/Produtos/Card.scss'
import API from '../db/api'

//Rota para confirmar o produto adicionado a mesa
const Card = () => {
  //Id e o id da mesa, o Id2 e o id do produto que esta no cardapio
    const { id2, id, nome, total, preco } = useParams()
    let history = useNavigate()
    const baseURL = '/mesa/'
    const URL = '/cardapioMesa'

    //funcao que pega o valor do produto adicionado e soma com o total da mesa junto com a porcantagem do garcom
    let totalMesa = parseInt(total)
    let precoMesa = parseInt(preco)
    let somarTudo = totalMesa + precoMesa
    let somarComTaxa = parseFloat(somarTudo) * 0.1.toFixed(2)
    let totalIdMesa = somarTudo + somarComTaxa
    //


    function novoProduto(){
      //Post da tabela pivo
        API.post(URL, {
            mesas_id: id,
            cardapio_id: id2
        }).then(history('/mesa/'+id))
      //
      //Edita o status da mesa pro total
        API.put(`${baseURL + id}`, {
          estatus: totalIdMesa.toFixed(2)
         })
       .then((response) => {
      console.log(response.data);
        });
       // 
    }

    function voltar(){
        history('/mesa/'+id)
    }
    
        //funcao disparado com o botao do teclado
        const handleKeyDown = (event) => {
          if (event.key === 'Enter') {
           novoProduto()
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
    <div className='Card'>
        <div className='cards'>
        <img src={Bar} alt="bar" /><br/>
        <h3>Deseja adicionar {nome} na mesa?</h3>
        <button className='btn btn-success m-3' onClick={handleKeyDown && novoProduto} >Sim</button>
        <button className='btn btn-danger m-3' onClick={handleKeyDown && voltar} >Nao</button>
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

export default Card