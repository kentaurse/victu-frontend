import React, { useState } from "react";
import NotificationNewsList from "../components/NotificationNewsList/NotificationNewsList";
import Tabbar from "../components/Tabbar/Tabbar";
import "../styles/notificationsPageStyle.css";

const NotificationsPage = () => {
  const [currentFilter, setCurrentFilter] = useState("all");

  return (
    <div className="notif">
      <div className="notif-content">
        <div className="notif-title">Notifications</div>
        <NotificationNewsList currentFilter={currentFilter} />
      </div>
      <div className="notif-filter">
        <button className="notif-filter-btn">All</button>
        <button className="notif-filter-btn">Favorite</button>
        <button className="notif-filter-btn">Tips</button>
      </div>
      <Tabbar currentPage={"notifications"} />
    </div>
  );
};

export default NotificationsPage;
