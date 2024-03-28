import React from "react";

const Products = () => {
  const [itens, setItens] = React.useState(null);
  const data = window.localStorage.getItem("produtos6");
  const produtos = JSON.parse(data);
  console.log(typeof produtos);

  return (
    <div>
      {produtos.map(({ produto, descricao, valor, disponivel }) => {
        return (
          <ul key={produto}>
            <li key={produto}>{produto}</li>
            <li key={produto}>{valor}</li>
            <li key={produto}>{disponivel}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Products;
