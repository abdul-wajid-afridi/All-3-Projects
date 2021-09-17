import React, { useState } from "react";
import "./People.css";
import img1 from "../../ASSET/img1.jpg";
import img2 from "../../ASSET/img2.jpg";
import img3 from "../../ASSET/img3.jpg";
import img4 from "../../ASSET/img4.jpg";
import img5 from "../../ASSET/img5.jpg";

const Peoples = () => {
  const ArrayData = [
    { name: "jhon", years: 20, image: img1 },
    { name: "karen", years: 22, image: img2 },
    { name: "zampa", years: 23, image: img3 },
    { name: "michal", years: 24, image: img4 },
    { name: "bravo", years: 25, image: img5 },
  ];
  const [Data, setData] = useState(ArrayData);

  return (
    <div className="card">
      <h3 className="heading3">{Data.length} : Birth Days</h3>
      {Data.map((people) => {
        const { name, years, image } = people;
        return (
          <div className="container">
            <img className="image" src={image} />
            <div className="text-container">
              <p>{name}</p>
              <p>{years}</p>
            </div>
          </div>
        );
      })}
      <button className="btn-clear" onClick={() => setData([])}>
        Clear
      </button>
    </div>
  );
};

export default Peoples;
