import React from "react";
import "./profileSettingsStyle.css";
import Arrow from "../../assets/profileArrow.png";

const ProfileSettingsList = () => {
  return (
    <div className="profile-settings-list">
      <div className="profile-setting">
        <div className="profile-setting-title">Settings</div>
        <div className="profile-setting-icon">
          <img src={Arrow} alt="arrow" />
        </div>
      </div>
      <div className="profile-setting">
        <div className="profile-setting-title">Achievments</div>
        <div className="profile-setting-icon">
          <img src={Arrow} alt="arrow" />
        </div>
      </div>
      <div className="profile-setting">
        <div className="profile-setting-title">Programms</div>
        <div className="profile-setting-icon">
          <img src={Arrow} alt="arrow" />
        </div>
      </div>
      <div className="profile-setting">
        <div className="profile-setting-title">Policy</div>
        <div className="profile-setting-icon">
          <img src={Arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingsList;
