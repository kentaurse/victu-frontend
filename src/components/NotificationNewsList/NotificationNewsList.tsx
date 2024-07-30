import React from "react";
import useFetchUserNotifications from "../hooks/useFetchUserNotifications";
import NotificationListItem from "../NotificationListItem/NotificationListItem";
import "./notifNewsListStyle.css";
import SkeletonNotification from "./SkeletonNotification";

const NotificationNewsList = () => {
  const { data, isLoading } = useFetchUserNotifications();

  if (isLoading) {
    return (
      <div className="notif-news-list">
        {[...Array(4)].map((_, index) => (
          <SkeletonNotification key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="notif-news-list">
      {data?.map(notification => (
        <NotificationListItem
          key={notification?.id}
          notificationData={notification}
        />
      ))}
    </div>
  );
};

export default NotificationNewsList;
