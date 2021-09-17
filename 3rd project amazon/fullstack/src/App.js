import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Products from "./Components/Pages/AmazonClone/Components/Products";
import ball from "./Images/ball.jpg";
import "../src/Components/Pages/AmazonClone/Components/Products.css";
// import Home from "./Components/Pages/Home";
import Home from "./Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import CheckOut from "./Components/Pages/AmazonClone/Components/CheckOut";
import HomeImage from "./Components/Pages/AmazonClone/HomeImage";
import Login from "./Components/Pages/AmazonClone/Components/Login";

function App() {
  return (
    <div className="body">
      {/* //   <div className="homeheader">
    //     <h1>my data</h1>
    //   </div> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <HomeImage />
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
