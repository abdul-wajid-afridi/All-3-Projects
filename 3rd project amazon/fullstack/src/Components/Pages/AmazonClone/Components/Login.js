import React, { useState } from "react";
import "./Login.css";
import logo from "../../../../Images/amazon2.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../../../Firebase/Confiq";
const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const history = useHistory();
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(Email, Password)
      .then((auth) => {
        if (auth) {
          history.push("./checkout");
        }
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(Email, Password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login__container">
      <Link to="/">
        <img src={logo} className="login__image" />
      </Link>
      <form className="form">
        <h2>Sign-In</h2>
        <h5>Email</h5>
        <input
          placeholder="Email"
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h5>password</h5>
        <input
          placeholder="password"
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={signIn} className="login-btn">
          Sign in
        </button>
        <p>
          Ut voluptate id laboris consequat voluptate tempor labore est laboris
          irure cillum consectetur pariatur exercitation. Veniam culpa qui .
        </p>
        <button onClick={register} className="register-btn">
          Create your Amozon Acount
        </button>
      </form>
    </div>
  );
};

export default Login;
