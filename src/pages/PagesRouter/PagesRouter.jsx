import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateNewProgramPage from "../CreateNewProgramPage";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import ProfilePage from "../ProfilePage";
import RegistrationPage from "../RegistrationPage";
import StartingPage from "../StartingPage";

const PagesRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<StartingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/create-new-program" element={<CreateNewProgramPage />} />
    </Routes>
  );
};

export default PagesRouter;
