// src/components/Header.js
import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>ALDEIAS INFANTIS SOS</div>
      <button className={styles.entrar}>Entrar</button>
    </header>
  );
};

export default Header;