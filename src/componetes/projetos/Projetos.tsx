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
  CardsCarosel,
  Btns,
  BtnView} from './ProjetosStyled'
import { cursorTo } from 'readline';

const infos =['ProjetoPokemon', 'ProjetoEcommercial', "ProjetoTodo", 'ProjetoLivro', 'ProjetoIbge', 'ProjetoMks']

const Projetos: React.FC =() => {
  const carousel = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>
  const [projetos, setProjetos] = useState(0)
  const [width, setWidth] = useState(0)
  const widthTotal = window.innerWidth;

  
  const handleMoveProject = () => {
    carousel.current && (carousel.current.scrollLeft += width || 0)
  }
  const handleMoveProjectLeft = () => {
    carousel.current && (carousel.current.scrollLeft -= width || 0)
  }
 useEffect(() => {
  carousel.current && setWidth(carousel.current?.offsetWidth)
  console.log(width)
  console.log(widthTotal)
 },[width])

 

  return (
    
  <ContainerProjetosComBtns id='projetos'>   
  <Btns onClick={handleMoveProjectLeft}><SlArrowLeft/></Btns> 
  <ContainerCarousel>
  <motion.div ref={carousel} style={{overflow: 'hidden', }}
   whileTap={{}}
   >
    <div>
    <CardsCarosel
    // drag='x'
    // dragConstraints={{right: 0, left: -width}}
    // initial={{x:500}}
    // animate={{x:0}}
    // transition={{duration:2}}
    >

    {infos.map((card, index)=>{
              return(
                <ContainerProjetos  width={widthTotal-40} key={index}>              
                  <Tela tela={getProjetos(card).tela}/>
                  <ContainerDescricao>
                    <p>{getProjetos(card).message}</p> 
                      <BtnView href={getProjetos(card).link}>view-project</BtnView>
                  </ContainerDescricao>
              </ContainerProjetos>
                
              )
            })}
    
    </CardsCarosel>
    </div>
  </motion.div>
  </ContainerCarousel>

       <Btns onClick={handleMoveProject}><SlArrowRight/></Btns>
    
    </ContainerProjetosComBtns>
          
  )
}

export default Projetos