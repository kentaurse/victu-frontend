import React from "react";
import ActivityNeeds from "../components/ActivityNeeds/ActivityNeeds";
import ActivityTips from "../components/ActivityTips/ActivityTips";
import Tabbar from "../components/Tabbar/Tabbar";
import UserProgramCard from "../components/UserProgramCard/UserProgramCard";
import "../styles/activitiesPageStyle.css";

const ActivitiesPage = () => {
  return (
    <div className="activity">
      <div className="activity-content">
        <div className="activity-title">Daily activities</div>
        <UserProgramCard />
        <ActivityNeeds />
        <ActivityTips />
      </div>
      <Tabbar currentPage={"activities"} />
    </div>
  );
};

export default ActivitiesPage;
