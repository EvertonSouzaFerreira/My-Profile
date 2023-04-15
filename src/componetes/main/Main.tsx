import React from 'react'
import fotoMe from '../../imgs/me03edited02.png'
import arrow from '../../imgs/Arrow.png'
import ellips from '../../imgs/Ellipse 5.png'
import Skills from '../skills/Skills'

import {ContainerMain, ContainerCube, Frase, BtnSetTech} from './MainStyled'

const Main:React.FC = () => {
  return (
    <>
    <ContainerMain>
        
        <ContainerCube>
            
            <Skills/>
        
        </ContainerCube>
        <Frase>
          <p>Hi all I am</p>
          <h2>Everton Ferreira</h2>
          <h3>&gt; Full-stack <br></br> developer </h3>
            <div>
              <p>// apaixonado por criar experiencias excepcionais na web</p>
              <p>// Como desenvolvedor full-stack, meu foco principal é fornecer experiencias excepcionais para os usuarios em todas as plataformas, sejam elas desktop, tablets ou smartphones.</p>
              <p>// Atualmente atuao utilizando</p>
              <p><span>const </span> <span style={{color: '#80c9f9'}}>FrontEnd</span> = [<span style={{color: '#E99287'}}> HTML5, CSS3, JavaScript, ReactJs, TypeScript, NextJs </span>];</p>
              <p><span>const </span><span style={{color: '#80c9f9'}}> BackEnd</span> = [<span style={{color: '#E99287'}}>NodeJS, Express, FireBase, MongoDB, MySQL</span> ];</p>
              <p><span>const </span> <span style={{color: '#80c9f9'}}>cube</span> = <span style={{color: '#E99287'}}>FrontEnd</span></p>
              <p><span>const </span><span style={{color: '#80c9f9'}}>githubLink</span> = <span style={{color: '#E99287'}}>https://github.com/EvertonSouzaFerreira</span></p>

              {/* <BtnSetTech>SetCube(BackEnd)</BtnSetTech> */}
            </div>
        </Frase>
        
    </ContainerMain>
    
    
    </>
    
  )
}

export default Main


//um desenvolvedo que quer facilitar a interacao dos unuarios com o mundo digital