import React, { useEffect, useState } from "react";
import "./profileAvatarStyle.css";

import useFetchUserData from "../hooks/useFetchUserData";
import SkeletonProfile from "./SkeletonProfile";

import { createDefaultAvatar } from "../helpers/createDeafultAvatar";

const ProfileAvatar = () => {
  const { data, isLoading } = useFetchUserData();
  const [handledAvatar, setHandledAvatar] = useState("");
  const userFullName = `${data?.userFirstName} ${data?.userLastName}`;

  useEffect(() => {
    if (data) {
      const avatar = createDefaultAvatar(data.userFirstName);
      setHandledAvatar(avatar);
    }
  }, [data]);

  if (isLoading) {
    return <SkeletonProfile />;
  }

  return (
    <div className="profile-avatar">
      {data?.userAvatar ? (
        <div className="profile-avatar-img">
          <img src={data?.userAvatar} alt="user avatar" />
        </div>
      ) : (
        <div className="profile-avatar-handled">{handledAvatar}</div>
      )}
      <div className="profile-avatar-name">{userFullName}</div>
    </div>
  );
};

export default ProfileAvatar;
