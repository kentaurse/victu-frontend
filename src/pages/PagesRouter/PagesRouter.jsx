import React from "react";
import { Route, Routes } from "react-router-dom";
import ActivitiesPage from "../ActivitiesPage";
import AdjustExistingProgram from "../AdjustExistingProgram";
import AdminPage from "../AdminPage";
import CreateNewProgramPage from "../CreateNewProgramPage";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import NotificationsPage from "../NotificationsPage";
import ProfilePage from "../ProfilePage";
import RegistrationPage from "../RegistrationPage";
import StartingPage from "../StartingPage";
import AdminProtectedRouter from "./AdminProtectedRouter";
import ProtectedRoutes from "./ProtectedRoutes";

import NotAuthPages from "./NotAuthPages";

const PagesRouter = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create-new-program" element={<CreateNewProgramPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/adjust-program" element={<AdjustExistingProgram />} />
      </Route>

      <Route element={<AdminProtectedRouter />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      <Route path="/" element={<StartingPage />} />

      <Route element={<NotAuthPages />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Route>
    </Routes>
  );
};

export default PagesRouter;
