import React, { useContext, useEffect } from 'react'
import ProdutosCabecalho from '../components/produtos/ProdutosCabecalho'
import {ContextApi} from "../context/context"
import '../style/Produtos/produtos.scss'
import Api from '../db/api'
import MenuLateral from '../components/menu/MenuLateral'
import swal from 'sweetalert';

//Rota dos produtos que estao no cardapio
export const Produtos = () => {
  const {loadCardapio, produtos} = useContext(ContextApi) 

      useEffect(()=>{
        loadCardapio()
      },[]);

      const excluiItem = async (id)=> {
        await Api.delete(`/cardapio/${id}`)
        loadCardapio()
        swal("Ok!", "Item excluido com sucesso!", "success");
      }

  return (<>
     <MenuLateral />
    <div className='produtos container'>
      <h1>Cardapio</h1>
    <ProdutosCabecalho />
      <h3>Produtos do carpadio</h3>
    <table  className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Produto</th>
      <th scope="col">Valor</th>
      <th scope="col">Excluir</th>
    </tr>
  </thead>
  <tbody>
  {produtos.length > 0 ?
  produtos.map((posts)=>{
            return <tr key={posts.id}>
               <td>{posts.nome}</td>
               <td>R${posts.preco}</td>
               <td><button onClick={() => {excluiItem(posts.id)}} className='btn btn-danger m-0'>Excluir</button></td>
            </tr>
        }): <h1>Sem produtos</h1>}
  </tbody>
</table>
    </div></>)}
export default Produtos