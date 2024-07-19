import React from "react";
import InputFieldModule from "../components/InputFieldModule/InputFieldModule";
import UserIcon from "../assets/userIcon.svg";
import PasswordIcon from "../assets/passwordIcon.svg";
import LoginImage from "../assets/loginImage.png";
import "../styles/loginPageStyle.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login-content">
        <div className="login-image">
          <img src={LoginImage} alt="login" />
        </div>
        <div className="login-title">Welcome back!</div>
        <div className="login-subtitle">
          Log in to your existant account of “Victu”
        </div>

        <div className="login-main">
          <div className="login-inputs">
            <InputFieldModule
              placeholder="Email"
              image={UserIcon}
              type={"text"}
            />
            <InputFieldModule
              placeholder="Password"
              image={PasswordIcon}
              type={"password"}
            />
          </div>
          <Link to="/home" className="login-signin">Sign In</Link>
        </div>

        <div className="login-signup">
          <span>Don’t have an account?</span>
          <Link to="/registration" className="login-signup-link">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
