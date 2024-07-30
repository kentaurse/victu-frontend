import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchUserData from "../hooks/useFetchUserData";
import SkeletonHomeHeader from "./SkeletonHomeHeader";

import { createDefaultAvatar } from "../helpers/createDeafultAvatar";

const HomeHeader: FC = () => {
  const { data, isLoading } = useFetchUserData();
  const [handledAvatar, setHandledAvatar] = useState("");

  useEffect(() => {
    if (data) {
      const avatar = createDefaultAvatar(data.userFirstName);
      setHandledAvatar(avatar);
    }
  }, [data]);

  if (isLoading) {
    return <SkeletonHomeHeader />;
  }

  return (
    <div className="home-header">
      <div className="home-title">
        <div className="home-username">Hi {data?.userFirstName}</div>
        <div className="home-subtitle">Have a productive and joyous day</div>
      </div>
      {data?.userAvatar ? (
        <Link to="/profile">
          <img src={data?.userAvatar} alt="avatar" className="home-avatar" />
        </Link>
      ) : (
        <Link to="/profile" className="handledAvatar">
          {handledAvatar}
        </Link>
      )}
    </div>
  );
};

export default HomeHeader;
