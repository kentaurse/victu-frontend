import React, { FC, useState } from "react";
import Arrow from "../../assets/notifArrow.png";
import ActiveNotificationModal from "../ActiveNotificationModal/ActiveNotificationModal";

import { INotificationData } from "../../types/types";

interface NotificationListItemProps {
  notificationData: INotificationData;
}

const NotificationListItem: FC<NotificationListItemProps> = ({
  notificationData,
}) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [title, shortBody, fullBody] = [
    notificationData.notificationTitle,
    notificationData.notificationShortBody,
    notificationData.notificationFullBody,
  ];

  function showModal() {
    setIsModalActive(true);
  }

  return (
    <div className="notif-news">
      <div className="notif-news-info">
        <div className="notif-news-title">{title}</div>
        <div className="notif-news-body">{shortBody}</div>
      </div>
      <div className="notif-news-icon" onClick={showModal}>
        <img src={Arrow} alt="arrow" />
      </div>
      <ActiveNotificationModal
        title={title}
        fullBody={fullBody}
        setIsModalActive={setIsModalActive}
        isModalActive={isModalActive}
      />
    </div>
  );
};

export default NotificationListItem;
