import React, {useState} from 'react'
import '../../style/Produtos/FecharMesa.scss'
import API from '../../db/api'
import {useParams} from "react-router-dom";
import swal from 'sweetalert';

//Modal que fecha a mesa
const FecharMesa = (props) => {
    const { id } = useParams()
    const [troco, setTroco] = useState(0);
    const [result, setResult] = useState(0);

    function voltar(){
      location.reload();
     }

    const fecharMesa = ()=> {
        API.delete(`/cardapioMesaTotal/${id}`)
        API.put(`/mesa/${id}`, {
          estatus: '0.00'
         })
       .then((response) => {
      console.log(response.data);
        });
        swal({
          title:"Ok",
          text:"Mesa Fechada com sucesso",
          icon:"success",
          buttons:"OK"
        }).then(res=>{
          if(res){
            voltar()}
        })}

      //Props do valoe total da mesa
     const total = () => {
        setResult(troco - props.total);
      };
      //
    
  return (
    <div className='FecharMesa'>
        <h1>Fechar mesa {props.numeroMesa}</h1>
        <h3 className='troco'>Total: R$ {props.total}</h3>
        <div className='cardTroco'>
        <h3>Troco: R$  {result.toFixed(2)}</h3>
        <label>Digite o valor recebido </label><br/>
        <input type="text" placeholder='Valor recebido'  value={troco}
        onChange={(e) => setTroco(Number(e.target.value))} />
        <button onClick={total} className='btn btn-success m-3' >Calcular troco</button><br/>
        </div>
       <button className='btn btn-danger m-3' onClick={fecharMesa}>Fechar conta</button>
       <p>* Esc para cencelar</p>
    </div>
  )
}

export default FecharMesa