import React from "react";
import Carousel from "../Carousel/Carousel";
import useFetchMealsData from "../hooks/useFetchMealsData";
import "./userMealsCardStyle.css";

const UserMealsCard = () => {
  const mealsData = useFetchMealsData();

  return (
    <div className="meal">
      <div className="meal-title">Meals</div>
      <Carousel contentData={mealsData} />
    </div>
  );
};

export default UserMealsCard;
