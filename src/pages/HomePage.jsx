import React from "react";
import "../styles/homePageStyle.css";

import Tabbar from "../components/Tabbar/Tabbar";
import UserExercisesCard from "../components/UserExercisesCard/UserExercisesCard";
import UserMealsCard from "../components/UserMealsCard/UserMealsCard";
import UserProgramCard from "../components/UserProgramCard/UserProgramCard";
import HomeHeader from "../components/HomeHeader/HomeHeader";


const HomePage = () => {
  return (
    <div className="home">
      <div className="home-content">
        <HomeHeader />
        <UserProgramCard />
        <UserExercisesCard />
        <UserMealsCard />
      </div>
      <Tabbar currentPage={"home"} />
    </div>
  );
};

export default HomePage;
