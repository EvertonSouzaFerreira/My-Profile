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

interface ChidrenProps{
  tradutor: boolean
}

const infos =['ProjetoPokemon', 'ProjetoEcommercial', "ProjetoTodo", 'ProjetoLivro', 'ProjetoIbge', 'ProjetoMks']

const Projetos: React.FC<ChidrenProps> =({tradutor}) => {
  const carousel = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>
  const [projetos, setProjetos] = useState(0)
  const [width, setWidth] = useState(0)
  const [isOtherStateTrue, setIsOtherStateTrue] = useState(false);
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
    
    >

    {infos.map((card, index)=>{
      const projeto = getProjetos(card, tradutor); // Chamada da função getProjetos com o estado booleano como argumento
              return(
                <ContainerProjetos  width={widthTotal-40} key={index}>              
                  <Tela tela={projeto.tela}/>
                  <ContainerDescricao>
                    <p>{projeto.message}</p> 
                      <BtnView href={projeto.link}>view-project</BtnView>
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