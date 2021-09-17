import React from "react";
import ball from "../Images/ball.jpg";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Anouncements from "./Pages/GamesPages/Anouncements";
import Games from "./Pages/Games";
import Login from "./Pages/Login";
import Schedule from "./Pages/Schedule";
import Cricket from "./Pages/GamesPages/Cricket";
import VollyBall from "./Pages/GamesPages/VollyBall";
import FootBall from "./Pages/GamesPages/FootBall";

const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <a className="navbar-brand" href="">
            <img src={ball} className="ball" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/anouncements">
                  ANOUNCEMENTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/games">
                  GAMES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/schedule">
                  SCHEDULES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  LOGIN
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/anouncements" component={Anouncements} />
          <Route path="/games" component={Games} />
          <Route path="/login" component={Login} />
          <Route path="/schedule" component={Schedule} />

          <Route path="/cricket" exact={true}>
            <Cricket />
          </Route>
          <Route path="/vollyball">
            <VollyBall />
          </Route>
          <Route path="/football">
            <FootBall />
          </Route>
          <Route path="/cricket">
            <Cricket />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
