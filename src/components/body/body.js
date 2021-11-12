import React from 'react'
import ListaDeProdutos from '../produtos/produtos.json'
import ProdutosCard from '../produtosCard/produtosCard'
import {ContainerBody, Header, ContainerCards, ContainerQuantidade, HeaderQuantidade} from'./styled'


export default class Body1 extends React.Component {
    state = {
        produtos: ListaDeProdutos,
        buscar: this.props.buscar
    }

    render() {
        return(
            <ContainerBody>
                <Header>
                <HeaderQuantidade>
                    <h2>Quantidade de Produtos: {this.state.produtos.length}</h2>
                    
                    <ContainerQuantidade>
                        <label>Ordenação</label>
                        <select>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </ContainerQuantidade>
                    </HeaderQuantidade>
                </Header>
            <ContainerCards>
            {this.state.produtos.map(produto =>{
                return(
                <ProdutosCard
                key={produto.id} 
                produto={produto} 
                />
                )
            })}
            </ContainerCards>
            </ContainerBody>
        )
    }
}