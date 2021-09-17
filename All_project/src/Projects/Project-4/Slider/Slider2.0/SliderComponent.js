import React from "react";
import "./Style.css";
const SliderComponent = ({ name, image }) => {
  return (
    <div className="card-img">
      <img src={image} className="image" />
      <h3 className="name">{name}</h3>
    </div>
  );
};

export default SliderComponent;
