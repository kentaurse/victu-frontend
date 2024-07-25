import React from "react";
import "./userMealsCardStyle.css";
import image1 from "../../assets/testPhoto.jpeg";
import Carousel from "../Carousel/Carousel";

const UserMealsCard = () => {
  const mockData = [
    { id: 1, image: image1, title: "Workout with Jane", subtitle: "25 mins" },
    { id: 2, image: image1, title: "Workout with Jane", subtitle: "25 mins" },
    { id: 3, image: image1, title: "Workout with Jane", subtitle: "25 mins" },
    { id: 4, image: image1, title: "Workout with Jane", subtitle: "25 mins" },
    { id: 5, image: image1, title: "Workout with Jane", subtitle: "25 mins" },
    { id: 6, image: image1, title: "Workout with Jane", subtitle: "25 mins" },
  ];

  return (
    <div className="meal">
      <div className="meal-title">Meals</div>
      <Carousel contentData={mockData} />
    </div>
  );
};

export default UserMealsCard;
