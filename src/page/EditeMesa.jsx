import React,{useState, useEffect, useContext} from 'react';
import MenuLateral from '../components/menu/MenuLateral'
import Api from '../db/api'
import {ContextApi} from "../context/context"
import swal from 'sweetalert';

//Rota que edita as mesas (adiciona nova mesa e exclui mesa)
const EditeMesa = () => {
  const {idAuth, mesas, loadMesas} = useContext(ContextApi) 
    const [numero, setNumero] = useState('')

      useEffect(()=>{
        loadMesas()
      },[]);
     
      //funcao que adiciona uma nova mesa
      function novaMesa(){
        if(numero){
          Api.post('/mesa', {
            numero: numero,
            estatus: '0.00',
            taxa: '0.01',
            user_id: idAuth
        }).then(loadMesas)
        swal("Ok!", "Mesa adicionado com sucesso!", "success");
        setNumero("")
        }else{
         swal("Error!", "Preencha os campos!", "warning");
        }}
     //

     //funcao que exclui uma mesa pelo ID
    const excluiMesa = async (id)=> {
        await Api.delete(`/mesa/${id}`)
        loadMesas()
        swal("Ok!", "Mesa excluida com sucesso!", "success");
      }
      //

  return (
    <>
    <MenuLateral />
    <div className='produtos container'>
      <h1>Editar mesas</h1>
     
        <input type="number"
         name="mesaEdit"
          id="mesaEdit" 
          placeholder='Adicionar nova mesa'
          value={numero} onChange={(e)=> setNumero (e.target.value)} />
        <button onClick={novaMesa} className='btn btn-success m-0'>Nova mesa</button>
      
    <table  className="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Mesa</th>
          <th scope="col">Excluir</th>
        </tr>
      </thead>
      <tbody>
      {mesas.map((posts)=>{
        return <tr key={posts.id}>
          <td>Mesa {posts.numero}</td>
          <td><button onClick={() => {excluiMesa(posts.id)}} className='btn btn-danger m-0' >Excluir</button></td>
          </tr>})}
      </tbody>
    </table></div>
    </>)}

export default EditeMesa