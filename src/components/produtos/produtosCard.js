import React from 'react';
import styled from 'styled-components';
import fenix from './img/fenix.png';
import athena from './img/athena.png';
import cisne from './img/cisne.png';
import andromeda from './img/andromeda.png';
import pegaso from './img/pegaso.png';
import venus from './img/venus.png';

const BoxDiv = styled.div`
    /* border: 1px solid pink; */
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr ;
    margin:10% 0.1% 0;
    justify-items:center;

`;

const Cards = styled.div`
    background-color: #ffffff;
    display: grid;
    grid-template-rows: 1fr 30px;
    grid-template-columns: auto; 
    width: 200px;
    justify-items: center;
    border-radius:10px;
    box-shadow: 1px 1px 5px #625834;
    margin:10% 0% 10%;

    p{ 
        align-self: center;
       font-size :15px ;
       margin: 0 10px;

    }
    button{
        background-color: #71b810;
        border: 1px solid #71b810;
        margin:10px 10px 10px;
    }

    button:hover{
      background-color: #B9F269;
      box-shadow: 1px 1px 5px #D3F7A1;

    }
    img{
        height: 150px;
        width: 100%;
        border-radius:10px 10px 0px 0px;
    }

`

export default class ProdutosCard extends React.Component {
  state = {
      listaDeProdutos: [
      {id:1, imagem:<img src={fenix}/>, nome:"Cristal de Fênix ", valor:235},
      {id:2, imagem:<img src={athena}/>, nome:"Cristal de Athena", valor:390},
      {id:3, imagem:<img src={cisne}/>, nome:"Cristal de Cisne", valor:550},
      {id:4, imagem:<img src={andromeda}/>, nome:"Cristal de Andrômeda", valor: 970},
      {id:5, imagem:<img src={pegaso}/>, nome:"Cristal de Pégaso", valor:895},
      {id:6, imagem:<img src={venus}/>, nome:"Cristal de Vênus", valor:995},
    ]
  }

  copiarProdutos =() => {
    const copiaDeProdutos = [...this.state.listaDeProdutos];

    this.setState({ listaDeProdutos: copiaDeProdutos });
  }
  

  render() {
    const listaComponentes = this.state.listaDeProdutos.map((produtos)=> {
    return (
        <Cards key={produtos.id}>
          {produtos.imagem}
          {produtos.nome}
          <p>R$:{produtos.valor}</p>
          <button>Adicionar</button>
        </Cards>
    )
  })
    return (
      <BoxDiv>
      {listaComponentes}
      </BoxDiv>
    )
  }
}  
