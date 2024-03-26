import React from "react";
import styles from "./header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/products">Listar Produtos</a>
          </li>

          <li>
            <a href="/registerProducts">Registrar Produtos</a>
          </li>

          <li>
            <a href="/about">Sobre</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
