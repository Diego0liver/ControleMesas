import React,{useContext, useState} from 'react'
import Bar from '../assets/img/bar.jpg'
import '../style/Login/Login.scss'
import  {ContextApi}  from '../context/context';
import Logo from  '../assets/img/logo.png'




const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {logi} = useContext(ContextApi)

  const logins=(e)=>{
    e.preventDefault()
   logi(email, password)
   }

   //

  return (
    <div className='Login'>
        <div>
            <img src={Bar} alt="bar" />
        </div>

        <div className='logar'>
            <img src={Logo} alt="logo" />
         <form className='container'>
               <h3>Logar</h3>
            <div  className="input-group flex-nowrap mb-3">
            <span  className="input-group-text" id="addon-wrapping">🙍‍♂️</span>
            <input type="text" placeholder='Login'  className="form-control"  value={email} onChange={(e)=> setEmail (e.target.value)} />
            </div>

            <div  className="input-group flex-nowrap mb-3">
            <span  className="input-group-text" id="addon-wrapping">🔑</span>
            <input type="password" placeholder='Senha'  className="form-control" value={password} onChange={(e)=> setPassword (e.target.value)} />
            </div>
            <button type="button" onClick={logins}  className="btn btn-light btn-block mb-3">Logar !</button><br/>
        </form>
        </div>
    </div>
  )
}

export default Login