import styled from "styled-components";

export const ContainerAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
`

export const DescricaoFoto = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .paragrafo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;

        p{
            color: #43D9AD;
        }
        span{
            color: #818DED;
        }
    }


    img{
        width: 374px;
        height: 462px;
        border-radius: 30px;
    }
`