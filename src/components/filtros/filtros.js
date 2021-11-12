import React from 'react'
import { ContainerFiltro } from './styled'
import ProdutosCard from '../produtosCard/produtosCard'


export default class Filtros extends React.Component {
    render() {
        return (
            <ContainerFiltro>
                <input
                    placeholder="Pesquisa"
                    value={this.props.buscar}
                    onChange={this.props.updateBuscar}
                />
                <input
                    placeholder="Valor Mínimo"
                    value={this.props.precoMin}
                    onChange={this.props.updatePrecoMin}
                />
                <input
                    placeholder="Valor Máximo"
                    value={this.props.precoMax}
                    onChange={this.props.updatePrecoMax}
                />
            </ContainerFiltro>
)
}
}