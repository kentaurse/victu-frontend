import React, { useEffect, useState } from "react";
import "./profileAvatarStyle.css";

const ProfileAvatar = () => {
  const [userData, setUserData] = useState();
  const [handledAvatar, setHandledAvatar] = useState();

  useEffect(() => {
    const userLocalData =
      JSON.parse(localStorage.getItem("userDataLocal")) || {};
    const userFullName = `${userLocalData?.userFirstName} ${userLocalData?.userLastName}`;
    const uid = userLocalData?.uid;
    setUserData({
      userFullName: userFullName,
      uid: uid,
      userAvatar: userLocalData?.userAvatar,
    });

    const firstLetterOfName = userLocalData?.userFirstName.split("")[0];
    setHandledAvatar(firstLetterOfName?.toUpperCase());
  }, []);

  return (
    <div className="profile-avatar">
      {userData?.userAvatar ? (
        <div className="profile-avatar-img">
          <img src={userData?.userAvatar} alt="user avatar" />
        </div>
      ) : (
        <div className="profile-avatar-handled">{handledAvatar || ""}</div>
      )}
      <div className="profile-avatar-name">{userData?.userFullName}</div>
    </div>
  );
};

export default ProfileAvatar;
