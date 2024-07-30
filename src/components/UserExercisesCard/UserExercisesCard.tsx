import React from "react";
import "./userExercicesCardStyle.css";
import Carousel from "../Carousel/Carousel";
import useFetchMoveVideos from "../hooks/useFetchMoveVideos";
import SkeletonExerciseCard from "./SkeletonExerciseCard";

const UserExercisesCard = () => {
  const { data, isLoading } = useFetchMoveVideos();

  if (isLoading) {
    return <SkeletonExerciseCard />;
  }

  return (
    <div className="move">
      <div className="move-title">Move</div>
      <Carousel contentData={data} />
    </div>

  );
};

export default UserExercisesCard;
