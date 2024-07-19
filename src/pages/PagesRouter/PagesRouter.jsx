import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import RegistrationPage from "../RegistrationPage";
import StartingPage from "../StartingPage";

const PagesRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<StartingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default PagesRouter;
