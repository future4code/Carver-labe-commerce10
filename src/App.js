import React from "react";
import ListaDeProdutos from "./components/produtos/produtos.json"
import Body1 from "./components/body/body"
import Filtros from "./components/filtros/filtros"
import Carrinho from "./components/carrinho/carrinho"
import ProdutosCard from "./components/produtosCard/produtosCard"
import {ContainerBody} from "./components/body/styled"
import {Container, ContainerDivProduto, ContainerDiv} from './styled'



export default class App extends React.Component {
  state = {
    sorteandoPara:'nome',
    produtos: ListaDeProdutos,
    precoMax: null,
    precoMin: null,
    nomeProduto:'',
    quantidadeProduto:null,
    sequencia: 1,
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

  updateSorteandoPara =(ev) =>{
    this.setState({
      sorteandoPara: ev.target.value
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
    const itens = this.state.produtos
            .filter(produto => {
              return produto.nome.toLowerCase().includes(this.state.buscar.toLowerCase())
            })
            .filter(produto => {
                return this.state.precoMin === "" || produto.valor >= this.state.precoMin
            })
            .filter(produto => {
                return this.state.precoMax === "" || produto.valor <= this.state.precoMax
            })
            .sort((produtoA, produtoB) => {
              if(this.state.sorteandoPara === 'nome'){
              return this.state.sequencia * produtoA.nome.localeCompare(produtoB.nome)
            }else{
                return this.state.sequencia * (produtoA.value - produtoB.value)}
            })
            .map((produto => {
                return (
                     <ProdutosCard key={produto.id} produto={produto}/>
                )
            }))

            
            // var novaListaItens = () => {
            //   var novaLista = [...this.state.produtos]
            //   novaLista.push(itens)
            // }

        
    return (
      <Container>
        <Filtros
        produto={this.state.produtos}
        buscar={this.state.buscar}
        precoMax={this.state.precoMax}
        precoMin={this.state.precoMin}
        updateBuscar={this.updateBuscar}
        updatePrecoMax={this.updatePrecoMax}
        updatePrecoMin={this.updatePrecoMin}
        adicionaCarrinho={this.adicionaCarrinho}
        produtoNoCarrinho={this.produtoNoCarrinho}
        novaListaItens={itens}
         />

        <Body1
        id={this.state.produtos.id}
        parametro={this.parametro}
        />
        <Carrinho
        adicionaCarrinho = {this.adicionaCarrinho}
        produtoNoCarrinho = {this.produtoNoCarrinho}
        />




      </Container>
    )
  }
}