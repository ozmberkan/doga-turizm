import { doc, updateDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { db } from "~/firebase/firebaseConfig";

const CampaignTextModal = ({ setIsTextModal, selectedCampaignText }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      campaignInfo: selectedCampaignText.campaignInfo,
      campaignTitle: selectedCampaignText.campaignTitle,
      campaignDesc: selectedCampaignText.campaignDesc,
    },
  });

  const saveCampaignText = async (data) => {
    try {
      const campaignTextRef = doc(db, "campaignsText", selectedCampaignText.id);

      await updateDoc(campaignTextRef, {
        campaignInfo: data.campaignInfo,
        campaignTitle: data.campaignTitle,
        campaignDesc: data.campaignDesc,
      });

      toast.success("Kampanya metni başarıyla güncellendi.");
      setIsTextModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 sm:p-0 p-6">
      <div className="bg-zinc-100 border dark:bg-gray-800 dark:border-gray-700   rounded-2xl shadow-lg p-6 max-w-2xl w-full relative z-50">
        <div className="flex w-full gap-y-2 flex-col mb-5">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Düzenle
            </h3>
            <button
              className="text-gray-500 hover:text-zinc-300 dark:hover:text-zinc-800 hover:bg-zinc-800 p-1 flex items-center justify-center dark:hover:bg-[#f1f1f1] rounded-md transition-colors duration-500"
              onClick={() => setIsTextModal(false)}
            >
              <IoClose size={25} />
            </button>
          </div>
          <form
            className="flex flex-col gap-y-5"
            onSubmit={handleSubmit(saveCampaignText)}
          >
            <input
              type="text"
              defaultValue={selectedCampaignText.campaignInfo}
              {...register("campaignInfo")}
              className="px-4 py-2 rounded-md bg-white dark:bg-transparent dark:text-gray-400 dark:placeholder:text-gray-300 dark:border-gray-700 border outline-none"
            />
            <input
              type="text"
              defaultValue={selectedCampaignText.campaignTitle}
              {...register("campaignTitle")}
              className="px-4 py-2 rounded-md bg-white dark:bg-transparent dark:text-gray-400 dark:placeholder:text-gray-300 dark:border-gray-700 border outline-none"
              s
            />
            <textarea
              type="text"
              defaultValue={selectedCampaignText.campaignDesc}
              {...register("campaignDesc")}
              className="px-4 py-2 max-h-20 min-h-20 rounded-md bg-white dark:bg-transparent dark:text-gray-400 dark:placeholder:text-gray-300 dark:border-gray-700 border outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-[#4FC647] text-white hover:bg-[#45b840]"
            >
              Kaydet
            </button>
          </form>
        </div>
      </div>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => setIsTextModal(false)}
      ></div>
    </div>
  );
};

export default CampaignTextModal;
