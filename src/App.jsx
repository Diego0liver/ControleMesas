
import {  Route, Routes  } from "react-router-dom";
import { Home } from "./page/Home";
import { Produtos } from "./page/Produtos";
import  Card  from './page/Card'
import Mesa from "./page/Mesa";
import Excluir from "./page/Excluir";
import Login from "./page/Login";
import Privit from '../src/auth/Auth'
import Ajuste from "./page/Ajuste";
import Reserva from "./page/Reserva";
import EditeMesa from "./page/EditeMesa";
import ReservaId from "./page/ReservaId";
import Registro from "./page/Registro";


function App() {
  

  return (
    <Routes>
    
      <Route path='/' element={<Privit><Home /></Privit>} />
      <Route path='/produtos' element={<Privit><Produtos /></Privit>} />
      <Route path='/ajuste' element={<Privit><Ajuste /></Privit>} />
      <Route path='/reserva' element={<Privit><Reserva /></Privit>} />
      <Route path='/reserva/:id/:numero/reserva' element={<Privit><ReservaId /></Privit>} />
      <Route path='/editemesa' element={<Privit><EditeMesa /></Privit>} />
      <Route path='/mesa/:id' element={<Privit><Mesa /></Privit>} />
      <Route path='/mesa/:id/cardapio/:id2/:preco/:total/:nome/cardapio' element={<Privit><Card /></Privit>} />
      <Route path='/mesa/:id/cardapio/:id2/:preco/:subTotal/excluir' element={<Privit><Excluir /></Privit>} />
      <Route path='/login' element={<Login />} />
      <Route path='/registro/user' element={<Registro />} />
  
    </Routes>
  )
}

export default App
