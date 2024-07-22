import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import StartingPage from "../StartingPage";

const ProtectedRoutes = () => {
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    const userAuthLocalData =
      JSON.parse(localStorage.getItem("userAuthData ")) || {};
    setIsAuth(userAuthLocalData?.isAuth);
  }, []);

  return isAuth ? <Outlet /> : <StartingPage />;
};

export default ProtectedRoutes;
