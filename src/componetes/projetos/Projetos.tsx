import React, { useState } from 'react'
import { getProjetos } from '../../contents/ControladorProjetos'

import {
  ContainerProjetos, 
  ContainerTela, 
  Tela, 
  ContainerDescricao, 
  Paragrafo, 
  ContainerTitleDescription, 
  ContainerProjetosComBtns, 
  Btns,
  ContainerBtns} from './ProjetosStyled'

const infos =['ProjetoPokemon', 'ProjetoEcommercial', "ProjetoTodo", 'ProjetoLivro', 'ProjetoIbge', 'ProjetoMks']

const Projetos: React.FC =() => {

  const [projetos, setProjetos] = useState(0)

  const handleMoveProject = () => {
    setProjetos(projetos => (projetos + 1)% infos.length)
  }
  const handleMoveProjectLeft = () => {
   
      setProjetos(projetos => (projetos - 1)% infos.length)
    
    
  }

  return (
    
   <ContainerProjetosComBtns id='projetos'>
          <ContainerProjetos>
            <ContainerTitleDescription>
            <p>Featured Project</p>
            <h2>Example Project</h2>
            <ContainerDescricao>
                {getProjetos(infos[projetos]).message}
            </ContainerDescricao>
        </ContainerTitleDescription>
        
        <ContainerTela href={getProjetos(infos[projetos]).link}>
          <Tela tela={getProjetos(infos[projetos]).tela}/>
          {/* <a href={getProjetos(infos[projetos]).link}>Link</a> */}
        </ContainerTela>
        
          </ContainerProjetos>
       <ContainerBtns>
       <Btns onClick={handleMoveProjectLeft}>Seta Esquerda</Btns>
       <Btns onClick={handleMoveProject}>Seta Direita</Btns>
      </ContainerBtns>
      
    </ContainerProjetosComBtns>
      
        
   
  )
}

export default Projetos