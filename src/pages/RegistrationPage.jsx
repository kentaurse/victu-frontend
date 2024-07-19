import React from "react";
import InputFieldModule from "../components/InputFieldModule/InputFieldModule";
import UserIcon from "../assets/userIcon.svg";
import PasswordIcon from "../assets/passwordIcon.svg";
import EmailIcon from "../assets/emailIcon.svg";
import GoBackArrow from "../assets/goBackArrow.svg";
import "../styles/registerPageStyle.css";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <div className="register">
      <div className="register-content">
        <Link to="/login" className="register-back-btn">
          <img src={GoBackArrow} alt="arrow" />
        </Link>

        <div className="register-header">
          <div className="register-title">Let’s Get Started</div>
          <div className="register-subtitle">
            Create an account to “Victu” to get all features
          </div>
        </div>

        <div className="register-inputs">
          <InputFieldModule
            placeholder="First Name"
            image={UserIcon}
            type={"text"}
          />
          <InputFieldModule
            placeholder="Last Name"
            image={UserIcon}
            type={"text"}
          />
          <InputFieldModule
            placeholder="Email"
            image={EmailIcon}
            type={"text"}
          />
          <InputFieldModule
            placeholder="Password"
            image={PasswordIcon}
            type={"password"}
          />
          <InputFieldModule
            placeholder="Confirm Password"
            image={PasswordIcon}
            type={"password"}
          />
        </div>

        <div className="register-signup">
          <Link to="/home" className="register-signup-btn">
            Sign Up
          </Link>
        </div>

        <div className="register-signin">
          <span>Already have an account?</span>
          <Link to="/login" className="register-signin-link">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
