import React from "react";
import NotificationListItem from "../NotificationListItem/NotificationListItem";
import "./notifNewsListStyle.css";

const NotificationNewsList = ({ currentFilter }) => {
  return (
    <div className="notif-news-list">
      <NotificationListItem />
    </div>
  );
};

export default NotificationNewsList;
