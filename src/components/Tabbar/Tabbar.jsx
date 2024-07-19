import React from "react";
import "./tabbar.css";
import HomeIcon from "../../assets/tabHomeIcon.svg";
import ActivitiesIcon from "../../assets/tabActivitiesIcon.svg";
import NotifIcon from "../../assets/tabNotificationIcon.svg";
import ProfileIcon from "../../assets/tabProfileIcon.svg";

const Tabbar = () => {
  return (
    <div className="tabbar">
      <div className="tabbar-home">
        <img src={HomeIcon} alt="home" />
      </div>
      <div className="tabbar-activities">
        <img src={ActivitiesIcon} alt="activities" />
      </div>
      <div className="tabbar-notification">
        <img src={NotifIcon} alt="notifications" />
      </div>
      <div className="tabbar-profile">
        <img src={ProfileIcon} alt="profile" />
      </div>
    </div>
  );
};

export default Tabbar;
