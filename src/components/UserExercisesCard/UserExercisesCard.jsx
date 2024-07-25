import React from "react";
import "./userExercicesCardStyle.css";
import Carousel from "../Carousel/Carousel";
import useFetchMoveVideos from "../hooks/useFetchMoveVideos";

const UserExercisesCard = () => {
  const moveData = useFetchMoveVideos();

  return (
    <div className="move">
      <div className="move-title">Move</div>
      <Carousel contentData={moveData} />
    </div>
  );
};

export default UserExercisesCard;
