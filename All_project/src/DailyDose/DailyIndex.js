import React, { useState } from "react";
import Data from "./Data";

const DailyIndex = () => {
  const [MyData, setMyData] = useState(Data);
  const FilterHandler = (catag) => {
    if (catag === "dinner") {
      setMyData(Data.filter((item) => item.catagory === catag));
    }
    if (catag === "lunch") {
      const Dinner = Data.filter((item) => item.catagory === catag);

      setMyData(Dinner);
    }
    if (catag === "burger") {
      const Dinner = Data.filter((item) => item.catagory === catag);

      setMyData(Dinner);
    }
    if (catag === "breakfast") {
      const Dinner = Data.filter((item) => item.catagory === catag);
      setMyData(Dinner);
    }
    if (catag === "all") {
      setMyData(Data.filter((item) => item));
    }
  };
  return (
    <div className="g__body">
      <div className="g__navbar">
        <button onClick={() => FilterHandler("all")} className="g__btn">
          ALL
        </button>
        <button onClick={() => FilterHandler("dinner")} className="g__btn">
          Dinner
        </button>
        <button onClick={() => FilterHandler("breakfast")} className="g__btn">
          BREAKFAST
        </button>
        <button onClick={() => FilterHandler("lunch")} className="g__btn">
          LUNCH
        </button>
        <button onClick={() => FilterHandler("burger")} className="g__btn">
          BURGER
        </button>
      </div>
      <h3>Filter The Data</h3>
      <div className="g__gallary">
        {MyData.map((items) => {
          const { id, image, catagory, desc } = items;
          return (
            <div className="g__card">
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

export default DailyIndex;
