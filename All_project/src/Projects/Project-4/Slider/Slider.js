import React, { useState } from "react";
import Data from "./Data";
import "./Styles.css";
const Slider = () => {
  const [slide, setSlide] = useState(0);
  const { Name, Text, Image } = Data[slide];
  setTimeout(() => {
    SlideHandler();
  }, 2000);
  const SlideHandler = () => {
    let slider = slide + 1;
    if (slider == Data.length) {
      setSlide(slider - Data.length);
    } else {
      setSlide(slider);
    }
  };
  return (
    <div className="img-container">
      <img src={Image} className="imag" />
      <p className="p-tag"> {Name}</p>
      <p className="text">{Text}</p>

      <button className="next-btn" onClick={SlideHandler}>
        Next
      </button>
    </div>
  );
};

export default Slider;
