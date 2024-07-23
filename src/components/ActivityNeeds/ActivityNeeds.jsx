import React from "react";
import './activityNeedsStyle.css'

const ActivityNeeds = () => {
  return (
    <div className="activity-needs">
      <div className="activity-needs-title">Daily Caloric Needs</div>

      <div className="activity-needs-two-blocks">
        <div className="activity-needs-calories activity-card">
          <div className="activity-card-title">2192</div>
          <div className="activity-card-subtitle">Calories / day</div>
        </div>
        <div className="activity-needs-meals activity-card">
          <div className="activity-card-title">4-5</div>
          <div className="activity-card-subtitle">
            Meals intakes of 440kk each
          </div>
        </div>
      </div>

      <div className="activity-needs-exercise activity-card">
        <div className="activity-card-title">30 min cardio</div>
        <div className="activity-card-subtitle">Preferable exercise level</div>
      </div>
    </div>
  );
};

export default ActivityNeeds;
