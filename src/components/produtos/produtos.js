import React from "react";
import styled from "styled-components";
import ProdutosCard from "./ProdutosCard";

const BoxProdutos = styled.div`
    border: 3px solid purple;
    display: grid;
    align-items: stretch;
    width: 99%;
    height: 99vh;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    margin: 0;
`;

export default class Produtos extends React.Component {
  render() {
    return (
      <div>
        <BoxProdutos>
          <ProdutosCard/>
          <ProdutosCard/>
          <ProdutosCard/>
          <ProdutosCard/>
          <ProdutosCard/>
          <ProdutosCard/>
        </BoxProdutos>
      </div>
    );
  }
}
