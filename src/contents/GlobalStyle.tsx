import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    list-style: none;
  }
  body {
    font-family: 'Fira Code', monospace;
    background: #171717;
    background: linear-gradient(40.2deg, #201625 71.97%, #3A0366 90.2%);
    
  }
`;

export default GlobalStyle;