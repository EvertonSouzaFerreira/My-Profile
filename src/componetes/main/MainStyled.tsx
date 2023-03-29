import styled from "styled-components";
import fundoFoto from '../../imgs/fundo-Foto.png'

export const ContainerMain = styled.div`
    display: flex;
    gap: 2rem;
    padding: 0 2rem 0 2rem;
    height: 85vh;
    @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 0;
  }
`
export const ContainerImg = styled.div`
    display: flex;
    
    position: relative;
    align-items: center;
    justify-content: center;
    width: 385px;
    height: 431px;
    background-image: url(${fundoFoto});
    @media (max-width: 480px) {
    width: 100%;
    height: 150px;
    align-items: flex-end;
    justify-content: flex-start;

  }
`
export const MyPhoto = styled.img`
    width: 50%;
    height: 50%;
    @media (max-width: 480px) {
    width: 20%;
    margin-left: 3rem;
  }
`

export const ErrowName = styled.div`
    position: absolute;
    left: 220px;
    top: 90px;
    /* border: solid red 3px; */
    display: flex;
    color: white;
    @media (max-width: 480px) {
        left: 90px;
        top: 25px;
  }
`

export const Frase = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0;
    max-width: 500px;
    @media (max-width: 480px) {
        margin: 0;
        gap: 1rem;
  }
`

export const Resumo = styled.div`
    display: flex;
    max-width: 80%;
    padding: 0 2rem 0 2rem;
    margin: auto;
    align-items: center;
    justify-content: center;
    height: 100vh;
    @media (max-width: 480px) {
        
  }
`

