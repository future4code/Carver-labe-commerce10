import React from "react";
import styled from "styled-components";

const BoxFiltros = styled.div`
  /* background-color: #71b810; */
  background-color: #ffffff;
  opacity: 0.5;
  border-radius:10px;
  box-shadow: 1px 1px 5px #625834;
  /* border: 1px solid green; */
  height: 85vh;
`

export default class Filtros extends React.Component {

  Table = ({id}) => {


  }


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
