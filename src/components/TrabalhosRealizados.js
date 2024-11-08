// src/components/TrabalhosRealizados.js
import React from 'react';
import styles from '../styles/TrabalhosRealizados.module.css';
import imagem1 from '../assets/imagem1.jpg'; // Primeira imagem
import imagem2 from '../assets/imagem2.jpg'; // Segunda imagem
import imagem3 from '../assets/imagem3.jpg'; // Terceira imagem
import imagem4 from '../assets/imagem4.jpg'; // Quarta imagem

const TrabalhosRealizados = () => {
  const trabalhos = [
    {
      imgSrc: imagem3,
      title: "Doação de brinquedo em Taguatinga",
      description: "Lorem ipsum é simplesmente uma simulação de texto da indústria tipográfica."
    },
    {
      imgSrc: imagem2,
      title: "Distribuição de alimentos",
      description: "Lorem ipsum é simplesmente uma simulação de texto da indústria tipográfica."
    },
    {
      imgSrc: imagem4,
      title: "Festa de Natal para Crianças",
      description: "Lorem ipsum é simplesmente uma simulação de texto da indústria tipográfica."
    },
    
  ];

  return (
    <section className={styles.trabalhosRealizados}>
      <h2>Trabalhos Realizados</h2>
      {trabalhos.map((trabalho, index) => (
        <div className={styles.trabalho} key={index}>
          <img src={trabalho.imgSrc} alt={trabalho.title} />
          <div>
            <h3>{trabalho.title}</h3>
            <p>{trabalho.description}</p>
            <button className={styles.saibaMais}>Saiba mais</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TrabalhosRealizados;

