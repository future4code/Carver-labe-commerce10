import React from 'react'
import Produtos from '../../produtos/produtos.json'
import ProdutosCard from '../produtosCard/produtosCard'
import {ContainerBody, Header, ContainerCards} from'.styled'


export default class Body extends React.Component {
    state = {
        produtos: Produtos,
    }

    render() {
        return(
            <ContainerBody>
                <Header>
                    <h2>Quantidade de Produtos: {this.state.produtos.length}</h2>
                    <div>
                        <label>Ordenação</label>
                        <select>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </div>
                </Header>
            <ContainerCards>
            {this.state.Produtos.map(produto =>{
                return <ProdutosCard key={produto.id} produto={produto} />
            })}
            </ContainerCards>
            </ContainerBody>
        )
    }
}