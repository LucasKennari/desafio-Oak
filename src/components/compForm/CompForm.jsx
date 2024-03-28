import React from "react";

import CompInputForn from "../compInput/CompInputForn";
import styles from "./compForm.module.css";
import CompBtnForm from "../compButton/CompBtnForm";
import { useNavigate } from "react-router-dom";
import useForm from "../../customHooks/useForm/useForm";
import addItemLocalStorage from "./addItemLocalStorage";

const data = [];

const CompForm = () => {
  const navigate = useNavigate();
  let [disponivel, setDisponivel] = React.useState("");

  let produto = useForm();
  let valor = useForm();
  let descricao = useForm();

  const inputInterface = [
    {
      id: "produto",
      propsName: produto,
      name: "Nome do produto:",
      label: "Nome do produto:",
    },
    {
      id: "descricao",
      propsName: descricao,
      name: "Descricão do produto:",
      label: "Descricão do produto:",
    },
    {
      id: "valor",
      propsName: valor,
      name: "Valor do produto:",
      label: "Valor do produto:",
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();

    data.push({
      id: 0,
      produto: produto.value,
      descricao: descricao.value,
      valor: valor.value,
      disponivel: disponivel,
    });

    let produtoJson = JSON.stringify(data);

    addItemLocalStorage(produtoJson);

    navigate("/products");
  }

  function handleClick(e) {
    e.preventDefault();
    setDisponivel(e.target.innerText);
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div>
          {inputInterface.map(({ id, name, label, propsName }) => {
            return (
              <li key={id}>
                <CompInputForn
                  id={id}
                  label={label}
                  name={name}
                  {...propsName}
                />
              </li>
            );
          })}
        </div>

        <div className={styles.btnDisponivel}>
          <label htmlFor="">
            Disponivel para venda:
            <button className={styles.btnYes} onClick={handleClick}>
              Sim
            </button>
            <button className={styles.btnNo} onClick={handleClick}>
              Não
            </button>
          </label>
        </div>
        <div className={styles.btnCadastrarProd}>
          <CompBtnForm>Cadastrar Produto</CompBtnForm>
        </div>
      </form>
    </div>
  );
};

export default CompForm;
