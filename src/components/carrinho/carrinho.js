import React from 'react'
import {ContainerCarrinho} from './styled'


export default class Carrinho extends React.Component{
    render(){
        return(
            <ContainerCarrinho>
                <h1>Carrinho:</h1>
                <p>Itens</p>
                <p>Valor Total:</p>
            </ContainerCarrinho>
        )
    }
}