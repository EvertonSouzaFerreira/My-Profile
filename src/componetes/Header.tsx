import React from 'react'
import logo from '../imgs/Logo.png'
import Cube from './cube/Cube'

// interface ChidrenProps {
//   selectedRadio: string
//   rotaite: boolean
//   techs: string
// }

import { ContainerHeader, Ul, LogoContainer, ImgLogo } from './HeaderStyled'

const Header:React.FC = () => {
  return (
    <ContainerHeader>
      {/* <Cube techs='test' selectedRadio='nome' rotaite/> */}
        <LogoContainer ><ImgLogo src={logo} alt="Logo"/></LogoContainer>
        <Ul>
            <a href='#'>Home</a>
            <a href='#skills'>Skills</a>
            <a href='#projetos'>Projetos</a>
            {/* <a href='#about'>About</a> */}
            <a href='#contact'>Contact</a>
        </Ul>
    </ContainerHeader>
  )
}

export default Header