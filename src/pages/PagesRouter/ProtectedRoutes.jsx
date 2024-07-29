import React from "react";
import { Outlet } from "react-router-dom";
import StartingPage from "../StartingPage";

import Cookies from "universal-cookie";

const ProtectedRoutes = () => {
  const cookies = new Cookies();
  const authCookies = cookies.get("userAuthData");
  const isAuth = authCookies?.isAuth || false;

  return isAuth ? <Outlet /> : <StartingPage />;
};

export default ProtectedRoutes;
