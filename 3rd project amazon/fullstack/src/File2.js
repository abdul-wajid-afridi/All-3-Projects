import React from "react";
import "./App.css";
const File2 = ({ Name, Email, button }) => {
  return (
    <div>
      <h1>{Name}</h1>
      <p>{Email}</p>
      <button className="btn_prop">{button}</button>
    </div>
  );
};

export default File2;
