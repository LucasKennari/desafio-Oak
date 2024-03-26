import React from "react";

import CompInputForn from "../compInput/CompInputForn";
import styles from "./compForm.module.css";
import CompBtnForm from "../compButton/CompBtnForm";
import { useNavigate } from "react-router-dom";

const inputInterface = [
  {
    id: produto,
    name: "Nome do produto:",
  },
  {
    id: descricao,
    name: "Descricão do produto:",
  },
  {
    id: valor,
    name: "Valor do produto:",
  },
  {
    id: disponivel,
    name: "Disponivel para venda",
  },
];
let data = [];

const CompForm = () => {
  const navigate = useNavigate();

  const [produto, setProduto] = React.useState(null);
  const [descricao, setDescricao] = React.useState(null);
  const [valor, setValor] = React.useState(null);
  const [disponivel, setDisponivel] = React.useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    data = {
      produto: produto,
      descricao: descricao,
      valor: valor,
      disponivel: disponivel,
    };

    console.log(e.target.value);
    // navigate("/listProducts");
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div>
          {inputInterface.map(({ id, name }) => {
            return (
              <li key={id}>
                <CompInputForn text={name} id={id} value={valor} />
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
          <CompBtnForm>Cadastrar Produto</CompBtnForm>
        </div>
      </form>
    </div>
  );
};

export default CompForm;
