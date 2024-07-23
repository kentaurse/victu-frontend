import React from "react";
import "./activeNotifStyle.css";

const ActiveNotificationModal = ({
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
