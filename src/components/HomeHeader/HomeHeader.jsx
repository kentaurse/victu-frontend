import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchUserData from "../hooks/useFetchUserData";
import SkeletonHomeHeader from "./SkeletonHomeHeader";

const HomeHeader = () => {
  const { data, isLoading } = useFetchUserData();
  const [handledAvatar, setHandledAvatar] = useState();

  useEffect(() => {
    const firstLetterOfName = data?.userFirstName?.split("")[0];
    setHandledAvatar(firstLetterOfName?.toUpperCase());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

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
          {handledAvatar || ""}
        </Link>
      )}
    </div>
  );
};

export default HomeHeader;
