import React, {useState, useEffect} from 'react'


//styled
import {Btn} from './BtnEnglishStyled'

interface ChidrenProps {
    setTradutor: React.Dispatch<React.SetStateAction<boolean>>;
    tradutor: boolean
  }

  


const BtnEnglish: React.FC<ChidrenProps> = ({setTradutor, tradutor}) => {

    const handleTradutor = () => {
        setTradutor(!tradutor)
      }


  return (
    <Btn onClick={handleTradutor}>{tradutor? 'EN': 'PT' }</Btn>
  )
}

export default BtnEnglish