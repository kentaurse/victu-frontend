import React from "react";
import GoBackArrow from "../assets/goBackArrow.svg";
import "../styles/registerPageStyle.css";
import { Link } from "react-router-dom";
import RegistrationFields from "../components/RegistrationFields/RegistrationFields";

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
        <RegistrationFields />
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
