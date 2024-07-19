import React from "react";
import "./userExercicesCardStyle.css";
import MoveVideoMock from "../../assets/moveVideoJean.png";

const UserExercisesCard = () => {
  return (
    <div className="move">
      <div className="move-title">Move</div>
      <div className="move-videos-list">
        <div className="move-video">
          <div className="video">
            <img src={MoveVideoMock} alt="video" />
          </div>
          <div className="move-video-info">
            <div className="move-video-title">Workout with Jane</div>
            <div className="move-video-subtitle">25 mins</div>
          </div>
        </div>
        <div className="move-video">
          <div className="video">
            <img src={MoveVideoMock} alt="video" />
          </div>
          <div className="move-video-info">
            <div className="move-video-title">Workout with Jane</div>
            <div className="move-video-subtitle">25 mins</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserExercisesCard;
