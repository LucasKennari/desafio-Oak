import React from "react";

import CompInputForn from "../compInput/CompInputForn";
import styles from "./compForm.module.css";
import CompBtnForm from "../compButton/CompBtnForm";
import { useNavigate } from "react-router-dom";
import useForm from "../../customHooks/useForm/useForm";
let data = [];

const CompForm = () => {
  const navigate = useNavigate();

  let produto = useForm();
  let valor = useForm();
  let descricao = useForm();
  console.log(produto.value);
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

    // data = {
    //   produto: produto,
    //   descricao: descricao,
    //   valor: valor,
    //   disponivel: disponivel,
    // };

    console.log(e.target.value);
    // navigate("/listProducts");
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
            <button className={styles.btnYes}>Sim</button>
            <button className={styles.btnNo}>Não</button>
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
