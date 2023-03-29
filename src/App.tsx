import React from 'react';
import Header from './componetes/Header';
import './App.css';
import Main from './componetes/main/Main';
import Skills from './componetes/skills/Skills';
import Cube from './componetes/cube/Cube';
import Projetos from './componetes/projetos/Projetos';
import Contact from './componetes/contact/Contact';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Skills/>
      <Projetos/>
      <Contact/>
    </div>
  );
}

export default App;
