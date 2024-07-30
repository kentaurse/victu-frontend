import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase.config";

import { IExerciseData } from "../../types/types";

const useFetchMoveVideos = () => {
  const usersDataCollectionRef = collection(db, "usersMoveDataCollection");
  const [data, setData] = useState<IExerciseData[] | []>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const snapshot = await getDocs(usersDataCollectionRef);
        const docs = snapshot.docs.map(doc => ({
          ...doc.data(), id: doc.id,
        })) as IExerciseData[];

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

export default useFetchMoveVideos;
