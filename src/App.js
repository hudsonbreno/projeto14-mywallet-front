import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import TransactionsPage from "./pages/TransactionPage";
import { useState } from "react";

export default function App() {
  const [lista, setLista] = useState([]);
  const [token, setToken] = useState("");
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState("");
  const [tipo, setTipo] = useState("");

  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<SignInPage setToken={setToken} setNome={setNome} />}
          />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route
            path="/home"
            element={
              <HomePage
                token={token}
                saldo={saldo}
                setSaldo={setSaldo}
                lista={lista}
                setLista={setLista}
                tipo={tipo}
                setTipo={setTipo}
                nome={nome}
              />
            }
          />
          <Route
            path="/nova-transacao/:tipo"
            element={<TransactionsPage token={token} tipo={tipo} />}
          />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  );
}

const PagesContainer = styled.main`
  background-color: #8c11be;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`;
