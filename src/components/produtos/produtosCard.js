import React from 'react';
import styled from "styled-components";

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid blue;
    width: 200px;
    height: 250px;
    
    
    p{ 
        align-self: center;
       font-size :15px ;
       margin: 0 10px;
    }
    button{
        /* margin-left: 20%; */
        align-self:center;
        margin-top: 10px;
    }
    img{
        height: 150px;
        width: 100%;
    }
`

export default class ProdutosCard extends React.Component {
    render() {
      return (
        <div>
          <Cards>
            <img src="https://picsum.photos/200/300" alt="foto"/>
            <p>Produto 1</p>
            <p>250,00</p>
            <button>Adicionar</button>
          </Cards>
        </div>
      );
    }
  }