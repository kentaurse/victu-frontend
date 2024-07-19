import React from "react";
import './userProgramCardStyle.css'
import CreateNewProgramIcon from "../../assets/createNewProgramIcon.svg";

const UserProgramCard = () => {
  return (
    <div className="program">
      <div className="program-title">
        <div className="program-name">No diet program has been created</div>
        <div className="program-subtitle">Create your own program</div>
      </div>
      <div className="program-create">
        <img src={CreateNewProgramIcon} alt="create" />
      </div>
    </div>
  );
};

export default UserProgramCard;
