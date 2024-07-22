import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeHeader = ({ userName, userAvatar }) => {
  const [handledAvatar, setHandledAvatar] = useState();

  useEffect(() => {
    const firstLetterOfName = userName?.split("")[0];
    setHandledAvatar(firstLetterOfName?.toUpperCase());
  }, [userName]);

  return (
    <div className="home-header">
      <div className="home-title">
        <div className="home-username">Hi {userName}</div>
        <div className="home-subtitle">Have a productive and joyous day</div>
      </div>
      {userAvatar ? (
        <Link to="/profile">
          <img src={userAvatar} alt="avatar" className="home-avatar" />
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
