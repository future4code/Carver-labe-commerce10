import React from "react";
import styled from "styled-components";

const BoxFiltros = styled.div`
  border: 1px solid green;
  height: 85vh;
`

export default class Filtros extends React.Component {
  render() {
    return (
      <div>
        <BoxFiltros>
          <h1>Ola</h1>
          <h1>Filtros</h1>
        </BoxFiltros>
      </div>
    );
  }
}
