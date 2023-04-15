import styled from "styled-components";
import fundoImgDescricao from '../../imgs/fundoDescricaoProjetoDireito.png'
import fundoFoto from '../../imgs/fundo-Foto.png'


interface ChidrenProps {
    tela: string
}



export const ContainerProjetosComBtns = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    
    @media (max-width: 480px) {
        gap: 1rem;
    }
`

export const ContainerProjetos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #151515;
    min-width: 320px;
    max-width: 320px;
    height: 454px;
    border-radius: 15px;
    background-repeat: no-repeat;
    box-shadow: 0px 6px 22px -3px rgba(0, 0, 0, 0.5);
    
    

    @media(max-width: 480px) {
        min-width: 300px;
    }
`
export const ContainerTela = styled.a`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
    /* @media screen {
     width: 100%;
     padding: .5rem;
     height: 200px;
    } */
`
export const Tela = styled.div`
    width: 100%;
    
    height: 250px;
    background-image: url(${({tela}: ChidrenProps) => tela});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    cursor: pointer;
`

export const ContainerDescricao = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    margin: auto;
    color: #607B96;
    padding: 1rem;
    border-top: solid #011221 2px;
    /* background-image : url(${fundoImgDescricao}); */
    background-size: 100%;
    background-repeat: no-repeat;
    @media (max-width: 480px) {
        
    }

    p{
        font-size: smaller;
    }
`



export const Btns = styled.div`
    cursor: pointer;
    height: 100px;
    display: flex;
    align-items: center;
    padding: .5rem;
    background: transparent;
    /* border: solid 1px white; */
    font-size: larger;
   
    :hover{
        color: #43D9AD;
    }
    
`

export const BtnView = styled.a `
    display: flex;
    width: 149px;
    height: 38px;
    justify-content: center;
    align-items: center;
    padding: 10px 14px;
   
    background: #1C2B3A;
    border-radius: 8px;
    border: none;
    color: white;
    
`

export const ContainerCarousel = styled.div`
width: 75%;
padding: 0 1em 0 1rem;
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
border-radius: 15px;

@media (max-width: 480px) {
    height: 100%;
    
    padding: 0;
}
`