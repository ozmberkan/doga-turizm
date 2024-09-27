import { useDispatch, useSelector } from "react-redux";
import { getAllCampaigns, reset } from "~/redux/slices/campaignSlice";
import { useEffect } from "react";
import CampaignBox from "./CampaignBox";
import { quantum } from "ldrs";
import { Link } from "react-router-dom";

const CampaignList = () => {
  quantum.register();
  const dispatch = useDispatch();
  const { campaigns, isLoading, isError } = useSelector(
    (state) => state.campaigns
  );

  useEffect(() => {
    dispatch(getAllCampaigns());

    return () => {
      dispatch(reset());
    };
    
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center h-[200px] mt-2">
        <l-quantum size="90" speed="1.75" color="#4FC646"></l-quantum>;
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full bg-red-100 mt-4 px-4 py-2 rounded-md text-red-500 text-sm flex justify-between items-center">
        Bir hata oluştu. Lütfen geliştirici ile iletişime geçiniz!
        <Link to="/contact">İletişim</Link>
      </div>
    );
  }

  return (
    <div className="w-full py-5 font-rubik grid grid-cols-1 gap-5 sm:grid-cols-3 ">
      {campaigns?.map((campaign) => (
        <CampaignBox key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
};

export default CampaignList;
