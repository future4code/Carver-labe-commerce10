import React from "react";
import Filtros from "./components/Filtros";
import Produtos from "./components/produtos/Produtos";
import Carrinho from "./components/Carrinho";
import styled from "styled-components";
import ProdutosCard from "./components/produtos/ProdutosCard";

const ContainerMain = styled.div`
  border: 1px solid red;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 1vh;
  height: 97.7vh;
  width: 98.88vw;
  gap: 0.5%;
`;
const ContainerDivProduto = styled.div`
  width: 90%;
  height: 43.8vw;
  margin: 0;
  border: 1px solid black;
`;

const ContainerDiv = styled.div`
  width: 20vw;
  margin: 0;
`;

export default class App extends React.Component {
  render() {
    return (
      <ContainerMain>
        <ContainerDiv>
          <Filtros>filtro</Filtros>
        </ContainerDiv>
        <ContainerDivProduto>
          <Produtos>
            <ProdutosCard/>
          </Produtos>
        </ContainerDivProduto>
        <ContainerDiv>
          <Carrinho>carrinho</Carrinho>
        </ContainerDiv>
      </ContainerMain>
    );
  }
}
