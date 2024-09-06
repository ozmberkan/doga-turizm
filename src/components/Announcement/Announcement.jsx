import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "~/firebase/firebaseConfig";
import { collection } from "firebase/firestore";
import AnnouncementBox from "./AnnouncementBox";

const Announcement = () => {
  const annRef = collection(db, "announcement");
  const [snapshot] = useCollection(annRef);

  const data = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return (
    <div className="container w-full sm:w-2/3 h-full  flex justify-center items-center mx-auto gap-y-2 sm:my-5 my-5">
      {data?.map((annItem) => (
        <AnnouncementBox key={annItem.id} annItem={annItem} />
      ))}
    </div>
  );
};

export default Announcement;
