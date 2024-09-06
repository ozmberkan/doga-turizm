import { db } from "~/firebase/firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setCampaigns } from "~/redux/slices/campaignSlice";
import CampaignBox from "./CampaignBox";
import { useEffect } from "react";

const CampaignList = () => {
  const campaignRef = collection(db, "campaigns");
  const [snapshot] = useCollection(campaignRef);

  const data = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setCampaigns(data));
    }
  }, [data, dispatch]);

  return (
    <div className="w-full py-5 font-rubik grid grid-cols-1 gap-5 sm:grid-cols-3 ">
      {data?.map((campaign) => (
        <CampaignBox key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
};

export default CampaignList;
