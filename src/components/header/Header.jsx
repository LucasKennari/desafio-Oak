import React from "react";
import styles from "./header.module.css";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="registerProducts">Registrar Produto</NavLink>
        <NavLink to="products">Listar Produtos</NavLink>
        <NavLink to="about">Sobre</NavLink>
      </nav>
    </header>
  );
};

export default Header;
