import React, {useState, useContext} from 'react'
import Api from '../../db/api'
import '../../style/Produtos/cabecalho.scss'
import {ContextApi} from "../../context/context"
import swal from 'sweetalert';

//Inputs dos produtos que estao no menu de cardapio
const ProdutosCabecalho = () => {
  const {loadCardapio, idAuth} = useContext(ContextApi) 
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
 

  function novoProduto(){
    if(nome && preco){
      Api.post('/cardapio', {
        nome: nome,
        preco: preco,
        user_id: idAuth
    }).then(loadCardapio)
    swal("Ok!", "Item adicionado com sucesso!", "success");
    setNome("")
    setPreco("")
     }else{
      swal("Error!", "Preencha os campos!", "warning");
     }}


  return (
    <div className='produtos'>
      <div className="add">
      <h3>Adicionar produto ao cardapio</h3>

      <input type="text" id="produto"  name="produto"  placeholder='Nome do produto'
      value={nome} onChange={(e)=> setNome (e.target.value)} />

      <input type="number" id="preco"  name="preco" placeholder='Preço do produto'
       value={preco} onChange={(e)=> setPreco (e.target.value)} />

      <button className='btn btn-success' onClick={novoProduto}>Salvar Produto no cardapio</button>
      </div>
    </div>
  )
}

export default ProdutosCabecalho