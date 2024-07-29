import React from "react";
import { Outlet } from "react-router-dom";

import Cookies from "universal-cookie";
import HomePage from "../HomePage";

const NotAuthPages = () => {
  const cookies = new Cookies();
  const authCookies = cookies.get("userAuthData");
  const isAuth = authCookies?.isAuth || false;

  return !isAuth ? <Outlet /> : <HomePage />;
};

export default NotAuthPages;
