import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase.config";

import Cookies from "universal-cookie";

const useFetchUserProgram = () => {
  const cookies = new Cookies();

  const usersProgramCollectionRef = collection(db, "usersProgramCollection");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const localUserAuth = cookies.get("userAuthData");
    const uid = localUserAuth?.uid;

    async function getData() {
      try {
        const queryData = query(
          usersProgramCollectionRef,
          where("uid", "==", uid)
        );

        const snapshot = await getDocs(queryData);
        setData(...snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        setError(error);
      }
    }

    getData();
    setIsLoading(false);
  }, []);

  return { data, isLoading, error };
};

export default useFetchUserProgram;
