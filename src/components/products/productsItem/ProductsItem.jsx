import React from "react";
import styles from "./productsItem.module.css";
const ProductsItem = ({ produto, descricao, valor, disponivel }) => {
  return (
    <div className={styles.containerItem}>
      <h4>{produto}</h4>
      <p> {descricao}</p>
      <p>{valor}</p>
      {disponivel == "Sim" ? (
        <label className={styles.disponivel}>Disponivel</label>
      ) : (
        <label className={styles.indisponivel}>Indisponivel</label>
      )}
    </div>
  );
};

export default ProductsItem;

// produto={produto} descricao={descricao} valor={valor} disponivel
