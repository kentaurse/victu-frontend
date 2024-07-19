import React, { useEffect, useState } from "react";

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
          <img src={userAvatar} alt="avatar" className="home-avatar"/>
        ) : (
          <div className="handledAvatar">{handledAvatar || ""}</div>
        )}
    </div>
  );
};

export default HomeHeader;
