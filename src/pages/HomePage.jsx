import React from "react";
import "../styles/homePageStyle.css";
import Logo from "../assets/fullLogoGrey.svg";
import Tabbar from "../components/Tabbar/Tabbar";
import UserExercisesCard from "../components/UserExercisesCard/UserExercisesCard";
import UserMealsCard from "../components/UserMealsCard/UserMealsCard";
import UserProgramCard from "../components/UserProgramCard/UserProgramCard";
import HomeAvatar from "../assets/avatarHome.png";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="home-header">
          <div className="home-title">
            <div className="home-username">Hi Klare</div>
            <div className="home-subtitle">
              Have a productive and joyous day
            </div>
          </div>
          <div className="home-avatar">
            <img src={HomeAvatar} alt="avatar" />
          </div>
        </div>
        <UserProgramCard />
        <UserExercisesCard />
        <UserMealsCard />
      </div>
      <Tabbar />
    </div>
  );
};

export default HomePage;
