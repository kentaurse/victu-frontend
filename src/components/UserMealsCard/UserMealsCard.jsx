import React from "react";
import Carousel from "../Carousel/Carousel";
import useFetchMealsData from "../hooks/useFetchMealsData";
import SkeletonExerciseCard from "../UserExercisesCard/SkeletonExerciseCard";
import "./userMealsCardStyle.css";

const UserMealsCard = () => {
  const { data, isLoading } = useFetchMealsData();
  
  if(isLoading) { 
    return <SkeletonExerciseCard/>
  }

  return (
    <div className="meal">
      <div className="meal-title">Meals</div>
      <Carousel contentData={data} />
    </div>
  );
};

export default UserMealsCard;
