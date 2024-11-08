import { quantum } from "ldrs";
import { useDispatch, useSelector } from "react-redux";
import CampaignHeader from "./CampaignHeader";
import CampaignList from "./CampaignList";
import { useEffect } from "react";
import { getAllCampaigns } from "~/redux/slices/campaignSlice";

const Campaign = () => {
  quantum.register();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.campaigns);

  useEffect(() => {
    dispatch(getAllCampaigns());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="w-full flex justify-center items-center h-[200px] mt-2">
        <l-quantum size="90" speed="1.75" color="#4FC646"></l-quantum>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="w-full bg-red-100 mt-4 px-4 py-2 rounded-md text-red-500 text-sm flex justify-between items-center">
        Bir hata oluştu. Lütfen geliştirici ile iletişime geçiniz!
        <Link to="/contact">İletişim</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto w-3/4 sm:w-2/3 flex justify-center items-center flex-col  py-5 ">
      <CampaignHeader />
      <CampaignList />
    </div>
  );
};

export default Campaign;
