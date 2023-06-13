import {ContextApi} from "../../context/context"
import React, { useContext, useEffect, useState } from 'react'
import {useParams} from "react-router-dom";


const ProdutosDaMesa = (props) => {
    const {loadMesa, produtos} = useContext(ContextApi) 
    const { id } = useParams()

    const [busca, setBusca] = useState('')

    useEffect(()=>{
      loadMesa()
    },[]);
  
  
const filterItem = produtos.filter((produto)=>produto.nome.toLocaleLowerCase().includes
( busca.toLocaleLowerCase()))
     
  return (
    <div>
         <h3>Produtos do carpadio</h3>
         <form>
          <label style={{ color:"black" }}>Procurar produto: </label>
         <input
         className="m-2"
         style={{ backgroundColor: '#242424', border:'2px #198754 solid', padding:'5px', borderRadius:'6px' }}
         placeholder="Digite aqui"
         type="text" 
         value={busca}
         onChange={(e)=>setBusca(e.target.value)} />
         </form>
         <h5 style={{ color:"black" }} >*Esc volta!</h5>
    <table  className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Produto</th>
      <th scope="col">Valor</th>
      <th scope="col">Adicionar</th>
    </tr>
  </thead>
  <tbody>
  {filterItem.length > 0 ?
  filterItem.map((posts)=>{
            return <tr key={posts.id}>
               <td>{posts.nome}</td>
               <td>R${posts.preco}</td>
               <td> <a href={ id + '/cardapio/' + posts.id +  '/' + posts.preco + '/' + props.total + '/' + posts.nome + '/cardapio'}>Adicionar</a></td>
            </tr>
        }): <h2 style={{ color:'black' }}>Esta sem produtos va ate AJUSTE depois CARDAPIO para adicionar produtos</h2>}
  </tbody>
</table>

        
    </div>
  )
}

export default ProdutosDaMesa