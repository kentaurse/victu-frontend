import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase/firebase.config";

const AdminPage = () => {
  const moveDbCollection = collection(db, "usersMoveDataCollection");
  const mealsDbCollection = collection(db, "usersMealsDataCollection");

  const [mealTitle, setMealTitle] = useState();
  const [mealSubtitle, setMealSubtitle] = useState();
  const [mealVideoId, setMealVideoId] = useState();

  const [moveTitle, setMoveTitle] = useState();
  const [moveSubtitle, setMoveSubtitle] = useState();
  const [moveVideoId, setMoveVideoId] = useState();

  async function setMealDataToDB() {
    try {
      await addDoc(mealsDbCollection, {
        title: mealTitle,
        subtitle: mealSubtitle,
        videoId: mealVideoId,
      });
    } catch (error) {
      alert(error);
    }
  }

  async function setMoveDataToDB() {
    try {
      await addDoc(moveDbCollection, {
        title: moveTitle,
        subtitle: moveSubtitle,
        videoId: moveVideoId,
      });
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="admin">
      <div className="admin-content">
        <div className="admin-meals">
          <h1>Meals</h1>
          <input
            type="text"
            placeholder="Meal title"
            onChange={e => setMealTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Meal subtitle"
            onChange={e => setMealSubtitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Meal video id"
            onChange={e => setMealVideoId(e.target.value)}
          />

          <button onClick={setMealDataToDB}>Set meal data</button>
        </div>

        <div className="admin-move">
          <h1>Move</h1>
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
      </div>
    </div>
  );
};

export default AdminPage;
