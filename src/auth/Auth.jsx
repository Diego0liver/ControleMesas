import React, {useContext, useEffect} from "react";
import { useNavigate  } from "react-router-dom";
import  {ContextApi}  from '../context/context';


const Privit = ({children})=>{
  let history = useNavigate()
  useEffect(()=>{
   history()
},[])

    const { autentificado } = useContext(ContextApi)
    if(!autentificado){
      return history('/login')
    }
    return children
  }

  export default Privit