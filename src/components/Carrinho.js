import React from "react";
import styled from "styled-components";

const BoxProdutos = styled.div`
  border: 1px solid yellow;
  background-color:#a979fc;
  height: 85vh;

`

export default class Carrinho extends React.Component {
  render() {
    return (
      <div>
        <BoxProdutos>
          <h1>Olá</h1>
          <h1>Carrinho</h1>
        </BoxProdutos>
      </div>
    );
  }
}