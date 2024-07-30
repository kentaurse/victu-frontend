import React from "react";
import { Outlet } from "react-router-dom";
import StartingPage from "../StartingPage";

import Cookies from "universal-cookie";
import { authCookies } from "../../components/helpers/setAuthCookies";

const ProtectedRoutes = () => {
  const cookies = new Cookies();
  const authCookies = cookies.get("userAuthData") as authCookies;
  const isAuth = authCookies?.isAuth || false;

  return isAuth ? <Outlet /> : <StartingPage />;
};

export default ProtectedRoutes;
