import React, {useState, useEffect} from 'react'

import logo from '../../imgs/Logo.png'
import Cube from '../cube/Cube'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { SiMicrosofttranslator } from 'react-icons/si';
import {TfiWorld} from 'react-icons/tfi'
import { ContainerHeader, Ul, LogoContainer, ImgLogo, MenuHamburg} from './HeaderStyled'
import BtnEnglish from '../btnEnglish/BtnEnglish';


interface ChidrenProps {
  setTradutor: React.Dispatch<React.SetStateAction<boolean>>;
  tradutor: boolean
}






function Header ({setTradutor, tradutor}: ChidrenProps) {
  const [isHamburgMenu, setIsHamburgMenu] = useState<boolean>(false);
  const [menuShow, setMenuShow] = useState<boolean>(false);


  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 480) {
      setIsHamburgMenu(true);
      setMenuShow(false)
    } else {
      setMenuShow(true)
      setIsHamburgMenu(false);
    }
  }

  useEffect(() => {
    handleResize(); // Executa a função quando o componente é montado
    window.addEventListener('resize', handleResize); // Adiciona um listener para redimensionamento
    return () => window.removeEventListener('resize', handleResize); // Remove o listener quando o componente é desmontado
  }, []);

  const handleMenuShow = () => {
    setMenuShow(!menuShow)
  }

  return (
    <ContainerHeader>
      {/* <Cube techs='test' selectedRadio='nome' rotaite/> */}
        <LogoContainer >// Everton-Ferreira</LogoContainer>
       {isHamburgMenu &&<MenuHamburg onClick={handleMenuShow}>{menuShow?<GrClose/>: <GiHamburgerMenu/>}</MenuHamburg>}
        {menuShow && <Ul>
            <a href='#'>_Hello</a>
            <a href='#projetos'>_Projects</a>
            <a href='#contact'>_Contact</a>
            <div>
              <TfiWorld style={{width: '30px'}}/>
              <BtnEnglish  setTradutor={setTradutor} tradutor={tradutor}/>
            </div>
            
        </Ul>}
    </ContainerHeader>
  )
}

export default Header