import styled from "styled-components";
import { BiExit } from "react-icons/bi";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage({
  nome,
  saldo,
  setSaldo,
  setLista,
  lista,
  tipo,
  setTipo,
  token,
  setToken
}) {
  const navigate = useNavigate()

  useEffect(() => {
      // if(localStorage.getItem("token")){
      //   console.log(localStorage.getItem("token"))
      //   const lsUser = localStorage.getItem("token")
      //   setToken(lsUser)
      // }
    const promise = axios.get("http://localhost:5000/home", {
      headers: {
        Authorization: `Bearer ${token}`,
       },
    });
    promise
      .then((res) => {
        lista = res.data
        let certo = lista.reverse()
        setLista(certo);
      })
      .catch((err) => alert(err.response.data));
  }, [])

  function irPaginaEntrada(event){
    event.preventDefault();
    setTipo("entrada")
    navigate("/nova-transacao/entrada")
  }

  function irPaginaSaida(event){
    event.preventDefault()
    setTipo("saida")
    navigate("/nova-transacao/saida")
  }

  function Deslogar(event){
    event.preventDefault()
    setToken("")
    navigate("/")
  }

  return (
    <HomeContainer>
      <Header>
        <h1>Olá, {nome}</h1>
        <BiExit onClick={Deslogar}/>
      </Header>

      <TransactionsContainer>
        <ul>
          {
            lista === undefined? <h1>Você ainda não tem nenhuma transaçao</h1>
            :
            (lista.map((item) => (
              <ListItemContainer key={item.id}>
              <div>
                <span>{item.dia}</span>
                <span>{item.data}</span>
                <strong>{item.descricao}</strong>
              </div>
              <Value color={item.tipo==="entrada"?"positivo":"negativo"}>${item.valor}</Value>
            </ListItemContainer>
            )))
          }

        </ul>
        
        <article>
          <strong>Saldo</strong>
          {
            lista.data===undefined? 0: 
            lista.data.forEach(transacao => {
            if(transacao.tipo==="entrada"){
              saldo = saldo +parseInt(transacao.valor)
            }
            if(transacao.tipo==="saida"){
              saldo = saldo -parseInt(transacao.valor)
            }
            })
          }
          <Value color={saldo>0?"positivo":"negativo"} >${saldo}</Value>
        </article>
      </TransactionsContainer>

      <ButtonsContainer>
        <button onClick={irPaginaEntrada}>
          <AiOutlinePlusCircle />
          <p>
            Nova <br /> entrada
          </p>
        </button>
        <button onClick={irPaginaSaida}>
          <AiOutlineMinusCircle />
          <p>
            Nova <br />
            saída
          </p>
        </button>
      </ButtonsContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 5px 2px;
  margin-bottom: 15px;
  font-size: 26px;
  color: white;
`;
const TransactionsContainer = styled.article`
  flex-grow: 1;
  overflow-y: scroll;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul{
    overflow-y: scroll;
  }
  article {
    display: flex;
    justify-content: space-between;
    strong {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;
const ButtonsContainer = styled.section`
  margin-top: 15px;
  margin-bottom: 0;
  display: flex;
  gap: 15px;

  button {
    width: 50%;
    height: 115px;
    font-size: 22px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 18px;
    }
  }
`;
const Value = styled.div`
  font-size: 16px;
  text-align: right;
  color: ${(props) => (props.color === "positivo" ? "green" : "red")};
`;
const ListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #000000;
  margin-right: 10px;
  div span {
    color: #c6c6c6;
    margin-right: 10px;
  }
`;
