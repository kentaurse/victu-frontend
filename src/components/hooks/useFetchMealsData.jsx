import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase.config";

const useFetchMealsData = () => {
  const usersDataCollectionRef = collection(db, "usersMealsDataCollection");
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const snapshot = await getDocs(usersDataCollectionRef);
        setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));

        setisLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, error };
};

export default useFetchMealsData;
