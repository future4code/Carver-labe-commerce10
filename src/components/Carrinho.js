import React from "react";
import styled from "styled-components";

const BoxProdutos = styled.div`
  /* border: 1px solid yellow; */
  /* background-color: #71b810; */
  background-color: #ffffff;
  opacity: 0.5;
  border-radius:10px;
  box-shadow: 1px 1px 5px #625834;
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