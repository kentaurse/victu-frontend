import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase.config";

import Cookies from "universal-cookie";
import { IProgramData } from "../../types/types";

const useFetchUserProgram = () => {
  const cookies = new Cookies();

  const usersProgramCollectionRef = collection(db, "usersProgramCollection");
  const [data, setData] = useState<IProgramData | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
        const docs = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }))[0] as IProgramData;

        setData(docs);

        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    }

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  window.localStorage.setItem("userProgramDataLocal", JSON.stringify(data));

  return { data, isLoading, error };
};

export default useFetchUserProgram;
