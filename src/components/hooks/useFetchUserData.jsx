import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

const useFetchUserData = () => {
  const usersDataCollectionRef = collection(db, "usersDataCollection");
  const [userData, setUserData] = useState();

  useEffect(() => {
    const localUserAuth =
      JSON.parse(localStorage.getItem("userAuthData")) || null;
    const uid = localUserAuth?.uid;

    async function getData() {
      const queryData = query(usersDataCollectionRef, where("uid", "==", uid));

      const snapshot = await getDocs(queryData);
      setUserData(...snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }

    getData();
  }, []);

  localStorage.setItem("userDataLocal", JSON.stringify(userData));

  return userData || null;
};

export default useFetchUserData;
