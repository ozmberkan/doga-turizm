import CampaignHeader from "./CampaignHeader";
import CampaignList from "./CampaignList";

const Campaign = () => {
  return (
    <div className="container mx-auto w-3/4 sm:w-2/3 flex justify-center items-center flex-col  py-5 ">
      <CampaignHeader />
      <CampaignList />
    </div>
  );
};

export default Campaign;
