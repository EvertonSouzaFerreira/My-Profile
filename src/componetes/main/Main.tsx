import React from 'react'
import Skills from '../skills/Skills'

import {ContainerMain, ContainerCube, Frase, BtnSetTech} from './MainStyled'

interface ChidrensProps{
  tradutor: boolean;
  techs: string
  setTechs: React.Dispatch<React.SetStateAction<string>>;
}

const Main:React.FC<ChidrensProps> = ({tradutor, techs, setTechs}) => {
  return (
    <>
    <ContainerMain>
        
        <ContainerCube>
            
            <Skills techs={techs} setTechs={setTechs}/>
        
        </ContainerCube>
        <Frase>
          <p>Hi all I am</p>
          <h2>Everton Ferreira</h2>
          <h4>&gt; Full-stack <br></br> developer </h4>
            {tradutor?<div>
              <p>// apaixonado por criar experiencias excepcionais na web</p>
              <p>// Como desenvolvedor full-stack, meu foco principal é fornecer experiencias excepcionais para os usuarios em todas as plataformas, sejam elas desktop, tablets ou smartphones.</p>
              <p>// Atualmente atuao utilizando</p>
              <p><span>const </span> <span style={{color: '#80c9f9'}}>FrontEnd</span> = [<span style={{color: '#E99287'}}> HTML5, CSS3, JavaScript, ReactJs, TypeScript, NextJs </span>];</p>
              <p><span>const </span><span style={{color: '#80c9f9'}}> BackEnd</span> = [<span style={{color: '#E99287'}}>NodeJS, Express, FireBase, MongoDB, MySQL</span> ];</p>
              <p><span>const </span> <span style={{color: '#80c9f9'}}>cube</span> = <span style={{color: '#E99287'}}>{techs=== 'front'? "FrontEnd": 'BackEnd'}</span></p>
              <p><span>const </span><span style={{color: '#80c9f9'}}>githubLink</span> = <span style={{color: '#E99287'}}>https://github.com/EvertonSouzaFerreira</span></p>

              {/* <BtnSetTech>SetCube(BackEnd)</BtnSetTech> */}
            </div>: 
              <div>
                    <p>// As a full-stack developer, my primary focus is to create exceptional experiences for users across all platforms, including desktops, tablets, and smartphones.</p>
                    <p>// Currently, I work with a wide range of technologies and frameworks to build robust and scalable web applications</p>
                    <p><span>const </span> <span style={{color: '#80c9f9'}}>FrontEnd</span> = [<span style={{color: '#E99287'}}> HTML5, CSS3, JavaScript, ReactJs, TypeScript, NextJs </span>];</p>
                    <p><span>const </span><span style={{color: '#80c9f9'}}> BackEnd</span> = [<span style={{color: '#E99287'}}>NodeJS, Express, FireBase, MongoDB, MySQL</span> ];</p>
                    <p><span>const </span> <span style={{color: '#80c9f9'}}>cube</span> = <span style={{color: '#E99287'}}>{techs=== 'front'? "FrontEnd": 'BackEnd'}</span></p>
                    <p><span>const </span><span style={{color: '#80c9f9'}}>githubLink</span> = <span style={{color: '#E99287'}}>https://github.com/EvertonSouzaFerreira</span></p>

              </div> 
            }
        </Frase>
        
    </ContainerMain>
    
    
    </>
    
  )
}

export default Main


//um desenvolvedo que quer facilitar a interacao dos unuarios com o mundo digital