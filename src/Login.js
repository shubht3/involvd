import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";


function Login() {
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => {
        if (
          e.message ===
          "The password is invalid or the user does not have a password."
        ) {
          alert("Please check your credentials again");
        } 
        else if (
          e.message ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          history.push("/register");
          window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth",
          });
        } else  {
          alert(e.message);
        }
      });
  };

  return (
    <div className="login">
      <img src="https://i.ibb.co/fSJhqM4/Screen-Shot-2020-11-22-at-6-42-40-AM-removebg-preview.png" class="login__logo" />
      <div className="image__container">
      <img src="https://i.ibb.co/NrnGcm3/Screen-Shot-2020-11-22-at-5-49-02-AM.png" class="image__logo"/> 
      
      <div className="login__container">
        <h3>Log in to Involvd</h3>
        <form>
          <center>
            <input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email Address"
            />

          </center>
          <center>
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
          </center>
          <center>
            <button onClick={login} type="submit" class="login__login">
              Log In
            </button>
          </center>
          <center>
            <div class="sideinfo">
            <h5>Use email: admin@gmail.com password:123456</h5>
            </div>
          </center>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;