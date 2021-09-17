import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import FootBall from "./GamesPages/FootBall";
import VollyBall from "./GamesPages/VollyBall";
import Cricket from "./GamesPages/Cricket";
import React, { useState } from "react";
import img1 from "../../Images/cusit.jpg";
import img2 from "../../Images/cusit.jpg";
import img3 from "../../Images/cusit.jpg";
import img4 from "../../Images/cusit.jpg";
import "./Games.css";
import Login from "./Login";

const Games = () => {
  return (
    <div>
      <div className="gallary__container">
        <Link className="gallary__card" to="/cricket">
          <img src={img1} className="gallary__img" />
          <p>THE Cricket</p>
        </Link>
        <Link className="gallary__card" to="/vollyball">
          <img src={img2} className="gallary__img" />
          <p>THE CUSIT</p>
        </Link>
        <Link className="gallary__card" to="/football">
          <img src={img3} className="gallary__img" />
          <p>THE CUSIT</p>
        </Link>
        <Link className="gallary__card" to="/cricket">
          <img src={img4} className="gallary__img" />
          <p>THE CUSIT</p>
        </Link>
      </div>
    </div>
  );
};

export default Games;
