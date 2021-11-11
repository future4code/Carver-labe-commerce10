import React from "react";
import styled from "styled-components";
import ProdutosCard from "./ProdutosCard";

const BoxProdutos = styled.div`
    border: 1px solid blue;
    display: flex;
    justify-items:center;

`;

export default class Produtos extends React.Component {
  render() {
    return (
        <BoxProdutos>
          <ProdutosCard/>
        </BoxProdutos>

    );
  }
}
