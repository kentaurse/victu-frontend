import React from "react";
import "./tabbar.css";
import HomeIcon from "../../assets/tabHomeIcon.svg";
import ActivitiesIcon from "../../assets/tabActivitiesIcon.svg";
import NotifIcon from "../../assets/tabNotificationIcon.svg";
import ProfileIcon from "../../assets/tabProfileIcon.svg";
import { Link } from "react-router-dom";

const Tabbar = ({ currentPage }) => {
  return (
    <div className="tabbar">
      <Link to="/home" className="tabbar-home">
        <img
          src={HomeIcon}
          alt="home"
          style={{
            filter:
              currentPage === "home"
                ? "invert(73%) sepia(48%) saturate(3400%) hue-rotate(160deg) brightness(700%) contrast(80%)"
                : "none",
          }}
        />
      </Link>
      <Link to="/activities" className="tabbar-activities">
        <img
          src={ActivitiesIcon}
          alt="activities"
          style={{
            filter:
              currentPage === "activities"
                ? "invert(73%) sepia(48%) saturate(3400%) hue-rotate(160deg) brightness(700%) contrast(80%)"
                : "none",
          }}
        />
      </Link>
      <Link to="/notifications" className="tabbar-notification">
        <img
          src={NotifIcon}
          alt="notifications"
          style={{
            filter:
              currentPage === "notifications"
                ? "invert(73%) sepia(48%) saturate(3400%) hue-rotate(160deg) brightness(700%) contrast(80%)"
                : "none",
          }}
        />
      </Link>
      <Link to="/profile" className="tabbar-profile">
        <img
          src={ProfileIcon}
          alt="profile"
          style={{
            filter:
              currentPage === "profile"
                ? "invert(73%) sepia(48%) saturate(3400%) hue-rotate(160deg) brightness(700%) contrast(80%)"
                : "none",
          }}
        />
      </Link>
    </div>
  );
};

export default Tabbar;
