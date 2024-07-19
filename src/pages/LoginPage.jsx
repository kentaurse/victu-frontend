import React from "react";
import LoginImage from "../assets/loginImage.png";
import "../styles/loginPageStyle.css";
import { Link } from "react-router-dom";
import EmailAndPasswordFields from "../components/LoginFields/LoginFields";
import Logo from "../assets/LoginLogo.svg";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login-content">
        <div className="login-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="login-image">
          <img src={LoginImage} alt="login" />
        </div>
        <div className="login-title">Welcome back!</div>
        <div className="login-subtitle">
          Log in to your existant account of “Victu”
        </div>
        <EmailAndPasswordFields />
        <div className="login-signup">
          <span>Don’t have an account?</span>
          <Link to="/registration" className="login-signup-link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
