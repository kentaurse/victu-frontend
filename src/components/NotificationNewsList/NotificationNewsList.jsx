import React, { useState } from "react";
import useFetchUserNotifications from "../hooks/useFetchUserNotifications";
import NotificationListItem from "../NotificationListItem/NotificationListItem";
import "./notifNewsListStyle.css";

const NotificationNewsList = () => {

  const notificationsData = useFetchUserNotifications();

  return (
    <div className="notif-news-list">
      {notificationsData?.map(notification => (
        <NotificationListItem
          key={notification?.id}
          notificationData={notification}
        />
      ))}
    </div>
  );
};

export default NotificationNewsList;
