import React, { useState, useEffect, useRef, RefObject } from 'react'
import { getProjetos } from '../../contents/ControladorProjetos'
import {motion} from 'framer-motion'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import {
  ContainerProjetos, 
  Tela, 
  ContainerDescricao, 
  ContainerCarousel,
  ContainerProjetosComBtns, 
  Btns,
  BtnView} from './ProjetosStyled'
import { cursorTo } from 'readline';

const infos =['ProjetoPokemon', 'ProjetoEcommercial', "ProjetoTodo", 'ProjetoLivro', 'ProjetoIbge', 'ProjetoMks']

const Projetos: React.FC =() => {
  const carousel = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>
  const [projetos, setProjetos] = useState(0)
  const [width, setWidth] = useState(0)
  

  const handleMoveProject = () => {
    carousel.current && (carousel.current.scrollLeft += width || 0)
  }
  const handleMoveProjectLeft = () => {
    carousel.current && (carousel.current.scrollLeft -= width || 0)
  }
 useEffect(() => {
  carousel.current && setWidth(carousel.current?.offsetWidth)
 },[])



  return (
    
  <ContainerProjetosComBtns id='projetos'>   
  <Btns onClick={handleMoveProjectLeft}><SlArrowLeft/></Btns> 
  <ContainerCarousel>
  <motion.div ref={carousel} style={{overflow: 'hidden', cursor: 'grab'}}
   whileTap={{cursor: 'grabbing'}}
   >
    <div>
    <motion.div style={{
      display: 'flex', 
      gap: '1rem', 
      }}
    drag='x'
    dragConstraints={{right: 0, left: -width}}
    initial={{x:500}}
    animate={{x:0}}
    transition={{duration:2}}
    >

    {infos.map((card, index)=>{
              return(
                <ContainerProjetos key={index}>              
                  <Tela tela={getProjetos(card).tela}/>
                  <ContainerDescricao>
                    <p>{getProjetos(card).message}</p> 
                      <BtnView href={getProjetos(card).link}>view-project</BtnView>
                  </ContainerDescricao>
              </ContainerProjetos>
                
              )
            })}
    
    </motion.div>
    </div>
  </motion.div>
  </ContainerCarousel>

       <Btns onClick={handleMoveProject}><SlArrowRight/></Btns>
    
    </ContainerProjetosComBtns>
          
  )
}

export default Projetos