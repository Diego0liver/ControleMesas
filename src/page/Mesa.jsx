import React, { useState, useEffect } from 'react'
import API from '../db/api'
import {useParams, Link} from "react-router-dom";
import Modal from 'react-modal';
import ProdutosDaMesa from '../components/produtos/ProdutosDaMesa'
import '../style/Home/Mesa.scss'
import FecharMesa from '../components/produtos/FecharMesa';

//Pagina da mesa individual (ex: mesa numero 2)
Modal.setAppElement('#root');
const Mesa = () => {

  //useState que abre e fecha o modal de cardapio
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalOpen, setOpen] = useState(false);
  //
  const [mesasID, setMesasID] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams()
  const baseURL = '/mesa/'

  useEffect(() => {
      if ( id ) {
        API.get(`${baseURL + id}`,{
          headers: {
            'Cache-Control': 'no-cache'
          }
        })
              .then(res => {
                setMesasID(res.data)
                setIsLoading(false)
              })
              .catch(err => {
                  console.log(err)
              })}
}, [ id, API ]);

    //Abri e fecha modal
      function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }
      //

    //funcao que abre e fecha o modal fecha conta
    function openModalFinish() {
      setOpen(true);
    }
    function closeModalFinish() {
      setOpen(false);
    }
    //
  
        //funcao disparado com o botao do teclado
        const handleKeyDown = (event) => {
          if (event.key === 'F2') {
            openModal()
          } }
      
        useEffect(() => {
          document.addEventListener('keydown', handleKeyDown);
          return () => {
            document.removeEventListener('keydown', handleKeyDown);
          };
        }, []);
       //fim da funcao


  let cardapio = mesasID.cardapios

//funcao que soma o total da mesa
 if (cardapio !== undefined){
  const filtroPrco =  cardapio.filter((num)=> num.preco).map((numb)=> Number(numb.preco))
  const totalCardapio = filtroPrco.reduce((acc, cur)=> acc + cur, 0).toFixed(2)
  let taxa  =  parseFloat(totalCardapio) * 0.1.toFixed(2)
  const subTotal = parseFloat(totalCardapio) + taxa
//
    return ( 
    <div>
     {isLoading ? <h1>Aguarde</h1> :
    <div className='container'>

    {/* Models */}
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <ProdutosDaMesa total={totalCardapio}/>
    </Modal>

    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModalFinish}
      contentLabel="Example Modal"
    >
     <FecharMesa total={subTotal.toFixed(2)} numeroMesa={mesasID.numero}/>
    </Modal>
  {/* fim dos Models */}

    <h1>Mesa Numero {mesasID.numero}</h1>
      <Link to={'/'}><button className='btn btn-secondary mb-3'>Voltar</button><br/></Link>
      <h3>Consumo mesa {mesasID.numero}</h3>
      <button className='btn btn-success mb-3 mt-3' onClick={ handleKeyDown && openModal}>Adicionar produto (F2)</button><br/>
  
 <table  className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Produto</th>
      <th scope="col">Valor</th>
      <th scope="col">Excluir</th>
    </tr>
  </thead>
  <tbody>
  {cardapio.map((post)=>{
      return <tr key={post.id} >
          <td>{post.nome}</td>
          <td>R${post.preco}</td>
          <td scope="col"> <a href={'/mesa/' + id + '/cardapio/' + post.id +  '/' + post.preco + '/' + subTotal + '/excluir'}>Excluir</a></td>
          </tr>})}
           <tr>
            <td>Taxa do garcon</td>
            <td>R$ {taxa.toFixed(2)}</td>
            <td></td>
          </tr>
    <tr>
      <td>Total</td>
      <td></td>
      <td> <b>R${subTotal.toFixed(2)}</b></td>
    </tr>
  </tbody>
</table>
<button onClick={openModalFinish} className='btn btn-danger'>Fechar mesa</button>
 </div>}
 </div>)}
}

export default Mesa