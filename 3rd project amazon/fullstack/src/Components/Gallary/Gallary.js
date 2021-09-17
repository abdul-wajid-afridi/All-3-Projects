import React from "react";
import "./Gallary.css";
const Gallary = ({ image, name, desc, price, id }) => {
  return (
    <>
      <div className="card">
        <div className="desc">
          <p>{id}</p>
          <h3>{name}</h3>
          <p>{desc}</p>
          <p>{price}</p>
        </div>
        <img src={image} className="img" />
        <button className="bnt-gallary">BUY</button>
      </div>
    </>
  );
};

export default Gallary;
