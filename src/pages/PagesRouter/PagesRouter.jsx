import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateNewProgramPage from "../CreateNewProgramPage";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
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
      </Route>
      <Route path="/" element={<StartingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
};

export default PagesRouter;
