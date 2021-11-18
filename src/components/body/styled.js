import styled from "styled-components";


export const ContainerBody = styled.div`
display:flex;
flex-direction:column;
width: 60vw;
border: 1px solid green;
padding: 1vh;
gap:0.5
`
export const Header = styled.div`
display:flex;
align-items:center;
justify-content: space-between;


`

export const HeaderQuantidade = styled.div`
background-color:#ffffff;
display:flex;
flex-direction: row;
justify-content:space-between;
align-items: center;
border-radius:10px;
box-shadow: 1px 1px 5px #625834;
opacity: 0.9;
width: 100%;
height: 100%;
/* margin:10px 0 10px; */

h2{
text-align: center;
margin-left:35%;
}

label{
    margin: 0 10px;
}

`


export const ContainerCards = styled.div`
    border: 1px solid pink;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr ;
    margin:10% 0.1% 0;
    justify-items:center;
`
export const ContainerQuantidade = styled.div`
display:flex;

`
