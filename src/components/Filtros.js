import React from "react";
import styled from "styled-components";

const BoxFiltros = styled.div`
  border: 3px solid green;
  /* display: flex;
  flex-direction: column; */
  width: 100%;
  height: 85vh;
  margin: 0;
 
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
