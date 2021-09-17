import React, { useState } from "react";
import List from "./List";
import "./Styles.css";
const MainApp = () => {
  const [Name, SetName] = useState("");
  const [ListData, SetListData] = useState([""]);
  const FormHandler = (e) => {
    e.preventDefault();
    if (!Name) {
      alert("please fill it first");
    } else {
      const NewData = [Name, ...ListData];
      SetListData(NewData);
      SetName("");
    }
  };
  return (
    <section className="body">
      <div className="header">
        <h3 className="header-title">The Grocery App</h3>
      </div>
      <div className="main-container">
        <div className="grocery-container">
          <h3 className="header-title">The Grocery Items</h3>
          <form className="form-container" onSubmit={FormHandler}>
            <input
              placeholder="e.g eggs"
              className="grocery-input"
              value={Name}
              onChange={(e) => SetName(e.target.value)}
            />
            <button className="btn-submit">Submit</button>
          </form>
          <List items={ListData} />
        </div>
      </div>
    </section>
  );
};

export default MainApp;
