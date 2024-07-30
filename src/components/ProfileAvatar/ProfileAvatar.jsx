import React, { useEffect, useState } from "react";
import "./profileAvatarStyle.css";

import useFetchUserData from "../hooks/useFetchUserData";

const ProfileAvatar = () => {
  const { data } = useFetchUserData();
  const [handledAvatar, setHandledAvatar] = useState();

  useEffect(() => {
    const firstLetterOfName = data?.userFirstName.split("")[0];
    setHandledAvatar(firstLetterOfName?.toUpperCase());
  }, [data]);


  const userFullName = `${data?.userFirstName} ${data?.userLastName}`;

  return (
    <div className="profile-avatar">
      {data?.userAvatar ? (
        <div className="profile-avatar-img">
          <img src={data?.userAvatar} alt="user avatar" />
        </div>
      ) : (
        <div className="profile-avatar-handled">{handledAvatar || ""}</div>
      )}
      <div className="profile-avatar-name">{userFullName}</div>
    </div>
  );
};

export default ProfileAvatar;
