import React, {useState, useContext} from 'react'
import Api from '../../db/api'

import '../../style/Produtos/cabecalho.scss'
import {ContextApi} from "../../context/context"

const ProdutosCabecalho = () => {
  const {loadMesa} = useContext(ContextApi) 
  const idAuth = localStorage.getItem("id")

  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
 

  const URL = '/cardapio'

  function novoProduto(){
    if(nome && preco){
      Api.post(URL, {
        nome: nome,
        preco: preco,
        user_id: idAuth
    }).then(loadMesa)
    setNome("")
    setPreco("")
}else{
 alert('algo deu arrado')
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