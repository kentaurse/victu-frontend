import React from "react";
import "./userProgramCardStyle.css";
import useFetchUserProgram from "../hooks/useFetchUserProgram";
import ExistingProgram from "./ExistingProgram";
import NoProgram from "./NoProgram";

const UserProgramCard = () => {
  const userProgramData = useFetchUserProgram();

  return (
    <div>
      {userProgramData ? <ExistingProgram dietProgram={userProgramData?.userDietProgram} /> : <NoProgram />}
    </div>
  );
};

export default UserProgramCard;
