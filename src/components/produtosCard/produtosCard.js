import React from "react";
import{Cards} from "./styled"



export default function ProdutosCard(props){
    return(
        <Cards>
            <img src={props.produto.imagem}/>
            <p>{props.produto.nome}</p>
            <p>R$: {props.produto.valor}</p>
            <button value={props.produto.id} onClick={props.adicionaCarrinho}>Adicionar ao Carrinho</button>
        </Cards>
    )
}