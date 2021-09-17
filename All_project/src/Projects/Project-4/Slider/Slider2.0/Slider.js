import React, { useState } from "react";
import Data from "../Data";
import SliderComponent from "./SliderComponent";
const Slider = () => {
  const [Index, setIndex] = useState(0);
  const { image, name } = Data[Index];
  setTimeout(() => {
    {
      let Forward = Index + 1;
      if (Forward === Data.length) {
        setIndex(Forward - Data.length);
      } else {
        setIndex(Forward);
      }
    }
  }, 3000);
  return (
    <>
      <SliderComponent image={image} name={name} />
    </>
  );
};

export default Slider;
