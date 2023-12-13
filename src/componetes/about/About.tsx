import React from 'react'

//imagens
import me from '../../imgs/me-redondo.png' 

//styled
import {ContainerAbout, DescricaoFoto} from './AboutStyled'

interface ChidrensProps{
    tradutor: boolean;
    
  }

const About:React.FC<ChidrensProps> = ({tradutor}) => {
  return (
    <ContainerAbout>
        {tradutor?<h2>Sobre mim</h2>:<h2>About me</h2>}
        <DescricaoFoto>
            {tradutor? <div className='paragrafo'>
            <p>// Olá, meu nome é Everton e tenho 34 anos. Sou formado em Análise e Desenvolvimento de Software, e desde então tenho me dedicado à área de desenvolvimento web, com foco em Front-end. Sou apaixonado por programação e estou constantemente buscando aprimorar minhas habilidades e conhecimentos.</p>
            <p>// Atualmente, trabalho como desenvolvedor web, onde aplico minhas habilidades em desenvolvimento front-end para criar interfaces interativas e amigáveis para o usuário. Durante minha carreira, tive a oportunidade de participar de diversos projetos, nos quais pude aprimorar minhas habilidades técnicas e adquirir experiência prática.</p>
            <p>// Estou sempre em busca de novos desafios e oportunidades para expandir meu conhecimento na área de desenvolvimento web.</p>
            <p><span>const </span> <span style={{color: '#80c9f9'}}>formação</span> = <span style={{color: '#E99287'}}> Análise e Desenvolvimento de Software </span>;</p>
            <p><span>const </span> <span style={{color: '#80c9f9'}}>cursos</span> = [<span style={{color: '#E99287'}}>Bootcamp Desenvolvimento Web Full-Stack, JavaScript full-stack, Advanced CSS and Sass, JQuery, ReactJS  </span>];</p>
            </div>:
            <div className='paragrafo'>
            <p>// Hello, my name is Everton and I'm 34 years old. I have a degree in Software Analysis and Development, and since then, I have been dedicated to the field of web development, with a focus on Front-end. I'm passionate about programming and I'm constantly seeking to improve my skills and knowledge.</p>
            <p>// Currently, I work as a web developer, where I apply my Front-end development skills to create interactive and user-friendly interfaces. Throughout my career, I have had the opportunity to participate in various projects, allowing me to enhance my technical skills and gain practical experience.</p>
            <p>// I am always looking for new challenges and opportunities to expand my knowledge in the field of web development.</p>
            <p><span>const </span> <span style={{color: '#80c9f9'}}>Education</span> = <span style={{color: '#E99287'}}> Análise e Desenvolvimento de Software </span>;</p>
            <p><span>const </span> <span style={{color: '#80c9f9'}}>Additional Courses</span> = [<span style={{color: '#E99287'}}>Bootcamp Desenvolvimento Web Full-Stack, JavaScript full-stack, Advanced CSS and Sass, JQuery, ReactJS  </span>];</p>
            </div>}
            
            <img src={me} alt="" />
        </DescricaoFoto>
        
    </ContainerAbout>
  )
}

export default About