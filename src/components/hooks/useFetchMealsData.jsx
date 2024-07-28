import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase.config";

const useFetchMealsData = () => {
  const usersDataCollectionRef = collection(db, "usersMealsDataCollection");
  const [mealsData, setMealsData] = useState();

  useEffect(() => {
    async function getData() {
      const snapshot = await getDocs(usersDataCollectionRef);
      setMealsData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }
    getData();
  }, []);

  return mealsData;
};

export default useFetchMealsData;
