import React from 'react'
import {ContainerFiltro} from './styled'


export default function Filtros(props){
    return(
        <ContainerFiltro>
            <h1>
                Filtros
            </h1>
            <input placeholder='Valor Mínimo'/>
            <input placeholder='Valor Máximo'/>

            <input onChange={props.updateBusca}
                    value={props.busca}
                    placeholder='Pesquisa' />
        </ContainerFiltro>
    )
}