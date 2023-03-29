import React from 'react'
import fotoMe from '../../imgs/me03edited02.png'
import arrow from '../../imgs/Arrow.png'
import ellips from '../../imgs/Ellipse 5.png'

import {ContainerMain, ContainerImg, ErrowName, Frase, Resumo, MyPhoto} from './MainStyled'

const Main:React.FC = () => {
  return (
    <>
    <ContainerMain>
        <ErrowName>
                <img src={arrow} alt="" />
                <p >Hello I`m <span style={{color:'#7127BA'}}>Everton Ferreira</span> </p> 
        </ErrowName>
        <ContainerImg>
            
            <MyPhoto src={fotoMe} alt="" />
        
        </ContainerImg>
        <Frase>Um Desenvolvedor com o objetivo de
            <h2>Facilita a interação dos <span style={{position: 'relative', color: '#7127BA'}}><img style={{width: '100%', position: 'absolute' }} src={ellips}></img>usuários</span> com o mundo digital</h2>
            <div style={{textAlign: 'left'}}>
    <h2>I'm a Software Enginner.!</h2>
    <p>Atualmente estou a procura de uma empresa que me de uma oportunidade de mostrar tudo o que venho aprimorando nos últimos anos e conseqüentemente crescermos juntos</p>
    
    </div>
        </Frase>
        
    </ContainerMain>
    {/* <Resumo id='about'>
    <p>Minha primeira experiência profissional foi com edições de vídeo.
         Servi as forças armadas durante 3 anos. 
         Após a saída do exército, trabalhei em um 
         escritório de advocacia na área administrativa 
         também por 3 anos. Com o objetivo de suprir 
         minhas despesas iniciei um empreendimento, 
         quando recebi uma proposta para morar na Europa 
         onde tive a oportunidade de aprimorar meu inglês. 
         Atualmente, após o término do ensino superior, 
         estou aplicando trabalhos de freelancer dentro de 
         plataformas em geral, esta foi amaneira mais rapida
         de fazer oque eu amo.</p>
    </Resumo>
     */}
    
    </>
    
  )
}

export default Main


//um desenvolvedo que quer facilitar a interacao dos unuarios com o mundo digital