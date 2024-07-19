import React from "react";
import { Link } from "react-router-dom";
import CreateNewProgramIcon from "../../assets/createNewProgramIcon.svg";

const NoProgram = () => {
  return (
    <div className="program">
      <div className="program-title">
        <div className="program-name">No diet program has been created</div>
        <div className="program-subtitle">Create your own program</div>
      </div>
      <Link to="/create-new-program" className="program-create">
        <img src={CreateNewProgramIcon} alt="create" />
      </Link>
    </div>
  );
};

export default NoProgram;
