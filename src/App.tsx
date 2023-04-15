import React from 'react';
import Header from './componetes/header/Header';
import './App.css';
import Main from './componetes/main/Main';
import Skills from './componetes/skills/Skills';
import Cube from './componetes/cube/Cube';
import Projetos from './componetes/projetos/Projetos';
import Contact from './componetes/contact/Contact';
import GlobalStyle from './contents/GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Main/>
      {/* <Skills/> */}
      <Projetos/>
      <Contact/>
    </div>
  );
}

export default App;
