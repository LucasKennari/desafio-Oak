import React from "react";
import CompButtonForm from "../compButton/CompButtonForm";
import CompInputForn from "../compInput/CompInputForn";
import styles from "./compForm.module.css";

const inputInterface = [
  {
    id: "produto",
    name: "Nome do produto:",
  },
  {
    id: "descricao",
    name: "Descricão do produto:",
  },
  {
    id: "valor",
    name: "valor do produto:",
  },
  {
    id: "disponivel",
    name: "Disponivel para venda",
  },
];

const CompForm = () => {
  //   const [produto, setProduto] = React.useState;
  //   const [descricao, setDescricao] = React.useState;
  //   const [valor, setValor] = React.useState;
  //   const [disponivel, setDisponivel] = React.useState;

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div>
          {inputInterface.map(({ id, name }) => {
            return (
              <li key={id}>
                <CompInputForn text={name} id={id} />
              </li>
            );
          })}
        </div>
        <div>
          <label htmlFor="">Disponivel:</label>
          <button className={styles.btnYes}>Sim</button>
          <button className={styles.btnNo}>Não</button>
        </div>
        <div>
          <CompButtonForm>Cadastrar Produto</CompButtonForm>
        </div>
      </form>
    </div>
  );
};

export default CompForm;
