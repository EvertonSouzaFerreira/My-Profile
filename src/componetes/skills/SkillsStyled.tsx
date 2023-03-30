import styled from "styled-components";
import fundoSkill from '../../imgs/fundoSkill.png'
import fundoSkillSelecionada from '../../imgs/fundoSkillSelecionada.png'



export const ContainerSkills = styled.div`
    display: flex;
    margin: auto;
    position: relative;
    gap: 2rem;
    align-items: center;
    width: 80%;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 0;
  }
`

export const TodasSkills = styled.ul`
    display: flex;
    gap: 1rem;
    
    list-style: none;
    @media (max-width: 480px) {
        gap: .2rem;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0;
    }
`
export const Skiil = styled.li`
    width: 44px;
    aspect-ratio: 1;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-image: url(${fundoSkill});
`

export const ImgSelecionada = styled.div`
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    
`

export const ContainerSkillSelecionada = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 330px;
    background-position: bottom;
    background-repeat: no-repeat;
    background-image: url(${fundoSkillSelecionada});
`

export const ContainerVetores = styled.div`
    
`
export const PrimeiroVetorFromRight = styled.img`
    position: absolute;
    height: 60%;
    top: 11%;
    right: 27%;
    transform: rotateZ(10deg);
`

export const BtnSend = styled.button`
    width: 100%;
    height: 40px;
    padding: 5px;
    cursor: pointer;
    margin-right: auto;
    background: #3b0255;
    border: none;
    color: white;
    border-radius: 5px;

`