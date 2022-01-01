import React from "react";
import Product from "../header/Product";
import "./Main.scss";
const Main = (props) => {
  const { products,onAdd } = props;
  return (
    <div className="main_hero">
      <h2>Products</h2>
        <div className="products_list">
          {products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}/>
          ))}
        </div>
       
      </div>
  );
};

export default Main;
