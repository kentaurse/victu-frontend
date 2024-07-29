import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../firebase/firebase.config";
import './moveFieldsStyle.css'

const MoveInputsFields = () => {
  const moveDbCollection = collection(db, "usersMoveDataCollection");

  const [moveTitle, setMoveTitle] = useState();
  const [moveSubtitle, setMoveSubtitle] = useState();
  const [moveVideoId, setMoveVideoId] = useState();

  async function setMoveDataToDB() {
    try {
      await addDoc(moveDbCollection, {
        title: moveTitle,
        subtitle: moveSubtitle,
        videoId: moveVideoId,
      });
      alert("Move data successfully created");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="admin-move">
      <div className="admin-move-title">Move</div>
      <input
        type="text"
        placeholder="Move title"
        onChange={e => setMoveTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Move subtitle"
        onChange={e => setMoveSubtitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Move video id"
        onChange={e => setMoveVideoId(e.target.value)}
      />
      <button onClick={setMoveDataToDB}>Set move data</button>
    </div>
  );
};

export default MoveInputsFields;
