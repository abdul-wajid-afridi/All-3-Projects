import { useState } from "react";
import "./App.css";
import Data from "./Projects/P4-ShowAns/Data";
import Project4 from "./Projects/P4-ShowAns/Project4";
function App() {
  const Component = ({ Que, Ans }) => {
    const [data, setdata] = useState(false);
    // You show use all the usesate for its on fucntions inside its own Functions
    return (
      <>
        <div>
          <p>{Que}</p>
          <button onClick={() => setdata(!data)}>{data ? "+" : "-"}</button>
        </div>
        {data ? <p>{Ans}</p> : ""}
      </>
    );
  };
  return (
    <>
      {Data.map((it) => {
        return (
          <div>
            <Component Que={it.Que} Ans={it.Ans} />
            {/* <Component {...it} /> */}
          </div>
        );
      })}
      {/* <Project4 /> */}
    </>
  );
}

export default App;
