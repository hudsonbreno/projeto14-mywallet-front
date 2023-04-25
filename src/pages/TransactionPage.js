import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function TransactionsPage({ token, tipo }) {

  const [ form, setForm ] = useState({ valor: "", descricao: "" })
  const navigate = useNavigate()

  useEffect(()=>{
    if(!token) navigate("/")
  })
  function criarTarefa(event){
    event.preventDefault();
    const promise = axios.post(`http://localhost:5000/nova-transacao/${tipo}`, form, {
      headers: {
        Authorization: `Bearer ${token}`,
       },
    })
    promise.then(res=>{
      navigate("/home")
    })
    .catch(err=>
      alert(err.response.data))
  }

  return (
    <TransactionsContainer>
      <h1>Nova {tipo}</h1>
      <form onSubmit={criarTarefa}>
        <input 
        value={ form.valor }
        placeholder="Valor" 
        type="text"
        required
        onChange={e=>setForm({...form, valor:e.target.value})}
        />
        <input 
        value={ form.descricao }
        placeholder="Descrição" 
        type="text"
        required
        onChange={e=>setForm({...form, descricao: e.target.value})}
        />
        <button type="submit" data-test="">Salvar TRANSAÇÃO</button>
      </form>
    </TransactionsContainer>
  )
}

const TransactionsContainer = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`
