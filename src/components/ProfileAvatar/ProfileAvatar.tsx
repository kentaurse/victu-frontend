import React, { useEffect, useState } from "react";
import "./profileAvatarStyle.css";

import useFetchUserData from "../hooks/useFetchUserData";
import SkeletonProfile from "./SkeletonProfile";

const ProfileAvatar = () => {
  const { data, isLoading } = useFetchUserData();
  const [handledAvatar, setHandledAvatar] = useState<string>();

  useEffect(() => {
    if (data) {
      const firstLetterOfName = data!.userFirstName.split("")[0];
      setHandledAvatar(firstLetterOfName!.toUpperCase());
    }
  }, [data]);

  const userFullName = `${data?.userFirstName} ${data?.userLastName}`;

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
        <div className="profile-avatar-handled">{handledAvatar || ""}</div>
      )}
      <div className="profile-avatar-name">{userFullName}</div>
    </div>
  );
};

export default ProfileAvatar;
