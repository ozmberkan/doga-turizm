import React from "react";
import { campaigns } from "../../data/data";
import CampaignBox from "./CampaignBox";

const CampaignList = () => {
  return (
    <div className="w-full py-5 font-rubik grid grid-cols-1 gap-5 sm:grid-cols-3 ">
      {campaigns.map((campaign) => (
        <CampaignBox key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
};

export default CampaignList;
