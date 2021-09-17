import React, { useState } from "react";
import Data from "./Data";
const Index = () => {
  const [MenuItems, setMenuItems] = useState(Data);
  const BreakFast = (fast) => {
    setMenuItems(Data.filter((it) => it.catagory === fast));
  };
  const Dinner = (fast) => {
    setMenuItems(Data.filter((it) => it.catagory === fast));
  };
  const Burger = (fast) => {
    setMenuItems(Data.filter((it) => it.catagory === fast));
  };
  const Lunch = (fast) => {
    setMenuItems(Data.filter((it) => it.catagory === fast));
  };
  const AllData = () => {
    setMenuItems(Data.map((it) => it));
  };
  return (
    <div>
      <div className="g__navbar">
        <button className="g__btn" onClick={() => BreakFast("breakfast")}>
          Breakfast
        </button>
        <button className="g__btn" onClick={() => Dinner("dinner")}>
          Dinner
        </button>
        <button className="g__btn" onClick={() => Burger("burger")}>
          Burger
        </button>
        <button className="g__btn" onClick={() => Lunch("lunch")}>
          Lunch
        </button>
        <button className="g__btn" onClick={AllData}>
          All
        </button>
      </div>
      <div className="g__gallary">
        {MenuItems.map((item) => {
          const { image, id, desc, catagory } = item;
          return (
            <div key={id} className="g__card">
              <img src={image} className="g__image" />
              <h3 className="g__title">{catagory}</h3>
              <p className="g__desc">{desc}</p>
              <button className="g__btn">BUY</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
