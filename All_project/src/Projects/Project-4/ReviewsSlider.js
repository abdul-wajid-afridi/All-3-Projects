import React, { useState } from "react";
import Person from "./Person";
import "./Styles.css";

const ReviewsSlider = () => {
  const [Index, setIndex] = useState(0);
  const { id, Name, Job, Text, Image } = Person[Index];
  const Forward = () => {
    const Forwarded = Index + 1;
    if (Forwarded == Person.length) {
      setIndex(Index - 3);
    } else {
      setIndex(Forwarded);
    }
  };
  const Prev = () => {
    setIndex((index) => {
      let NewIndex = index - 1;
      // return NewIndex;
      if (NewIndex < 0) {
        return Person.length - 1;
      } else {
        return NewIndex;
      }
    });
    // const Previus = Index - 1;
    // // setIndex(Previus);
    // // console.log(Previus);
    // if (Person == -1) {
    //   setIndex(Person.length);
    // } else {
    //   setIndex(Previus);
    // }
  };
  const RandomNumber = () => {
    const Rand = Math.random();
    const fixed = Math.floor(Rand * Person.length);
    setIndex(fixed);
  };
  setTimeout(() => {
    Forward();
  }, 2000);
  return (
    <div className="container">
      <h1>
        Reviews Slider
        <span>
          <hr />
        </span>
      </h1>
      <div className="card">
        <img src={Image} className="img" />
        <p>{id}</p>
        <h3>{Name}</h3>
        <p1>{Job}</p1>
        <p>{Text}</p>

        <div>
          <button onClick={Prev} className="arrow">
            <i className="fas fa-arrow-left" />
          </button>
          <button onClick={Forward} className="arrow">
            <i className="fas fa-arrow-right" />
          </button>
        </div>
        <button onClick={RandomNumber} className="rand-btn">
          Surprise
        </button>
      </div>
    </div>
  );
};

export default ReviewsSlider;
