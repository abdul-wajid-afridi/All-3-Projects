import React, { useState } from "react";
import Component from "./Component";
import Data from "./Data";
import "./Project4.css";

const Project4 = () => {
  // const [Answer, setAnswer] = useState();
  return (
    <div>
      <h3 className="heading-3">Questions and Answers</h3>
      <hr />
      {Data.map((Ans) => {
        return (
          <div key={Ans.id}>
            {/* <Component {...Ans} /> */}
            {/** we can also write it like this with spread operators */}

            <Component Que={Ans.Que} Ans={Ans.Ans} />
            {/** we can also write it like this but the best is Up */}
          </div>
        );
      })}
    </div>
  );
};

export default Project4;
