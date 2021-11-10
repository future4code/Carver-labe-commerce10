import React from "react";
import Filtros from "./components/Filtros";
import Produtos from "./components/produtos/Produtos";
import Carrinho from "./components/Carrinho";
import styled from "styled-components";
import ProdutosCard from "./components/produtos/ProdutosCard";

const ContainerMain = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 100vh;
  width: 97vw;
  gap: 10px;
`;
const ContainerDivProduto = styled.div`
  width: 49%;
  margin: 0;
  border: 1px solid black;
`;

const ContainerDiv = styled.div`
  width: 24%;
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
              <ProdutosCard>
                produtos
              </ProdutosCard>
          </Produtos>
        </ContainerDivProduto>
        <ContainerDiv>
          <Carrinho>carrinho</Carrinho>
        </ContainerDiv>
      </ContainerMain>
    );
  }
}
