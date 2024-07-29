import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../firebase/firebase.config";
import "./mealsFieldsStyle.css";

const MealsInputsFields = () => {
  const mealsDbCollection = collection(db, "usersMealsDataCollection");

  const [mealTitle, setMealTitle] = useState();
  const [mealSubtitle, setMealSubtitle] = useState();
  const [mealVideoId, setMealVideoId] = useState();

  async function setMealDataToDB() {
    try {
      await addDoc(mealsDbCollection, {
        title: mealTitle,
        subtitle: mealSubtitle,
        videoId: mealVideoId,
      });
      alert("Meal data successfully created");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="admin-meals">
      <div className="admin-meals-title">Meals</div>
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
  );
};

export default MealsInputsFields;
