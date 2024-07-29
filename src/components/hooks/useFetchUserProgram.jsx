import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase.config";

const useFetchUserProgram = () => {
  const usersProgramCollectionRef = collection(db, "usersProgramCollection");
  const [userProgramData, setUserData] = useState();

  useEffect(() => {
    const localUserAuth =
      JSON.parse(localStorage.getItem("userAuthData")) || null;
    const uid = localUserAuth?.uid;

    async function getData() {
      const queryData = query(
        usersProgramCollectionRef,
        where("uid", "==", uid)
      );

      const snapshot = await getDocs(queryData);
      setUserData(...snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }

    getData();
  }, []);

  localStorage.setItem("userProgramDataLocal", JSON.stringify(userProgramData));

  return userProgramData || null;
};

export default useFetchUserProgram;
