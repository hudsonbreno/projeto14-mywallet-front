import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react"
import axios from "axios"

export default function SignInPage({ setToken, setNome }) {

  const [form, setForm] = useState({ email: "", password: ""})
  const navigate = useNavigate()
  
  function logar(event){
    event.preventDefault();

    const promise = axios.post("http://localhost:5000/", form)
    promise.then(res =>{
      setNome(res.data.nome)
      setToken(res.data.token)
      navigate("/home")
    })
    .catch(err=>
      alert(err.response.data))
  }
  
  return (
    <SingInContainer>
      <form onSubmit={logar}>
        <MyWalletLogo/>
        <input
          value={form.email}
          placeholder="E-mail" 
          type="email"
          onChange={e=>setForm({...form, email: e.target.value})}
          required/>

        <input 
          value={form.password}
          placeholder="Senha" 
          type="password"
          onChange={e=>setForm({...form, password:e.target.value})}
          required/>
        <button type="submit" data-test="">Entrar</button>
      </form>

      <Link to={`/cadastro`}>
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`