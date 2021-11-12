import React from "react";
import Body1 from "./components/body/body"
import Filtros from "./components/filtros/filtros"
import Carrinho from "./components/carrinho/carrinho"
import {Container} from './styled'



export default class App extends React.Component {
  state = {
    parametro: 'produtos',
    precoMax:'',
    precoMin:'',
    nomeProduto:'',
    buscar: '',
    id: ''
  }
  updatePrecoMin = (id) => {
    this.setState({
      precoMin: id.target.value
    })
    
  }
  updatePrecoMax = (id) => {
    this.setState({
      precoMax: id.target.value
    })
    
  }
  updateBuscar = (id) => {
    this.setState({
      buscar: id.target.value
    })
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