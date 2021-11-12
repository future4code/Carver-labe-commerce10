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
                onChange={this.props.updateBusca}
            />
            {this.props.buscar
            .filter(buscar => {
                 return buscar.nome.includes(this.props.buscar)
            })
            .map(buscar => {
                return <ProdutosCard key={buscar.id} buscar={buscar}/>
            })}
        </ContainerFiltro>
    )
  }
}