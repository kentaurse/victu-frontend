import React from "react";
import NotificationNewsList from "../components/NotificationNewsList/NotificationNewsList";
import Tabbar from "../components/Tabbar/Tabbar";
import "../styles/notificationsPageStyle.css";

const NotificationsPage = () => {
  return (
    <div className="notif">
      <div className="notif-content">
        <div className="notif-title">Notifications</div>
        <NotificationNewsList />
      </div>
      <Tabbar currentPage={"notifications"} />
    </div>
  );
};

export default NotificationsPage;
