import React from "react";
import styled from "styled-components";

const BoxProdutos = styled.div`
  border: 3px solid yellow;
  /* display: flex;
  flex-direction: column; */
  width: 100%;
  height: 85vh;
  margin: 0;
  
`

export default class Carrinho extends React.Component {
  render() {
    return (
      <div>
        <BoxProdutos>
          <h1>Ola</h1>
          <h1>Carrinho</h1>
        </BoxProdutos>
      </div>
    );
  }
}