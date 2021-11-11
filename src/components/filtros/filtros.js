import React from 'react'
import {ContainerFiltro} from './style'


export default function Filtro(props){
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