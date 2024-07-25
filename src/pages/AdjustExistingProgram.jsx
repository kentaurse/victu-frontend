import React from "react";
import { Link } from "react-router-dom";
import GoBackIcon from "../assets/goBackArrow.svg";
import AdjustProgramFields from "../components/AdjustProgramFields/AdjustProgramFields";
import "../styles/createNewProgramPageStyle.css";

const AdjustExistingProgram = () => {
  return (
    <div className="newProgram">
      <div className="newProgram-content">
        <Link to="/home" className="newProgram-goBack">
          <img src={GoBackIcon} alt="go back" />
        </Link>
        <div className="newProgram-title">
          Fill out needed inforamtion to adjust your program and leave
          unnecessary fields
        </div>
        <AdjustProgramFields />
      </div>
    </div>
  );
};

export default AdjustExistingProgram;
