import React, {useState, useEffect} from 'react';
import Header from './componetes/header/Header';
import './App.css';
import Main from './componetes/main/Main';
import Skills from './componetes/skills/Skills';
import Cube from './componetes/cube/Cube';
import Projetos from './componetes/projetos/Projetos';
import Contact from './componetes/contact/Contact';
import GlobalStyle from './contents/GlobalStyle';
import About from './componetes/about/About';

function App() {

  const[tradutor, setTradutor] = useState(false)
  const [techs, setTechs] = useState('front')
  
  return (
    <div>
      <GlobalStyle/>
      <Header tradutor={tradutor} setTradutor={setTradutor}/>
      <Main techs={techs} tradutor={tradutor} setTechs={setTechs}/>
      {/* <Skills/> */}
      <Projetos tradutor={tradutor}/>
      <About tradutor={tradutor}/>
      <Contact tradutor={tradutor}/>
    </div>
  );
}

export default App;
