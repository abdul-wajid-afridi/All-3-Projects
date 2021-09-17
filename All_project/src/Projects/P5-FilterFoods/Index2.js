import React, { useState } from "react";
import "./Styles.css";
import Data from "./Data";
const Index2 = () => {
  const [MenuItems, setMenuItems] = useState(Data);
  const Dinner = (catagory) => {
    if (catagory === "breakfast") {
      setMenuItems(Data.filter((item) => item.catagory === catagory));
    }
    if (catagory === "lunch") {
      setMenuItems(Data.filter((item) => item.catagory === catagory));
    }
    if (catagory === "burger") {
      setMenuItems(Data.filter((item) => item.catagory === catagory));
    }
    if (catagory === "all") {
      return setMenuItems(Data);
    }
    setMenuItems(Data.filter((item) => item.catagory === catagory));
  };
  return (
    <div className="g__body">
      <div className="btn-container">
        <button className="g__btn" onClick={() => Dinner("dinner")}>
          DINNER
        </button>
        <button className="g__btn" onClick={() => Dinner("breakfast")}>
          BREAKFAST
        </button>
        <button className="g__btn" onClick={() => Dinner("burger")}>
          BURGER
        </button>
        <button className="g__btn" onClick={() => Dinner("lunch")}>
          LUNCH
        </button>
        <button className="g__btn" onClick={() => Dinner("all")}>
          ALL
        </button>
      </div>
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        The Foods Filter
      </h3>
      <div className="g__gallary">
        {MenuItems.map((item) => {
          const { id, image, desc, catagory } = item;
          return (
            <div className="g__card" key={id}>
              <img src={image} className="g__image" />
              <h3 className="g__title">{catagory}</h3>
              <h5 className="g__desc">{desc}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index2;
