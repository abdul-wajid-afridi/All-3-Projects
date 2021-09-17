import React from "react";
import logo from "../Images/amazon.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import CheckOut from "./Pages/AmazonClone/Components/CheckOut";
import App from "../../src/App";
import Home from "../Home";
import { useGlobalContext } from "./Pages/AmazonClone/StateProvider";
const Header = () => {
  const [state, dispatch] = useGlobalContext();
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="header__logo" />
      </Link>
      <div className="header__search">
        <input placeholder="search" className="header__searchInpt" />

        <SearchIcon className="header__search__icon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__option1">hellow</span>
            <span className="header__option2">Sign In</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__option1">Return</span>
          <span className="header__option2">& orders</span>
        </div>
        <div className="header__option">
          <span className="header__option1">Your</span>
          <span className="header__option2">Prime</span>
        </div>
        <div className="header__basketDiv">
          <Link to="/checkout">
            <ShoppingBasketIcon className="header__basket__icon" />
            <div>
              <p style={{ color: "white" }}>{state.basket.length}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
