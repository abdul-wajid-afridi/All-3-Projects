import React, { useState } from "react";
import Data from "./Data";

const DeleteBtn = () => {
  const [Btns, setBtns] = useState(Data);
  const [Number, setNumber] = useState("");
  const DeleteHandler = (id) => {
    const UpdateData = Btns.filter((item) => item.id !== id);
    setBtns(UpdateData);
  };
  const FormHandler = () => {
    console.log("form submited");
  };
  return (
    <div>
      <h1>NUMBER : {parseInt(Number)}</h1>

      {console.log(typeof Number)}
      {Btns.map((item) => {
        return (
          <div key={item.id}>
            <button onClick={() => DeleteHandler(item.id)}>{item.btn}</button>
            <form onSubmit={FormHandler}>
              <input
                placeholder="enter a number"
                onChange={(event) => setNumber(event.target.value)}
              />
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default DeleteBtn;
