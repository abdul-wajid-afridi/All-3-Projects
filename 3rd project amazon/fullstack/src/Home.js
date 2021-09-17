import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";
import Footer from "./Components/Footer";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Products from "./Components/Pages/AmazonClone/Components/Products";
import ball from "./Images/ball.jpg";
import "../src/Components/Pages/AmazonClone/Components/Products.css";
import Gallary from "./Components/Gallary/Gallary";
import Gallary2 from "./Components/Gallary/Gallary-2";
import mic from "./Images/mic.jpg";
import screen from "./Images/scren.jpg";
import watch from "./Images/watch.jpg";
import laptop from "./Images/laptop (1).jpg";
import Gallary1 from "./Components/Gallary/gallary-1";
function Home() {
  return (
    <div className="body">
      <div className="gallary">
        <Gallary2
          id="1"
          image={laptop}
          name="Red Ball"
          desc="***"
          price={"$12"}
        />
        <Gallary2 id="2" image={mic} name="Red Ball" desc="***" price={"$12"} />
        <Gallary
          id="3"
          image={watch}
          name="Red Ball"
          desc="***"
          price={"$12"}
        />
        <Gallary
          id="4"
          image={screen}
          name="Red Ball"
          desc="***"
          price={"$12"}
        />
        <Gallary
          id="5"
          image={laptop}
          name="Red Ball"
          desc="***"
          price={"$12"}
        />
        <Gallary1 id="6" image={mic} name="Red Ball" desc="***" price={"$12"} />
      </div>
    </div>
  );
}

export default Home;
