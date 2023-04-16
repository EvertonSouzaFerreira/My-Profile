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
    Skiil, 
    ContainerSkillSelecionada,
    Arco01,
    Arco02,
    Arco03, 
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
            <label htmlFor="js"><img style={{width: '50%'}} src={techs=== 'front'? javaScriptSimbol: nodeSimbol} alt="" /> </label>
            </Skiil>
            <Skiil>
                <input 
                    type="radio" 
                    name='reactJs' 
                    value='reactJs' 
                    checked={isRadioSelected('reactJs')}
                    onChange={handleRadioClick}
                />
                
                <label htmlFor="reactJs"><img style={{width: '50%'}} src={techs=== 'front'? reactSimbol: '???'} alt="" /></label>
            </Skiil>
            <Skiil>
                <input 
                    
                    type="radio" 
                    name='html' 
                    value='htmlBtn' 
                    checked={isRadioSelected('htmlBtn')}
                    onChange={handleRadioClick}
                />
                <label htmlFor="html"><img style={{width: '50%'}} src={techs=== 'front'? htmlSimbol: expressSimbol} alt="" /></label>
            </Skiil>
            <Skiil>
                <input
                    
                    type="radio" 
                    name='css' 
                    value='cssBtn' 
                    checked={isRadioSelected('cssBtn')}
                    onChange={handleRadioClick}
                />
            <label htmlFor="css"><img style={{width: '50%'}} src={techs=== 'front'? cssSimbol: fireaseImg} alt="" /></label>
            </Skiil>
            <Skiil>
                <input
                    
                    type="radio" 
                    name='typeScript' 
                    value='typeScript' 
                    checked={isRadioSelected('typeScript')}
                    onChange={handleRadioClick}
                />
                <label htmlFor="typeScript"><img style={{width: '50%'}} src={techs=== 'front'?typeScriptSimbol: mongoSimbol} alt="" /></label>
            </Skiil>
            <Skiil>
                <input  
                        type="radio" 
                        name='nextJs' 
                        value='nextJs' 
                        checked={isRadioSelected('next')}
                        onChange={handleRadioClick}
                    />
                    <label htmlFor="nextJs"><img style={{width: '50%'}} src={techs=== 'front'? nextSimbol: MySqlImagem} alt="" /></label>
            </Skiil>
            
        </TodasSkills>
       
        
       
        <ContainerSkillSelecionada>
            <Cube techs={techs} selectedRadio={selectedRadio} rotaite={rotaite}/>
            <Arco01  src={anuel01} alt="" />
            <Arco02  src={anuel02} alt="" />
            <Arco03  src={anuel03} alt="" />
        </ContainerSkillSelecionada>
        <BtnSend onClick={handleChangeTech}>{techs=== 'front'? 'setCube(Back-and)': 'setCube(Front-and)'}</BtnSend>
    </ContainerSkills>
  )
}

export default Skills