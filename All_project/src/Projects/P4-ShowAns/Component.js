import React, { useState } from "react";
import "./Project4.css";
const Component = ({ Que, Ans }) => {
  const [ShowAns, setShowAns] = useState(false);
  return (
    <div className="Ans-container">
      <h3 className="que">
        {Que}
        <span>
          <button className="pls" onClick={() => setShowAns(!ShowAns)}>
            {ShowAns ? (
              <i className="fas fa-minus ngt">-</i>
            ) : (
              <i className="fas fa-plus pls">+</i>
            )}
          </button>
        </span>
      </h3>
      {ShowAns ? <p className="ans"> {Ans}</p> : ""}
      {/**we can also write it like this ShowAns && <p className="ans"> {Ans}</p> */}
    </div>
  );
};

export default Component;
