import React, { FC } from "react";
import "./activeNotifStyle.css";

interface ActiveNotificationModalProps {
  title: string;
  fullBody: string;
  isModalActive: Boolean;
  setIsModalActive: (value: boolean) => void;
}

const ActiveNotificationModal: FC<ActiveNotificationModalProps> = ({
  title,
  fullBody,
  isModalActive,
  setIsModalActive,
}) => {
  function closeModal() {
    setIsModalActive(false);
  }

  return (
    <div className={isModalActive ? "activeNotif-show" : "activeNotif"}>
      <div className="activeNotif-content">
        <div className="activeNotif-title">{title}</div>
        <div className="activeNotif-info">{fullBody}</div>
        <div className="activeNotif-close">
          <button onClick={closeModal}>Got it</button>
        </div>
      </div>
    </div>
  );
};

export default ActiveNotificationModal;
