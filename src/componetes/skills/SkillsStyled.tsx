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
    
    justify-content: center;
    width: 100%;
    gap: .5rem;
    list-style: none;
   
    @media (max-width: 880px) {
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 480px) {
        gap: .2rem;
        padding: 0;
    }
`
export const Skiil = styled.li`
    width: 44px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
   
    input{
        width: 74px;
        aspect-ratio: 1;
        
    }
    :hover{
        background-image: url(${fundoSkill});
    }

    /* @media (max-width: 880px) {
    
    font-size: smaller;
    align-items: center;
    gap: 3rem;
    padding: 0 1rem 0 1rem;
  } */
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

    @media (max-width: 880px) {
        height: 200px;
        img:first-of-type{
            width: 100%;
        }
    }
   
`

export const Arco01 = styled.img`
    width: 50%;
    position: absolute;
    @media (max-width: 880px) {
                
                width: 100%;
        }
`
export const Arco02 = styled.img`
    width: 60%;
    position: absolute;
    @media (max-width: 880px) {
                
                width: 90%;
        }
`
export const Arco03 = styled.img`
    width: 70%;
    position: absolute;
    @media (max-width: 880px) {
                
                width: 80%;
        }
`

export const BtnSend = styled.button`
  background: #6524AF;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  width: 50%;
  padding: .5rem;
  :hover{
    :hover{
    color: #0D090F;
    background: #493A5A;
    border: none;
    
  }
  }
  @media (max-width: 880px) {
       width: 100%;
    }

  @media (max-width: 480px) {
        margin-top: 1rem;
    }

`