import styled from "styled-components"


export const ContainerHeader = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5em 0 5rem;
    background: #313131;
    
    z-index: 10;
    width: 100%;
    height: 6vh;
    border-bottom: 1px solid #1E2D3D;
    position: fixed;
    box-shadow: 0px 6px 22px -3px rgba(0, 0, 0, 0.5);
    @media (max-width: 480px) {
        
        height: 5vh;
        padding: 0;

        ul{
            gap: .5rem;
        }
    }

    
`

export const LogoContainer = styled.div`
    
    @media (max-width: 480px) {
        font-size: smaller;
    }
`
export const ImgLogo = styled.img`
  
`

export const Ul = styled.ul`
    /* width: 100%; */
    display: flex;
    gap: 3rem;
    list-style: none;

    a{
        color: #818DED;
    }
    a:hover{
        color: #43D9AD;
    }
    
    @media (max-width: 480px) {
        gap: 2rem;
        align-items: center;
        justify-content: center;
        
        padding: 0 5px;
    }
`