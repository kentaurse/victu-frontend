import React from "react";
import Arrow from "../../assets/notifArrow.png";

const NotificationListItem = () => {
  return (
    <div className="notif-news">
      <div className="notif-news-info">
        <div className="notif-news-title">Brekfast</div>
        <div className="notif-news-body">
          Do not skip breakfast. Skipping breakfast will not help you lose
          weight.
        </div>
      </div>
      <div className="notif-news-icon">
        <img src={Arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default NotificationListItem;
