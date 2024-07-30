import React, { useEffect, useState } from "react";
import "./createNewProgramFieldsStyle.css";
import dropDownIcon from "../../assets/dropDownArrow.svg";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

import Cookies from "universal-cookie";

const CreateNewProgramFields = () => {
  const cookies = new Cookies();
  const [userAge, setUserAge] = useState();
  const [userWeight, setUserWeight] = useState();
  const [userHeight, setUserHeight] = useState();
  const [userExerciseLevel, setUserExerciseLevel] = useState("noWorkouts");
  const [userDietProgram, setUserDietProgram] = useState("maintence");
  const [userGender, setUserGender] = useState("female");
  const [userId, setUserId] = useState();
  const usersProgramCollection = collection(db, "usersProgramCollection");
  const pageNavigation = useNavigate();

  useEffect(() => {
    const userAuthLocal = cookies.get("userAuthData") || null;

    const uid = userAuthLocal?.uid;
    setUserId(uid);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function createNewUserProgramInDB() {
    const isValidated =
      userAge !== undefined &&
      userWeight !== undefined &&
      userHeight !== undefined;

    if (isValidated) {
      try {
        await addDoc(usersProgramCollection, {
          userAge: userAge,
          userWeight: userWeight,
          userHeight: userHeight,
          userExerciseLevel: userExerciseLevel,
          userDietProgram: userDietProgram,
          userGender: userGender,
          uid: userId,
        });
        alert("Program successfully created!");
        pageNavigation("../home");
      } catch (error) {
        alert(error);
      }
    }
  }

  return (
    <div>
      <div className="newProgram-inputs">
        <div className="newProgram-input">
          <div className="newProgram-input-title">Age:</div>
          <input
            type="text"
            placeholder="Years"
            className="newProgram-input-field"
            onChange={e => setUserAge(e.target.value)}
          />
        </div>
        <div className="newProgram-input">
          <div className="newProgram-input-title">Current weight:</div>
          <input
            type="text"
            placeholder="Kilos"
            className="newProgram-input-field"
            onChange={e => setUserWeight(e.target.value)}
          />
        </div>
        <div className="newProgram-input">
          <div className="newProgram-input-title">Height:</div>
          <input
            type="text"
            placeholder="Cantimiters"
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
          <button
            className="newProgram-create-btn"
            onClick={createNewUserProgramInDB}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewProgramFields;
