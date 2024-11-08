// src/components/Footer.js
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contato}>
        <h3>Informações de Contato</h3>
        <p>📞 4003-5528</p>
        <p>📧 faleconosco@aldeiasinfantis.org.br</p>
      </div>
      <div className={styles.ajuda}>
        <h3>Como Ajudar</h3>
        <ul>
          <li>❇ Torne-se um Amigo SOS</li>
          <li>❇ Aumente sua Doação</li>
          <li>❇ Inclua uma Doação Única</li>
          <li>❇ Seja um Voluntário</li>
          <li>❇ Torne-se uma Empresa Amiga SOS</li>
        </ul>
      </div>
      <div className={styles.newsletter}>
        <h3>Assinar Nossa Newsletter</h3>
        <input type="email" placeholder="Digite seu e-mail" />
        <button>Assinar</button>
      </div>
    </footer>
  );
};

export default Footer;