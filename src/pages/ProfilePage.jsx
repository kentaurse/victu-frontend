import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import Tabbar from "../components/Tabbar/Tabbar";
import { auth } from "../firebase/firebase.config";

const ProfilePage = () => {
  const pageNavigation = useNavigate();

  async function logoutAccount() {
    await signOut(auth);
    localStorage.clear();
    pageNavigation("../");
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={logoutAccount}>Logout</button>
      <Tabbar currentPage={"profile"}/>
    </div>
  );
};

export default ProfilePage;
