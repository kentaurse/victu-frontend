import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dropDownIcon from "../../assets/dropDownArrow.svg";
import { db } from "../../firebase/firebase.config";
import "./createNewProgramFieldsStyle.css";

import { IProgramData } from "../../types/types";

const AdjustProgramFields = () => {
  const [userAge, setUserAge] = useState("");
  const [userWeight, setUserWeight] = useState("");
  const [userHeight, setUserHeight] = useState("");
  const [userExerciseLevel, setUserExerciseLevel] = useState("");
  const [userDietProgram, setUserDietProgram] = useState("");
  const [userGender, setUserGender] = useState("");
  const [documentId, setDocumentId] = useState("");
  const pageNavigation = useNavigate();

  useEffect(() => {
    const localData = localStorage.getItem("userProgramDataLocal");
    const userLocalProgramData = JSON.parse(localData || "") as IProgramData;

    setUserAge(userLocalProgramData?.userAge);
    setUserWeight(userLocalProgramData?.userWeight);
    setUserHeight(userLocalProgramData?.userHeight);
    setUserExerciseLevel(userLocalProgramData?.userExerciseLevel);
    setUserDietProgram(userLocalProgramData?.userDietProgram);
    setUserGender(userLocalProgramData?.userGender);
    setDocumentId(userLocalProgramData?.id);
  }, []);

  const isValid = [
    userAge,
    userWeight,
    userHeight,
    userExerciseLevel,
    userDietProgram,
    userGender,
  ].every(item => item !== "");

  async function adjustProgramInDB() {
    if (!isValid) {
      return alert("Please fill out all missing fields!");
    }
    
    const userDoc = doc(db, "usersProgramCollection", documentId);
    const adjustedFields = {
      userAge: userAge,
      userDietProgram: userDietProgram,
      userExerciseLevel: userExerciseLevel,
      userGender: userGender,
      userHeight: userHeight,
      userWeight: userWeight,
    };

    await updateDoc(userDoc, adjustedFields);
    alert("Program successfully updated!");
    pageNavigation("../home");
  }

  async function deleteProgramInDB() {
    const confirmAnswer = window.confirm(
      "Do you definitely want to delete all the data about your programme?  They cannot be recovered in the future!"
    );
    const userDoc = doc(db, "usersProgramCollection", documentId);

    if (confirmAnswer) {
      await deleteDoc(userDoc);
      alert("Program successfully deleted!");
      pageNavigation("../home");
    }
  }

  return (
    <div>
      <div className="newProgram-inputs">
        <div className="newProgram-input">
          <div className="newProgram-input-title">Age:</div>
          <input
            type="text"
            value={userAge}
            className="newProgram-input-field"
            onChange={e => setUserAge(e.target.value)}
          />
        </div>
        <div className="newProgram-input">
          <div className="newProgram-input-title">Current weight:</div>
          <input
            type="text"
            value={userWeight}
            className="newProgram-input-field"
            onChange={e => setUserWeight(e.target.value)}
          />
        </div>
        <div className="newProgram-input">
          <div className="newProgram-input-title">Height:</div>
          <input
            type="text"
            value={userHeight}
            className="newProgram-input-field"
            onChange={e => setUserHeight(e.target.value)}
          />
        </div>
        <div className="newProgram-input">
          <div className="newProgram-input-title">Exercise level:</div>
          <div className="newProgram-input-selection">
            <select
              name="exercise"
              id="exercise"
              className="newProgram-input-select"
              value={userExerciseLevel}
              onChange={e => setUserExerciseLevel(e.target.value)}
            >
              <option value="noWorkouts">Little or no exercise</option>
              <option value="threeWorkouts">3-4 workouts a weak</option>
              <option value="dailyWorkouts">Daily workouts</option>
            </select>
            <img src={dropDownIcon} alt="dropdown" />
          </div>
        </div>
        <div className="newProgram-input">
          <div className="newProgram-input-title">Diet program:</div>
          <div className="newProgram-input-selection">
            <select
              name="diet"
              id="diet"
              className="newProgram-input-select"
              value={userDietProgram}
              onChange={e => setUserDietProgram(e.target.value)}
            >
              <option value="maintenance">Maintenance</option>
              <option value="loss">Fat loss</option>
              <option value="gain">Mass gain</option>
            </select>
            <img src={dropDownIcon} alt="dropdown" />
          </div>
        </div>
        <div className="newProgram-input">
          <div className="newProgram-input-title">Gender:</div>
          <div className="newProgram-input-selection">
            <select
              name="diet"
              id="diet"
              className="newProgram-input-select"
              value={userGender}
              onChange={e => setUserGender(e.target.value)}
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            <img src={dropDownIcon} alt="dropdown" />
          </div>
        </div>

        <div className="newProgram-create">
          <button className="newProgram-create-btn" onClick={adjustProgramInDB}>
            Adjust
          </button>
        </div>

        <div className="newProgram-or">You can delete your program:</div>

        <div className="newProgram-delete">
          <button className="newProgram-delete-btn" onClick={deleteProgramInDB}>
            Delete program
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdjustProgramFields;
