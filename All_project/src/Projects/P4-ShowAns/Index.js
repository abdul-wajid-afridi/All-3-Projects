import React, { useState } from "react";

const Index = () => {
  const [Data, setData] = useState(false);
  const DataHandler = () => {
    setData(!Data);
  };
  return (
    <div>
      <h1>{Data && "the ans is that i am fine and how about u"}</h1>
      <button onClick={DataHandler}>{Data ? "hide" : "show"}</button>
    </div>
  );
};

export default Index;
