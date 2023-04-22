import { Link } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"

export default function SignUpPage() {
  function formulario(event){
    event.preventDefault()
    let inputDadosCadastro={
      nome: nome,
      email:email,
      password:password
    }
  }

  return (
    <SingUpContainer>
      <form>
        <MyWalletLogo />
        <input 
          value={nome}
          placeholder="Nome"
          type="text"
          />
        <input 
          placeholder="E-mail" 
          type="email" />
        <input 
          placeholder="Senha" 
          type="password" 
          autocomplete="new-password" />
        <input 
          placeholder="Confirme a senha" 
          type="password" 
          autocomplete="new-password" />
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
