import styled from 'styled-components';

export const Cards = styled.div`
    background-color: #ffffff;
    display: grid;
    grid-template-rows: 1fr 30px;
    grid-template-columns: auto; 
    width: 200px;
    justify-items: center;
    border-radius:10px;
    box-shadow: 1px 1px 5px #625834;
    margin:10% 0% 10%;

    p{ 
        align-self: center;
       font-size :15px ;
       margin: 0 10px;

    }
    button{
        background-color: #71b810;
        border: 1px solid #71b810;
        margin:10px 10px 10px;
    }

    button:hover{
      background-color: #B9F269;
      box-shadow: 1px 1px 5px #D3F7A1;

    }
    img{
        height: 151px;
        border-radius:10px 10px 0px 0px;
    }

`
