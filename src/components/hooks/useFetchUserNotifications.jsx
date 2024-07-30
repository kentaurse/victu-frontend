import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase.config";

const useFetchUserNotifications = () => {
  const [notificationsData, setNotificationsData] = useState();
  const usersNotificationsCollectionRef = collection(db, "usersNotificationsCollection");

  useEffect(() => {
    async function getData() {
      const snapshot = await getDocs(usersNotificationsCollectionRef);
      setNotificationsData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }

    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return notificationsData;
};

export default useFetchUserNotifications;
