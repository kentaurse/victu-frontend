import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../firebase/firebase.config";
import "./notifFieldsStyle.css";

const NotifFields = () => {
  const notifDataCollection = collection(db, "usersNotificationsCollection");
  const [shortBody, setShortBody] = useState();
  const [fullBody, setFullBody] = useState();
  const [title, setTitle] = useState();

  async function setNotifDataToDB() {
    try {
      await addDoc(notifDataCollection, {
        notificationTitle: title,
        notificationFullBody: fullBody,
        notificationShortBody: shortBody,
      });
      alert("Notification successfully created");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="admin-notif">
      <div className="admin-notif-title">Notifications</div>
      <input
        type="text"
        placeholder="Title"
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Short body"
        onChange={e => setShortBody(e.target.value)}
      />
      <input
        type="text"
        placeholder="Full body"
        onChange={e => setFullBody(e.target.value)}
      />
      <button onClick={setNotifDataToDB}>Create a notification</button>
    </div>
  );
};

export default NotifFields;
