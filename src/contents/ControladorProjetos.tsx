import React from 'react';
import telaPokemon from '../imgs/TelaPokemon.png'
import telaprojetoSneakers from '../imgs/projetoSneakers.png'
import telaProjetoTodo from '../imgs/ProjetoTodo.png'
import telaProjetoLivro from '../imgs/projetoLivro.png'
import telaProjetoMks from '../imgs/Mks.png'
import telaProjetoIbge from '../imgs/Ibge.png'

export const getProjetos = (type: string, isOtherStateTrue: boolean) => {
    switch (type) {
      case "ProjetoPokemon":
        if(isOtherStateTrue){
          return {message: 'Este projeto é uma Pokédex que permite capturar Pokémon por meio de batalhas. Para obter o direito de capturar um Pokémon, é necessário enfrentá-lo em uma batalha. Se o Pokémon for derrotado, você poderá capturá-lo e adicioná-lo à sua Pokédex', tela: telaPokemon, link: 'https://poke-batalha.vercel.app/'};
        }else{
          return {message: 'This project is a Pokédex that allows capturing Pokémon through battles. To earn the right to capture a Pokémon, you need to engage in a battle with it. If the Pokémon is defeated, you can capture it and add it to your Pokédex.', tela: telaPokemon, link: 'https://poke-batalha.vercel.app/'};
        }
        
      case "ProjetoEcommercial":
        if(isOtherStateTrue){
          return {message: 'Este é um projeto de aplicação Front-end que visa fornecer uma experiência de usuário agradável e intuitiva. Ele é composto principalmente por elementos de interface do usuário, como botões, menus e formulários, e usa recursos como design responsivo, animações suaves e transições, cores atraentes e tipografia clara para tornar a navegação e interação com a aplicação mais fácil e agradável.', tela: telaprojetoSneakers, link: 'https://e-comercial.vercel.app/'};
        }else{
          return {message: 'This is a Front-end application project that aims to provide a pleasant and intuitive user experience. It is mainly composed of user interface elements such as buttons, menus, and forms, and uses features such as responsive design, smooth animations and transitions, attractive colors, and clear typography to make navigation and interaction with the application easier and more enjoyable.', tela: telaprojetoSneakers, link: 'https://e-comercial.vercel.app/'};
        }
        
      case "ProjetoTodo":
        if(isOtherStateTrue){
          return {message: 'Este é um projeto de lista de tarefas com vários recursos para tornar a organização de tarefas mais eficiente e fácil. Os usuários podem adicionar, excluir e editar itens, marcar tarefas concluídas. A aplicação também oferece a capacidade de filtrar tarefas que forao feitas ou nao. Em resumo, é uma ferramenta eficaz e fácil de usar para ajudar os usuários a se manterem organizados e produtivos.', tela: telaProjetoTodo, link: 'https://zen-snyder-8ce041.netlify.app'};
        }else{
          return {message: 'This is a to-do list project with various features to make task organization more efficient and easy. Users can add, delete, and edit items, mark tasks as completed. The application also provides the ability to filter tasks based on whether they are done or not. In summary, it is an effective and user-friendly tool to help users stay organized and productive', tela: telaProjetoTodo, link: 'https://zen-snyder-8ce041.netlify.app'};
        }
        
      case "ProjetoLivro":
        if(isOtherStateTrue){
          return {message: 'Este projeto é de um site de vendas de livros que utiliza uma abordagem criativa e interativa para apresentar os livros em 3D. O site emprega tecnologia de animação 3D em conjunto com o recurso hover para permitir que os usuários possam visualizar a parte interna do livro ao passar o mouse sobre a capa.', tela: telaProjetoLivro, link: 'https://evertonsouzaferreira.github.io/projeto-intro-web/'};
        }else{
          return {message: 'This project is for a book sales website that utilizes a creative and interactive approach to showcase books in 3D. The site employs 3D animation technology along with the hover feature to allow users to view the inside of the book by hovering over the cover.', tela: telaProjetoLivro, link: 'https://evertonsouzaferreira.github.io/projeto-intro-web/'};
        }
        
      case "ProjetoIbge":
        if(isOtherStateTrue){
          return {message: 'Este projeto utiliza a API do IBGE para obter informações atualizadas sobre as unidades federativas brasileiras, incluindo municípios, microrregiões, mesorregiões, unidades federativas e regiões.', tela: telaProjetoIbge, link: 'https://projeto-ipan-api-ibge.vercel.app/'};
        }else{
          return {message: 'This project uses the IBGE API to obtain updated information about the Brazilian federative units, including municipalities, microregions, mesoregions, federative units, and regions.', tela: telaProjetoIbge, link: 'https://projeto-ipan-api-ibge.vercel.app/'};
        }
        
      case "ProjetoMks":
        if(isOtherStateTrue){
          return {message: 'Este é um projeto de aplicação Front-end para um E-commerce que faz uso da API de itens tecnológicos. Através da API, o site tem acesso a informações atualizadas sobre diversos produtos tecnológicos, incluindo smartphones, notebooks, tablets, entre outros', tela: telaProjetoMks, link: 'https://mks-frontend-challenge-l3lx.vercel.app/'};
        }else{
          return {message: 'his Front-end E-commerce project utilizes a technological item API to provide up-to-date information on products such as smartphones, notebooks, and tablets. Users can access detailed specifications, prices, and availability, enabling convenient and informed online purchases.', tela: telaProjetoMks, link: 'https://mks-frontend-challenge-l3lx.vercel.app/'};
        }
          
      default:
        return {message: '', tela: telaPokemon, link: ''};
    }
  };