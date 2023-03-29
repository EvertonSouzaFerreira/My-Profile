import React, { useEffect, useState } from 'react'

//Skiils
import reactSimbol from '../../imgs/ReactSimbol.png'
import javaScriptSimbol from '../../imgs/JavaScripSimbol.png'
import mongoSimbol from '../../imgs/MongoSimbol.png'
import nextSimbol from '../../imgs/NextSimbol.png'
import nodeSimbol from '../../imgs/NodeSimbol.png'
import reduxSimbol from '../../imgs/ReduxSimbol.png'
import cssSimbol from '../../imgs/CssSimbol.png'
import expressSimbol from '../../imgs/ExpressSimbol.png'
import htmlSimbol from '../../imgs/htmlSimbol.png'
import typeScriptSimbol from '../../imgs/TypeScriptSimbol.png'
import fireaseImg from '../../imgs/fireaseImg.png'
import MySqlImagem from '../../imgs/MySqlImagem.png'

//anies
import anuel01 from '../../imgs/primeiroAnel.png'
import anuel02 from '../../imgs/segundoAnel.png'
import anuel03 from '../../imgs/terceiroAnel.png'

//Skill Selecionada
import skillSelecionada from '../../imgs/skillSelecionadaFundo.png'
//Vetores
import primeiroVetorFromRight from '../../imgs/primeiroVetorFromRight.png'

import { ContainerSkills, 
    TodasSkills, 
    Skiil, ImgSelecionada, 
    ContainerSkillSelecionada, 
    ContainerVetores,
    PrimeiroVetorFromRight,
    BtnSend } from './SkillsStyled'
import Cube from '../cube/Cube'

function Skills() {

    const [selectedRadio, setSelectedRadio] = React.useState('')
    const [rotaite, setRotaite] = React.useState(true)

    const [techs, setTechs] = useState('front')


    const isRadioSelected = (value: string): boolean => selectedRadio === value;
    

    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>{  
            setSelectedRadio(e.currentTarget.value) 
            setRotaite(false)
            
    } 


    const handleChangeTech = () => {
        if (techs === 'front'){
            setTechs('back')
            setRotaite(true)
        }else{
            setTechs('front')
            setRotaite(true)
        }
        
    }

      

  return (
    <ContainerSkills id='skills'>
        <div >
        <p >
        {/* Estou procurando ingressar em uma equipe
        multifuncional que valoriza a melhoria da vida das
        pessoas por meio das tecnologias que estao abaixo e outras */}
        Logo abaixo temos algumas skills no qual tenho conhecimentos solido muitas aprendi na faculdade e outras
em cursos extras no momento esta no display as skills front-and para verificar as
skills back-and click no botão abaixo
        </p> 
        <BtnSend onClick={handleChangeTech}>{techs=== 'front'? 'back': 'front'}</BtnSend>
        <TodasSkills>
            

            <Skiil>
            <input 
                type="radio" 
                name='javaScript' 
                id='js'
                value='javaScript' 
                checked={isRadioSelected('javaScript')}
                onChange={handleRadioClick}
            />
            <label htmlFor="js"><img src={techs=== 'front'? javaScriptSimbol: nodeSimbol} alt="" /> </label>
            </Skiil>
            <Skiil>
                <input 
                    type="radio" 
                    name='reactJs' 
                    value='reactJs' 
                    checked={isRadioSelected('reactJs')}
                    onChange={handleRadioClick}
                />
                
                <label htmlFor="reactJs"><img src={techs=== 'front'? reactSimbol: '???'} alt="" /></label>
            </Skiil>
            <Skiil>
                <input 
                    
                    type="radio" 
                    name='html' 
                    value='htmlBtn' 
                    checked={isRadioSelected('htmlBtn')}
                    onChange={handleRadioClick}
                />
                <label htmlFor="html"><img src={techs=== 'front'? htmlSimbol: expressSimbol} alt="" /></label>
            </Skiil>
            <Skiil>
                <input
                    
                    type="radio" 
                    name='css' 
                    value='cssBtn' 
                    checked={isRadioSelected('cssBtn')}
                    onChange={handleRadioClick}
                />
            <label htmlFor="css"><img src={techs=== 'front'? cssSimbol: fireaseImg} alt="" /></label>
            </Skiil>
            <Skiil>
                <input
                    
                    type="radio" 
                    name='typeScript' 
                    value='typeScript' 
                    checked={isRadioSelected('typeScript')}
                    onChange={handleRadioClick}
                />
                <label htmlFor="typeScript"><img src={techs=== 'front'?typeScriptSimbol: mongoSimbol} alt="" /></label>
            </Skiil>
            <Skiil>
                <input  
                        type="radio" 
                        name='nextJs' 
                        value='nextJs' 
                        checked={isRadioSelected('next')}
                        onChange={handleRadioClick}
                    />
                    <label htmlFor="nextJs"><img src={techs=== 'front'? nextSimbol: MySqlImagem} alt="" /></label>
            </Skiil>
            {/* <Skiil><img src={nodeSimbol} alt="" />
                <input type="radio" 
                        name='nodeJs' 
                        value='nodeJs' 
                        checked={isRadioSelected('nodeJs')}
                        onChange={handleRadioClick}
                    />
            </Skiil> */}
            {/* <Skiil><img src={expressSimbol} alt="" />
                <input type="radio" 
                        name='express' 
                        value='express' 
                        checked={isRadioSelected('express')}
                        onChange={handleRadioClick}
                    />
            </Skiil> */}
            {/* <Skiil><img src={mongoSimbol} alt="" />
                <input type="radio" 
                        name='mongoDb' 
                        value='mongoDb' 
                        checked={isRadioSelected('mongoDb')}
                        onChange={handleRadioClick}
                    />
            </Skiil> */}
        </TodasSkills>
        </div>
        
        <ContainerVetores>
            {/* <PrimeiroVetorFromRight src={primeiroVetorFromRight} alt="" /> */}
        </ContainerVetores>
        <ContainerSkillSelecionada>
            <Cube techs={techs} selectedRadio={selectedRadio} rotaite={rotaite}/>
            <img style={{position: 'absolute', width: '80%'}} src={anuel01} alt="" />
            <img style={{position: 'absolute', width: '90%'}} src={anuel02} alt="" />
            <img style={{position: 'absolute', width: '100%'}} src={anuel03} alt="" />
        </ContainerSkillSelecionada>
        
    </ContainerSkills>
  )
}

export default Skills