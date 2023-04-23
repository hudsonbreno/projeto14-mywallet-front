import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react"
import axios from "axios"

export default function SignUpPage() {
  
  const [ form, setForm ] = useState({ nome:"", email:"" , password:"", isPassword:"" })
  const navigate = useNavigate()

  function cadastrar(event){
    event.preventDefault()

    const promise = axios.post("http://localhost:5000/", form)
    promise.then(resposta =>{
      console.log("enviado com sucesso")
      navigate("/")
    })
   }

  return (
    <SingUpContainer>
      <form onSubmit={cadastrar}>
        <MyWalletLogo />
        <input 
          value={form.nome}
          placeholder="Nome"
          type="text"
          onChange={e=>setForm({...form, nome:e.target})}
          />
        <input 
          value={form.email}
          placeholder="E-mail" 
          type="email" 
          onChange={e=>setForm({...form, email:e.target})}
          />
        <input 
          value={form.password}
          placeholder="Senha" 
          type="password" 
          autocomplete="new-password" 
          onChange={e=>setForm({...form, password:e.target})}
          />
        <input 
          value={form.isPassword}
          placeholder="Confirme a senha" 
          type="password" 
          autocomplete="new-password" 
          onChange={e=>setForm({...form, isPassword:e.target})}
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
