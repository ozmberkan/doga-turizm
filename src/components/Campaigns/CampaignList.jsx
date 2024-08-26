import React, { useEffect } from "react";
import CampaignBox from "./CampaignBox";
import { db } from "~/firebase/firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setCampaigns } from "~/redux/slices/campaignsSlice";

const CampaignList = () => {
  const ref = collection(db, "campaigns");
  const dispatch = useDispatch();
  const [snapshot] = useCollection(ref);

  useEffect(() => {
    if (snapshot) {
      const campaignData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(setCampaigns(campaignData));
    }
  }, [snapshot]);


  return (
    <div className="w-full py-5 font-rubik grid grid-cols-1 gap-5 sm:grid-cols-3 ">
      {snapshot?.docs.map((doc) => (
        <CampaignBox key={doc.id} campaign={{ id: doc.id, ...doc.data() }} />
      ))}
    </div>
  );
};

export default CampaignList;
