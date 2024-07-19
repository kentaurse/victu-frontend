import React from "react";
import StartingPageImage from "../assets/startingPageImage.png";
import StartingPageArrow from "../assets/startingPageArrow.svg";
import "../styles/startingPageStyle.css";
import { Link } from "react-router-dom";

const StartingPage = () => {
  return (
    <div className="starting">
      <div className="starting-content">
        <div className="starting-image">
          <img src={StartingPageImage} alt="victu" />
        </div>
        <div className="starting-main">
          <div className="starting-title">Manage your diet program</div>
          <div className="starting-subtitle">
            Control your healthy lifestyle easier with “Victu”
          </div>
          <Link to="/login" className="starting-button">
            <p>Get Started</p>
            <img src={StartingPageArrow} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartingPage;
