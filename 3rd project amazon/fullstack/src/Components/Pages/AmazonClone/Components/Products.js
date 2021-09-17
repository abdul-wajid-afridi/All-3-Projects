import React from "react";
import "./Products.css";
const Products = ({ id, ratings, image, price, title }) => {
  return (
    <div>
      <div className="card">
        <img src={image} />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{price}</p>
          <p className="card-text ratings">{ratings}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
