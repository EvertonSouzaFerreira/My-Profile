import React from 'react';
import telaPokemon from '../imgs/TelaPokemon.png'
import telaprojetoSneakers from '../imgs/projetoSneakers.png'
import telaProjetoTodo from '../imgs/ProjetoTodo.png'
import telaProjetoLivro from '../imgs/projetoLivro.png'
import telaProjetoMks from '../imgs/Mks.png'
import telaProjetoIbge from '../imgs/Ibge.png'

export const getProjetos = (type: string) => {
    switch (type) {
      case "ProjetoPokemon":
        return {message: 'Este projeto e uma Pokedex que para captura um pokemon primeiro e necessário batalhar com ele se o mesmo for derrotado você ganha o direito de captura-lo', tela: telaPokemon, link: 'https://poke-batalha.vercel.app/'};
      case "ProjetoEcommercial":
        return {message: 'Este e um projeto de um E-comercial que foi um desafio de proposto pelo site front-and mentor, eu acabei aumentando as funcionalidades destr projeto para parece o mais real possível', tela: telaprojetoSneakers, link: 'https://e-comercial.vercel.app/'};
      case "ProjetoTodo":
        return {message: 'Este e um Todo Lista que podemos não somente adicionar ou apagar novos itens e possível também aditar mostras somente os que foram feitos e muito mais..', tela: telaProjetoTodo, link: 'https://zen-snyder-8ce041.netlify.app'};
      case "ProjetoLivro":
        return {message: 'Este Projeto e de um site de vendas de livros em que os livros são animados em 3D dando assim uma maior interatividade com o usuário', tela: telaProjetoLivro, link: 'https://evertonsouzaferreira.github.io/projeto-intro-web/'};
      case "ProjetoIbge":
        return {message: 'Este Projeto ele faz uma requisição na api do IBGE trazendo todos os estados e municípios e informações sobre eles', tela: telaProjetoIbge, link: 'https://projeto-ipan-api-ibge.vercel.app/'};
      case "ProjetoMks":
          return {message: 'Este e mais um E-comercial desta vez foi feito uma requisição de uma api de itens', tela: telaProjetoMks, link: 'https://mks-frontend-challenge-l3lx.vercel.app/'};
      default:
        return {message: 'Este e um projeto de um E-comercial que foi um desafio de proposto pelo site front-and mentor, eu acabei aumentando as funcionalidades destr projeto para parece o mais real possível', tela: telaPokemon, link: 'https://poke-batalha.vercel.app/'};
    }
  };