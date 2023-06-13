import React,{useState, useEffect} from 'react';
import MenuLateral from '../components/menu/MenuLateral'
import Api from '../db/api'


const EditeMesa = () => {

    const [mesas, setMesas] = useState([]);
    const [numero, setNumero] = useState('')
    const idAuth = localStorage.getItem("id")
    const loadMesas = async () => {
        const result = await Api.get(`/${idAuth}/mesa`)
        setMesas(result.data)
      }
      useEffect(()=>{
        loadMesas()
      },[]);
      const URL = '/mesa'
      function novaMesa(){
        if(numero){
          Api.post(URL, {
            numero: numero,
            estatus: '0.00',
            taxa: '0.01',
            user_id: idAuth
        }).then(loadMesas)
        setNumero("")
    }else{
     alert('algo deu arrado')
    }}

    const excluiMesa = async (id)=> {
        await Api.delete(`/mesa/${id}`)
        loadMesas()
      }

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
            </tr>
        })}
  </tbody>
</table>
    </div>
    </>
  )
}

export default EditeMesa