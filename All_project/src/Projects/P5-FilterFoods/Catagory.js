import React from "react";
import "./Style.css";
const Catagory = ({ catagoryData, onClick }) => {
  return (
    <div className="btn-container">
      {catagoryData.map((btn, index) => {
        return (
          <div>
            <button
              className="filter-btn"
              type="button"
              key={index}
              onClick={() => onClick("btn")}
            >
              {btn}
            </button>
          </div>
        );
      })}

      {/* <button className="g__btn" onClick={() => onClick("dinner")}>
        Dinner
      </button>
      <button className="g__btn" onClick={() => onClick2("lunch")}>
        Lunch
      </button>
      <button className="g__btn" onClick={() => burger("burger")}>
        Burger
      </button>
      <button className="g__btn" onClick={All}>
        All
      </button>
      <button className="g__btn" onClick={() => BreakFast("breakfast")}>
        BreakFast
      </button> */}
    </div>
  );
};

export default Catagory;
