import { useSelector } from "react-redux";
import CampaignBox from "./CampaignBox";

const CampaignList = () => {
  const { campaigns } = useSelector((state) => state.campaigns);

  return (
    <div className="w-full py-5 font-rubik grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5 ">
      {campaigns?.map((campaign) => (
        <CampaignBox key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
};

export default CampaignList;
