import React from "react";
import CampaignList from "./CampaignList";
import CampaignHeader from "./CampaignHeader";

const Campaign = () => {
  return (
    <div className="container mx-auto w-2/3 flex justify-center items-center flex-col mt-12 py-5">
      <CampaignHeader />
      <CampaignList />
    </div>
  );
};

export default Campaign;
