import React from "react";
import styled from "styled-components";
import ProdutosCard from "./produtosCard";

const BoxProdutos = styled.div`
    /* border: 1px solid blue;c */
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
