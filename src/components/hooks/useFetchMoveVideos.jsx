import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase.config";

const useFetchMoveVideos = () => {
  const usersDataCollectionRef = collection(db, "usersMoveDataCollection");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const snapshot = await getDocs(usersDataCollectionRef);
        setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    }

    getData();
  }, []);

  return { data, isLoading, error };
};

export default useFetchMoveVideos;
