import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { db } from "~/firebase/firebaseConfig";

const CampaignHeader = () => {
  const [data, setData] = useState(null);

  const getCampaignTexts = async () => {
    try {
      const campaignTexts = await getDocs(collection(db, "campaignsText"));

      const data = campaignTexts.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCampaignTexts();
  }, []);

  return (
    <div className="font-rubik flex flex-col gap-y-4 sm:justify-start sm:items-start justify-center items-center w-full sm:text-left text-center">
      <span className="bg-gradient-to-r dark:from-gray-950 dark:to-gray-900 dark:border-gray-800 from-green-500 to-green-700 text-white w-44 justify-center items-center flex text-sm gap-x-2  rounded-md border px-4 py-1">
        <BiSolidOffer size={18} />
        {data?.campaignInfo}
      </span>
      <h1 className="text-2xl sm:text-4xl font-semibold text-zinc-700 dark:text-white">
        {data?.campaignTitle}
      </h1>
      <p className="text-base sm:text-2xl text-zinc-600 dark:text-white">
        {data?.campaignDesc}
      </p>
    </div>
  );
};

export default CampaignHeader;
