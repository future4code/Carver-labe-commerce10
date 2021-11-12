import React from "react";
import body from "./components/body/body"
import filtros from "./components/filtros/filtros"
import carrinho from "./components/carrinho/carrinho"
import {} from './styled'



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
        <filtros/>
        <div 
        buscar={this.state.buscar}
        precoMax={this.state.precoMax}
        precoMin={this.state.precoMin}
        updateBuscar={this.updateBuscar}
        updatePrecoMax={this.updatePrecoMax}
        updatePrecoMin={this.updatePrecoMin}
        />
        <div
        id={this.state.id}
        parametro={this.parametro}
        />
        <carrinho/>
      </Container>
    )
  }
}