import React from "react";
import { Link } from "react-router-dom";
import goBackIcon from "../assets/goBackArrow.svg";
import CreateNewProgramFields from "../components/CreateNewProgramFields/CreateNewProgramFields";
import "../styles/createNewProgramPageStyle.css";

const CreateNewProgramPage = () => {
  return (
    <div className="newProgram">
      <div className="newProgram-content">
        <Link to="/home" className="newProgram-goBack">
          <img src={goBackIcon} alt="go back" />
        </Link>
        <div className="newProgram-title">
          Fill out inforamtion to create a prorgamm and calucalte caloric needs
        </div>
        <CreateNewProgramFields />
      </div>
    </div>
  );
};

export default CreateNewProgramPage;
