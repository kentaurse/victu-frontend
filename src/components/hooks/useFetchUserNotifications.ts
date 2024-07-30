import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { INotificationData } from "src/types/types";
import { db } from "../../firebase/firebase.config";

const useFetchUserNotifications = () => {
  const [data, setData] = useState<INotificationData[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const usersNotificationsCollectionRef = collection(
    db,
    "usersNotificationsCollection"
  );

  useEffect(() => {
    async function getData() {
      try {
        const snapshot = await getDocs(usersNotificationsCollectionRef);
        const docs = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        })) as INotificationData[];

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

export default useFetchUserNotifications;
