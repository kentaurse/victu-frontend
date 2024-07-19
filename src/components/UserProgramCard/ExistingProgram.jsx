import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdjustIcon from "../../assets/adjustIcon.svg";

const ExistingProgram = ({ dietProgram }) => {
  const [userDietProgram, setUserDietProgram] = useState();

  useEffect(() => {
    function handleDietProgram() {
      switch (dietProgram) {
        case "maintence":
          setUserDietProgram("Maintence Program");
          break;

        case "gain":
          setUserDietProgram("Mass gain Program");
          break;
        case "loss":
          setUserDietProgram("Fat loss Program");
          break;
        default:
          break;
      }
    }

    handleDietProgram();
  }, [dietProgram]);

  return (
    <div className="program">
      <div className="program-title">
        <div className="program-name">{userDietProgram || "Loading.."}</div>
        <div className="program-subtitle">You can adjust your diet program </div>
      </div>

      <Link to="/create-new-program" className="program-create">
        <img src={AdjustIcon} alt="adjust" />
      </Link>
    </div>
  );
};

export default ExistingProgram;
