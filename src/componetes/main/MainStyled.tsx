import styled from "styled-components";
import fundoFoto from '../../imgs/fundo-Foto.png'

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: .5rem;
    padding: 0 2rem 0 5rem;
    align-items: center;
    justify-content: center;
    /* background-image: url(${fundoFoto}); */
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    @media (max-width: 880px) {
    
    font-size: smaller;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 0 1rem 0 1rem;
  }


    @media (max-width: 480px) {
    height: fit-content;
    flex-direction: column-reverse;
    font-size: smaller;
    align-items: center;
    gap: 3rem;
    padding: 5rem 2rem 0 2rem;
  }
`
export const ContainerCube = styled.div`
    display: flex;
    /* background-image: url(${fundoFoto}); */
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* width: 385px;
    height: 431px; */
    min-width: 205px;
    /* background-image: url(${fundoFoto}); */
    @media (max-width: 480px) {
    width: 100%;
    height: 150px;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 1rem;

  }
`
export const BtnSetTech = styled.button`
  background: none;
  color: #818DED;
  cursor: pointer;
  border: solid 1px #FFFFFF;
  width: 100%;
  padding: .5rem;
  :hover{
    color: #43D9AD;
  }
`


export const Frase = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    max-width: 500px;
    color: #E5E9F0;
    h2{
      margin: 0;
      font-weight: 600;
      font-size: 38px;
      line-height: 56px;
    }
    h4{
      font-weight: 450;
      font-size: 22px;
      line-height: 32px;
      color: #818DED;
      margin: 0;
    }
    p{
      margin: 0;
      
    }
    div p {
      color: #43D9AD;
    }
    span{
      color: #818DED;
    }
    //

    @media (max-width: 680px) {
        margin-top: 0;
        gap: 0;
        padding: 0;
        h2{
        margin: 0;
        font-weight: 300;
        font-size: 28px;
      }
      h3{
      font-weight: 350;
      font-size: 18px;
      line-height: 42px;
      color: #818DED;
      margin: 0;
    }
  }
`





