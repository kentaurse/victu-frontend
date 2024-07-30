import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileAvatar from "../components/ProfileAvatar/ProfileAvatar";
import ProfileSettingsList from "../components/ProfileSettings/ProfileSettingsList";
import Tabbar from "../components/Tabbar/Tabbar";
import { auth } from "../firebase/firebase.config";
import "../styles/profilePageStyle.css";
import Logo from "../assets/profileLogo.png";

import Cookies from "universal-cookie";

const ProfilePage = () => {
  const pageNavigation = useNavigate();
  const cookies = new Cookies();

  async function logoutAccount() {
    await signOut(auth);
    cookies.remove("userAuthData");
    window.localStorage.clear();
    pageNavigation("../");
  }

  return (
    <div className="profile">
      <div className="profile-content">
        <div className="profile-title">Profile</div>
        <ProfileAvatar />
        <ProfileSettingsList />
        <div className="profile-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="profile-logout">
          <button onClick={logoutAccount}>Logout</button>
        </div>
      </div>
      <Tabbar currentPage={"profile"} />
    </div>
  );
};

export default ProfilePage;
