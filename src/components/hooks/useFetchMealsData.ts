import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { IMealData } from "src/types/types";
import { db } from "../../firebase/firebase.config";

const useFetchMealsData = () => {
  const usersDataCollectionRef = collection(db, "usersMealsDataCollection");
  const [data, setData] = useState<IMealData[] | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const snapshot = await getDocs(usersDataCollectionRef);
        const docs = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        })) as IMealData[];

        setData(docs);
        setIsLoading(false);
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
