import React from "react";
import "./activityTipsStyle.css";
import Star from "../../assets/activityTipsStart.png";

const ActivityTips = () => {
  return (
    <div className="activity-tips">
      <div className="activity-tips-title">Tip for the day</div>
      <div className="activity-tips-card">
        <div className="activity-tips-icon">
          <img src={Star} alt="star" />
        </div>
        <div className="activity-tips-tip">Drink 2 - 2.5 litres of water </div>
      </div>
    </div>
  );
};

export default ActivityTips;
