import React from "react";
import { Route, Routes } from "react-router-dom";
import ActivitiesPage from "../ActivitiesPage";
import CreateNewProgramPage from "../CreateNewProgramPage";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import NotificationsPage from "../NotificationsPage";
import ProfilePage from "../ProfilePage";
import RegistrationPage from "../RegistrationPage";
import StartingPage from "../StartingPage";
import ProtectedRoutes from "./ProtectedRoutes";

const PagesRouter = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create-new-program" element={<CreateNewProgramPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
      </Route>
      <Route path="/" element={<StartingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
};

export default PagesRouter;
