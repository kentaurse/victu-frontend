import React from "react";
import "../styles/homePageStyle.css";
import Logo from "../assets/fullLogoGrey.svg";
import Tabbar from "../components/Tabbar/Tabbar";
import UserExercisesCard from "../components/UserExercisesCard/UserExercisesCard";
import UserMealsCard from "../components/UserMealsCard/UserMealsCard";
import UserProgramCard from "../components/UserProgramCard/UserProgramCard";
import useFetchUserData from "../components/hooks/useFetchUserData";
import HomeHeader from "../components/HomeHeader/HomeHeader";

const HomePage = () => {
  const userFetchedData = useFetchUserData();

  return (
    <div className="home">
      <div className="home-content">
        <HomeHeader
          userName={userFetchedData?.userFirstName}
          userAvatar={userFetchedData?.userAvatar}
        />
        <UserProgramCard />
        <UserExercisesCard />
        <UserMealsCard />
      </div>
      <Tabbar currentPage={"home"} />
    </div>
  );
};

export default HomePage;
