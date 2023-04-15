import styled from "styled-components";
import fundoSkill from '../../imgs/fundoSkill.png'
import fundoSkillSelecionada from '../../imgs/fundoSkillSelecionada.png'



export const ContainerSkills = styled.div`
    display: flex;
    margin: auto;
    position: relative;
   
    align-items: center;
    width: 100%;
    flex-direction: column;
    height: 100%;
    justify-content: center;
   
    @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2rem;
  }
`

export const TodasSkills = styled.ul`
    display: flex;
    gap: 1rem;
    
    list-style: none;
    @media (max-width: 980px) {
        gap: .2rem;
        flex-wrap: nowrap;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0;
    }

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
   
    input{
        width: 74px;
        aspect-ratio: 1;
        padding: 1rem;
    }
    :hover{
        background-image: url(${fundoSkill});
    }
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
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 330px;
    background-position: bottom;
    background-repeat: no-repeat;
   
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
  background: none;
  color: #818DED;
  cursor: pointer;
  border: solid 1px #818DED;
  border-radius: 5px;
  width: 50%;
  padding: .5rem;
  :hover{
    color: #43D9AD;
    background: linear-gradient(180deg, #C443D9 0%, #4D5BCE 100%);
    border: none;
    color: #FFFFFF;
  }

  @media (max-width: 480px) {
        margin-top: 1rem;
    }

`