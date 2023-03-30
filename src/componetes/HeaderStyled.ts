import styled from "styled-components"


export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 1rem;
    max-width: 100vw;
    height: 15vh;
    background: #1A0B2E;
    box-shadow: 0px 6px 22px -3px rgba(0, 0, 0, 0.1);
    @media (max-width: 480px) {
        justify-content: flex-start;
        height: 5vh;
        
    }
`

export const LogoContainer = styled.div`
    
    @media (max-width: 480px) {
        width: 20px;
    }
`
export const ImgLogo = styled.img`
    width: 100%;
`

export const Ul = styled.ul`
    width: 100%;
    display: flex;
    gap: 3rem;
    list-style: none;
    color: white;
    
    @media (max-width: 480px) {
        gap: 2rem;
        align-items: center;
        justify-content: center;
        
        padding: 0 5px;
    }
`