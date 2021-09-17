import React from "react";
import ReactTyped from "react-typed";

const Home = () => {
  return (
    <div>
      <div className="container-wraper">
        <div className="inside-text">
          <h1>Wellcome to cusit sport managment system</h1>
          <ReactTyped
            strings={[
              "wellcome to",
              "CUSIT sports managment system",
              "good to see you here",
            ]}
            className="typed-text"
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
