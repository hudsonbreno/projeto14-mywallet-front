import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react"
import axios from "axios"

export default function SignUpPage({ setNome }) {
  
  const [ form, setForm ] = useState({ nome:"", email:"" , password:"", isPassword:"" })
  const navigate = useNavigate()

  function cadastrar(event){
    event.preventDefault()

    const promise = axios.post("http://localhost:5000/cadastro", form)
    promise.then(res =>{
      console.log("cadastrado com sucesso")
      navigate("/")
    })
    .catch(err=>
      alert(err.response.data))
   }

  return (
    <SingUpContainer>
      <form onSubmit={cadastrar}>
        <MyWalletLogo />
        <input 
          value={form.nome}
          placeholder="Nome"
          type="text"
          onChange={e=>setForm({...form, nome:e.target.value})}
          />
        <input 
          value={form.email}
          placeholder="E-mail" 
          type="email" 
          onChange={e=>setForm({...form, email:e.target.value})}
          />
        <input 
          value={form.password}
          placeholder="Senha" 
          type="password" 
          onChange={e=>setForm({...form, password:e.target.value})}
          />
        <input 
          value={form.isPassword}
          placeholder="Confirme a senha" 
          type="password" 
          onChange={e=>setForm({...form, isPassword:e.target.value})}
          />
        <button type="submit" data-test="">Cadastrar</button>
      </form>

      <Link to={"/"}>
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
