import React,{useState, useEffect} from 'react';
import MenuLateral from '../components/menu/MenuLateral'
import Api from '../db/api'

const Reserva = () => {
    const [mesas, setMesas] = useState([]);
    const idAuth = localStorage.getItem("id")
    const loadMesas = async () => {
        const result = await Api.get(`/${idAuth}/mesa`)
        setMesas(result.data)

      }

      useEffect(()=>{
        loadMesas()
      },[]);


  return (
    <>
    <MenuLateral />
    <div className='produtos container'>
      <h1>Reserva de mesas</h1>
    <table  className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Mesa</th>
      <th scope="col">Reserva</th>
    </tr>
  </thead>
  <tbody>
  {mesas.map((posts)=>{
            return <tr key={posts.id}>
               <td>Mesa {posts.numero}</td>
               <td><a href={'/reserva/' + posts.id + '/' + posts.numero + '/reserva' }>
                <button className='btn btn-success m-0' >Reservar</button></a></td>
            </tr>
        })}
  </tbody>
</table>
    </div>
    </>
  )
}

export default Reserva