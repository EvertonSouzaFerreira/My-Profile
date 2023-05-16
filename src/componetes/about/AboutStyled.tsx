import styled from "styled-components";

export const ContainerAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    @media (max-width: 920px){
        gap: 1.5rem;
    }

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

    @media (max-width: 920px) {
        flex-direction: column-reverse;
        gap: 1rem;
        img{
        width: 200px;
        height: 242px;
        border-radius: 30px;
    }

        .paragrafo{
            width: 90%;
            align-items: center;
            justify-content: center;
            p{
                font-size: 12px;
            }
        }
    }
`