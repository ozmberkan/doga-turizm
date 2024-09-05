import { db } from "~/firebase/firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import CampaignBox from "./CampaignBox";

const CampaignList = () => {
  const [snapshot] = useCollection(collection(db, "campaigns"));

  return (
    <div className="w-full py-5 font-rubik grid grid-cols-1 gap-5 sm:grid-cols-3 ">
      {snapshot?.docs.map((doc) => (
        <CampaignBox key={doc.id} campaign={{ id: doc.id, ...doc.data() }} />
      ))}
    </div>
  );
};

export default CampaignList;
