import styled from "styled-components";

import fundoFoto from '../../imgs/fundo-Foto.png'

export const MainContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: 100vh;
`

export const ContainerContact = styled.div`
    display: flex;
    width: 90%;
    background-image : url(${fundoFoto});
    background-repeat: no-repeat;
    background-position: center;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    gap: 1rem;
    @media (max-width: 480px) {
      flex-direction: column-reverse;
    gap: 0;
  }
`
export const ContainerCardsContact = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    @media (max-width: 480px) {
    flex-direction: row;
    gap: .3rem;
  }

`

export const ContainerForm = styled.form`
   width: 500px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 1rem;
   aspect-ratio: 1;
   @media screen {
    width: 80%;
    height: 50vh;
   }
   
`

export const CardContact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 150px;
    border-radius: 15px;
    background-image: url(${fundoFoto});
    box-shadow: -5px 5px 5px  #2B0B3A;
    padding: 5px;
    @media (max-width: 768px) {
    width: 50%;
    min-width: 150px;
    height: 150px;
    
  }
`

export const InputInfos = styled.input`
    position: relative;
    background: transparent;
    width: 100%;
    border: 2px solid #2B0B3A;
    font-size: 14px;
    padding: 10px;
    color: white;
`

export const Textarea = styled.textarea`
     background: transparent;
     width: 100%;
     height: 200px;
     border: 2px solid #2B0B3A;
     font-size: 14px;
     padding: 5px;
     color: white;
`

export const BtnSend = styled.button`
    width: 30%;
    height: 40px;
    padding: 5px;
    cursor: pointer;
    margin-right: auto;
    background: #2B0B3A;
    border: none;
    color: white;
    border-radius: 5px;
`