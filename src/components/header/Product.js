import React from "react";
import "./Header.scss";

const Product = (props) => {
  const { product, onAdd } = props;

  return (
    <div className="product_list">
      <img src={product.image} alt={product.name} className="product_img" />
      <h3>{product.name}</h3>
      <h4>${product.price}</h4>
      <div>
        <button className="add_btn" onClick={() => onAdd(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
