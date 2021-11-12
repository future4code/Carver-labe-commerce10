<<<<<<< HEAD
=======
import React from "react";
import Filtros from "./components/Filtros";
import Produtos from "./components/produtos/produtos";
import Carrinho from "./components/Carrinho";
import styled from "styled-components";
import ProdutosCard from "./components/produtos/produtosCard";
// import fundo1 from "./components/produtos/img/fundo1.png"

const ContainerMain = styled.div`
  border: 1px solid red;
  /* background-color: #ffffff; */
  /* background-color: #dcfefd; */
  background-image: url('https://www.pixel4k.com/wp-content/uploads/2018/12/galaxy-4k_1546278891.jpg');
  background-repeat: no-repeat;
  background-size: cover;
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
  /* border: 1px solid black; */
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
>>>>>>> master
