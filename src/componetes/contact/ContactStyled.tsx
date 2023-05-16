import styled from "styled-components";

import fundoFoto from '../../imgs/fundo-Foto.png'

export const MainContact = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    height: 95vh;
   
    ul{
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1rem;
     
      
    }
`

export const ContainerContact = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    
    background-repeat: no-repeat;
    background-position: center;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    gap: 1rem;
    color: #E5E9F0;
   
    h2{
      margin: 0;
      font-weight: 300;
      font-size: 28px;
      line-height: 16px;
    }
    @media (max-width: 880px) {
    width: 80%;

  }

    @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    gap: .5rem;
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
    background: #0D090F;
    border: solid 1px #363B62;
    font-size: 14px;
    padding: 10px;
    color: white;
`

export const Textarea = styled.textarea`
     background: transparent;
     width: 100%;
     height: 200px;
     border: solid 1px #363B62;
     background: #0D090F;
     font-size: 14px;
     padding: 5px;
     color: white;
`

export const BtnSend = styled.button`
  background: #6524AF;
  color: white;
  cursor: pointer;
  /* border: solid 1px #818DED; */
  border: none;
  border-radius: 5px;
  width: 50%;
  padding: .5rem;
  :hover{
    color: #0D090F;
    background: #493A5A;
    border: none;
    
  }

  @media (max-width: 480px) {
        margin-top: 1rem;
    }
`