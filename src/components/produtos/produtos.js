import React from "react";
import styled from "styled-components";

const Produtos = styled.div`
  border: 1px solid black;
`;

export default class produtos extends React.Component {
  render() {
    return (
      <div>
        <Produtos>
          <h1>Ola</h1>
        </Produtos>
      </div>
    );
  }
}
