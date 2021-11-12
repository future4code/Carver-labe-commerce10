import React from "react";
import ListaDeProdutos from "./components/produtos/produtos.json"
import Body1 from "./components/body/body"
import Filtros from "./components/filtros/filtros"
import Carrinho from "./components/carrinho/carrinho"
import {Container, ContainerDivProduto, ContainerDiv} from './styled'



export default class App extends React.Component {
  state = {
    produtos: ListaDeProdutos,
    precoMax: null,
    precoMin: null,
    nomeProduto:'',
    quantidadeProduto:null,
    buscar: '',
    carrinho: [
      {
      quantidade:1,
      produto:{
        id:'', 
        imagem:'', 
        nome:'', 
        valor:''
      }
      }
    ]
  }
  updatePrecoMin = (ev) => {
    this.setState({
      precoMin: ev.target.value
    })
    
  }
  updatePrecoMax = (ev) => {
    this.setState({
      precoMax: ev.target.value
    })
    
  }
  updateBuscar = (ev) => {
    this.setState({
      buscar: ev.target.value
    })
  }

  adicionaCarrinho = (ev) => {
    let produtoId = this.state.produtos.filter((produto)=>{
      return produto.id === ev.target.value
    })
    let controle =0;
    let carrinhoCheio = this.state.carrinho.map((carrinho)=>{
      if(carrinho.produto.id === ev.target.value){
        carrinhoCheio.quantidade++
        controle++
      }
      return carrinho
    })

    if(controle === 0){
      this.setState({
        carrinho: [...this.state.carrinho, {quantidade:1, produto: produtoId[0]}]

      })
    }else{
      this.setState({
        carrinho:carrinhoCheio
      })
    }
  }

  produtoNoCarrinho =()=>{
    let total = 0
    let valorTotal = this.state.carrinho.map((select)=>{
      total = (parseFloat(select.produto.valor) * parseFloat(select.quantidade )) + valorTotal
    })
    return valorTotal
  }

  render() {
    return (
      <Container>
        <Filtros 
        buscar={this.state.buscar}
        precoMax={this.state.precoMax}
        precoMin={this.state.precoMin}
        updateBuscar={this.updateBuscar}
        updatePrecoMax={this.updatePrecoMax}
        updatePrecoMin={this.updatePrecoMin}
        adicionaCarrinho={this.adicionaCarrinho}
        produtoNoCarrinho={this.produtoNoCarrinho}
        />
        <Body1
        id={this.state.id}
        parametro={this.parametro}
        />
        <Carrinho/>
      </Container>
    )
  }
}