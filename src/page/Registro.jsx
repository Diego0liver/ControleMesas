import React,{useState} from 'react'
import apiLogin from '../db/apiLogin'


//Registra novo usuario ao sistema
const Registro = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const URL = ('registro')
   
  function novoProduto(){
    if(nome && email && password){
        apiLogin.post(URL, {
        name: nome,
        email: email,
        password: password
    }).then(alert('ok'))
        setNome("")
        setEmail("")
        setPassword("")
        }else{
        alert('algo deu arrado')
        }}



  return (
    <div className='container mt-5'>
  
        <div className="form-group">
            <label >Nome</label>
            <input type="text" className="form-control" placeholder="Nome"
            value={nome} onChange={(e)=> setNome (e.target.value)} />
            </div>
            <div className="form-group">
            <label >Email</label>
            <input type="email" className="form-control" placeholder="Email" 
            value={email} onChange={(e)=> setEmail (e.target.value)}/>
            </div>
            <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password"
            value={password} onChange={(e)=> setPassword (e.target.value)} />
            </div>
              <button onClick={novoProduto} className="btn btn-primary mt-3">Cadastrar</button>
    
    </div>
  )
}

export default Registro