import React, { useState } from 'react'
import './cube.css'

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

interface ChidrenProps {
    selectedRadio: string
    rotaite: boolean
    techs: string
}

function Cube({selectedRadio, rotaite, techs}: ChidrenProps)  {

  
  return (
    <div className={`container`}>
        <div  style={{animation: rotaite?'animate 4s linear infinite':'none'}} className={`cube ${selectedRadio}`}>
            <div style={{backfaceVisibility: !rotaite?'hidden': 'visible'}}className={techs === 'front'? `face front rotate`: `face front rotate00`}><img src={techs === 'front'? typeScriptSimbol: mongoSimbol} alt="" /></div>
            <div style={{backfaceVisibility: !rotaite?'hidden': 'visible'}}className={techs === 'front'? "face back rotate1": 'face back rotate01'}><img src={techs === 'front'? nextSimbol: MySqlImagem} alt="" /></div>
            <div style={{backfaceVisibility: !rotaite?'hidden': 'visible'}}className={techs === 'front'? "face top rotate2": 'face top rotate02'}><img src={techs === 'front'? javaScriptSimbol: nodeSimbol} alt="" /></div>
            <div style={{backfaceVisibility: !rotaite?'hidden': 'visible'}}className={techs === 'front'? "face rigth rotate3": 'face rigth rotate03'}><img src={techs === 'front'?htmlSimbol:expressSimbol} alt="" /></div>
            <div style={{backfaceVisibility: !rotaite?'hidden': 'visible'}}className={techs === 'front'? "face left rotate4": 'face left rotate04'}><img src={techs === 'front'?cssSimbol: fireaseImg} alt="" /></div>
            <div style={{backfaceVisibility: !rotaite?'hidden': 'visible'}}className={techs === 'front'? "face bottom rotate5": 'face bottom'}><img src={techs === 'front'?reactSimbol: ''} alt="" /></div>
        </div>
    </div>
  )
}

export default Cube