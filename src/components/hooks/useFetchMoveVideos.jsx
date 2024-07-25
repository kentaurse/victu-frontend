import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase.config";

const useFetchMoveVideos = () => {
  const usersDataCollectionRef = collection(db, "userMoveDataCollection");
  const [moveData, setMoveData] = useState();

  useEffect(() => {
    async function getData() {
      const snapshot = await getDocs(usersDataCollectionRef);
      setMoveData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }
    getData();
  }, []);

  return moveData;
};

export default useFetchMoveVideos;
