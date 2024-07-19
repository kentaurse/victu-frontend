import React from "react";
import "./userMealsCardStyle.css";
import MoveVideoMock from "../../assets/moveVideoJean.png";

const UserMealsCard = () => {
  return (
    <div className="meal">
      <div className="meal-title">Meals</div>
      <div className="meal-list">
        <div className="meal-card">
          <div className="meal-img">
            <img src={MoveVideoMock} alt="video" />
          </div>
          <div className="meal-card-info">
            <div className="meal-card-title">Workout with Jane</div>
            <div className="meal-card-subtitle">25 mins</div>
          </div>
        </div>
        <div className="meal-card">
          <div className="meal-img">
            <img src={MoveVideoMock} alt="video" />
          </div>
          <div className="meal-card-info">
            <div className="meal-card-title">Workout with Jane</div>
            <div className="meal-card-subtitle">25 mins</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMealsCard;
