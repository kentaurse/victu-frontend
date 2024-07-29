import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import StartingPage from "../StartingPage";

const AdminProtectedRouter = () => {
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    const userLocalData =
      JSON.parse(localStorage.getItem("userDataLocal")) || {};
    setIsAdmin(userLocalData?.userRole === "Admin" ? true : false);
  }, [isAdmin]);

  return isAdmin ? <Outlet /> : <StartingPage />;
};

export default AdminProtectedRouter;
