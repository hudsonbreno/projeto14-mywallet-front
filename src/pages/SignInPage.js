import styled from "styled-components"
import { Link } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"

export default function SignInPage() {


  
  function logar(event){
    event.preventDefault();
    let inputDados= {
      email: email,
      password: senha
    }

    const promise = axios.post(URL, dados)
    promise.then(resposta =>{
      console.log("enviado com sucesso")
      navigate("/home")
    })
  }
  
  return (
    <SingInContainer>
      <form onSubmit={logar}>
        <MyWalletLogo/>
        <input
          value={email}
          data-test="client-name"
          placeholder="E-mail" 
          type="email"
          onChange={e=>setNome(e.target.value)}
          required/>

        <input 
          value={senha}
          placeholder="Senha" 
          type="password"
          autocomplete="new-password"
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
