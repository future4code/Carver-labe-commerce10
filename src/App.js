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
    produtos:[
      {
          id:1, 
          imagem:"https://i.pinimg.com/originals/7a/1e/8c/7a1e8cbae81363b96096b4c5d0971705.png", 
          nome:"Cristal de Fênix ", 
          valor:"235"
          },
        {
          id:2,
          imagem:"https://i.pinimg.com/564x/3f/31/ee/3f31ee5b43222325e9e8fbe88587fd7d.jpg", 
          nome:"Cristal de Athena", 
          valor:390
        },
        {
            id:3, 
            imagem:"https://i.pinimg.com/564x/c8/0d/52/c80d528eb960f23548fc56387e520906.jpg", 
            nome:"Cristal de Cisne", 
            valor:550
          },
        {
          id:4, 
          imagem:"https://i.pinimg.com/564x/85/68/1c/85681c1a23784c4c40705abd8e626020.jpg", 
          nome:"Cristal de Andrômeda", 
          valor: 970
          },
        {
            id:5, 
            imagem:"https://i.pinimg.com/564x/87/39/9e/87399e1bae12d9db8fbca192da035cc7.jpg", 
            nome:"Cristal de Pégaso", 
            valor:895
          },
        {
            id:6, 
            imagem:"https://i.pinimg.com/564x/b3/4a/1d/b34a1d58cbc3f170d5bcb49474a9f7f1.jpg", 
            nome:"Cristal de Vênus", 
            valor:995
          }
        
      ],
  





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
        carrinho: [...this.state.carrinho,{
          quantidade:1,
          produto: produtoId[0]
        }]

      },() => console.log(this.state.carrinho))
      }else{
      this.setState({
        carrinho:carrinhoCheio
      },() => console.log(this.state.carrinho))
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