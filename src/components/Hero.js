// src/components/Hero.js
import React from 'react';
import styles from '../styles/Hero.module.css';
import heroImage from '../assets/imagem1.jpg'; // Ajuste para a imagem correta

const Hero = () => {
  const handleVolunteerClick = () => {
    alert('Obrigado por querer ser um voluntário!');
  };

  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
      <h1>SEJA UM VOLUNTÁRIO!</h1>
      <p>
        Lorem ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
        e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja
        de tipos e os embaralhou para fazer um livro de modelos de tipos.
      </p>
      <button className={styles.ctaButton} onClick={handleVolunteerClick}>
        Quero ser um Voluntário SOS
      </button>
    </section>
  );
};

export default Hero;