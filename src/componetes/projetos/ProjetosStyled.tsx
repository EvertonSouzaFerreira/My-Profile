import styled from "styled-components";
import fundoImgDescricao from '../../imgs/fundoDescricaoProjetoDireito.png'
import fundoFoto from '../../imgs/fundo-Foto.png'


interface ChidrenProps {
    tela: string
}



export const ContainerProjetosComBtns = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    @media (max-width: 480px) {
        gap: 1rem;
    }
`

export const ContainerProjetos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20%;
    width: 90%;

    background-image: url(${fundoFoto});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    position: relative;
    margin-bottom: 1rem;

    @media(max-width: 480px) {
        flex-direction: column;
        gap: 0;
    }
`
export const ContainerTela = styled.a`
    width: 50%;
    height: 341px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    background-image: url(${fundoFoto});
    @media screen {
     width: 100%;
     padding: .5rem;
     height: 200px;
    }
`
export const Tela = styled.div`
    width: 98%;
    height: 100%;
    background-image: url(${({tela}: ChidrenProps) => tela});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 15px;
    cursor: pointer;
`


export const ContainerTitleDescription = styled.div`
    
   
`

export const ContainerDescricao = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    margin: auto;
    padding: .3rem;
    background-image : url(${fundoImgDescricao});
    background-size: 100%;
    background-repeat: no-repeat;
    @media (max-width: 480px) {
        height: 100px;
    }
`

export const Paragrafo = styled.p`
    display: flex;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 27px;
    display: flex;
    color: #CCD6F6;
    @media (max-width: 480px) {
        line-height: 15px;
    }
`

export const ContainerBtns = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    
`

export const Btns = styled.div`
    cursor: pointer;
    padding: .5rem;
    background: transparent;
    border: solid 1px white;
`