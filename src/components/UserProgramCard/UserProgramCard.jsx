import React from "react";
import "./userProgramCardStyle.css";
import ExistingProgram from "./ExistingProgram";
import NoProgram from "./NoProgram";
import useFetchUserProgram from "../hooks/useFetchUserProgram";
import SkeletonProgramCard from "./SkeletonProgramCard";

const UserProgramCard = () => {
  const { data, isLoading } = useFetchUserProgram();

  if (isLoading) {
    return <SkeletonProgramCard />;
  }

  return (
    <>
      {data && !isLoading ? (
        <ExistingProgram dietProgram={data?.userDietProgram} />
      ) : (
        <NoProgram />
      )}
    </>
  );
};

export default UserProgramCard;
