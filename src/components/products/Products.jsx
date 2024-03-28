import React from "react";
import ProductsItem from "./productsItem/ProductsItem";

const Products = () => {
  const [itens, setItens] = React.useState(null);
  const data = window.localStorage.getItem("produtos");
  const produtos = JSON.parse(data);

  return (
    <div>
      {produtos.map((item) => {
        return (
          <li key={item.produto}>
            <ProductsItem {...item} />
          </li>
        );
      })}
    </div>
  );
};

export default Products;
