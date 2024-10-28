import { collection, deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { BiEdit, BiTrash } from "react-icons/bi";
import { FaSort } from "react-icons/fa6";
import { campaignTableTitles, campaignTableTitlesTexts } from "~/data/data";
import { db } from "~/firebase/firebaseConfig";
import { orderBy } from "lodash";
import NewCampaignModal from "~/components/UI/Modals/Admin/Campaigns/NewCampaignModal";
import CampaignEditModal from "~/components/UI/Modals/Admin/Campaigns/CampaignEditModal";
import React from "react";
import CampaignTextModal from "~/components/UI/Modals/Admin/Campaigns/CampaignTexts/CampaignTextModal";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const CampaignTab = () => {
  const [isModal, setIsModal] = useState(false);
  const [isTextModal, setIsTextModal] = useState(false);
  const [sorting, setSorting] = useState({ key: "", order: "" });
  const [search, setSearch] = useState("");
  const [isAddModal, setIsAddModal] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [selectedCampaignText, setSelectedCampaignText] = useState(null);
  const { campaigns } = useSelector((store) => store.campaigns);

  const campaignTexts = collection(db, "campaignsText");
  const [campaignTextDataSnapshot] = useCollection(campaignTexts);

  const campaignTextData = campaignTextDataSnapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const deleteCampaign = async (id) => {
    try {
      await deleteDoc(doc(db, "campaigns", id));
      toast.success("Kampanya başarıyla silindi.");
    } catch (error) {
      toast.error("Kampanya silinirken bir hata oluştu.");
    }
  };

  const openEdit = (campaign) => {
    setIsModal(true);
    setSelectedCampaign(campaign);
  };

  const openTextEdit = (campaign) => {
    setIsTextModal(true);
    setSelectedCampaignText(campaign);
  };

  const filteredCampaigns = orderBy(
    campaigns?.filter((campaign) => {
      return `${campaign.cityName}`
        .toLowerCase()
        .includes(search.toLowerCase());
    }),
    [sorting.key],
    [sorting.order]
  );

  return (
    <div className="bg-white dark:bg-gray-800 p-3 border  dark:border-gray-700 rounded-md shadow-md">
      <div>
        <div className="flex gap-x-2 items-center justify-start">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-md dark:bg-transparent dark:border-gray-700 dark:text-white py-1 px-4 outline-none border"
            placeholder="Ara..."
          />
          <button
            onClick={() => setIsAddModal(true)}
            className="px-4 py-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-md border bg-[#f9f9f9]"
          >
            Ekle
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="border w-full mt-5 dark:border-gray-700 ">
            <thead className="bg-zinc-100 dark:text-white dark:bg-gray-900">
              <tr className="sm:grid flex sm:grid-cols-6 grid-cols-1 place-items-center p-4 gap-5">
                {campaignTableTitles.map((title) => (
                  <th key={title.id} className="flex items-center gap-x-2">
                    {title.title}
                    {title.sortable && (
                      <button
                        onClick={() => {
                          if (title.key === sorting.key) {
                            setSorting({
                              key: title.key,
                              order: sorting.order === "asc" ? "desc" : "asc",
                            });
                          } else {
                            setSorting({
                              key: title.key,
                              order: "asc",
                            });
                          }
                        }}
                      >
                        <FaSort size={20} />
                      </button>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-zinc-50/5 max-h-96 overflow-y-auto block w-full divide-y">
              {filteredCampaigns?.map((campaign) => (
                <tr
                  key={campaign.id}
                  className="sm:grid flex sm:grid-cols-6 grid-cols-1 place-items-center dark:text-white p-4 gap-5"
                >
                  <React.Fragment>
                    <td className="w-full">{campaign.id}</td>
                    <td>{campaign.cityName}</td>
                    <td>{campaign.newPrice}</td>
                    <td>{campaign.oldPrice}</td>
                    <td>
                      <img
                        src={campaign.image}
                        className="sm:w-12 rounded-md shadow-sm w-24"
                      />
                    </td>
                    <td className="flex gap-x-2 ">
                      <button
                        onClick={() => deleteCampaign(campaign.id)}
                        className="border dark:text-white hover:bg-primary hover:text-white transition-colors dark:hover:bg-white dark:hover:text-black dark:border-white border-[#4FC647] text-[#4FC647] sm:p-3 p-1.5 rounded-md"
                      >
                        <BiTrash size={20} />
                      </button>
                      <button
                        onClick={() => openEdit(campaign)}
                        className="border dark:text-white hover:bg-primary hover:text-white transition-colors dark:hover:bg-white dark:hover:text-black dark:border-white border-[#4FC647] text-[#4FC647] sm:p-3 p-1.5 rounded-md"
                      >
                        <BiEdit size={20} />
                      </button>
                    </td>
                  </React.Fragment>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto">
          <table className="border w-full mt-5 dark:border-gray-700 ">
            <thead className="bg-zinc-100 dark:text-white dark:bg-gray-900">
              <tr className="sm:grid flex sm:grid-cols-5 grid-cols-1 place-items-center p-4 gap-5">
                {campaignTableTitlesTexts.map((title) => (
                  <th
                    key={title.id}
                    className={`flex items-center gap-x-2 ${
                      title.title === "Kampanya Açıklama"
                        ? "col-span-2 w-full"
                        : ""
                    }`}
                  >
                    {title.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-zinc-50/5 max-h-96 overflow-y-auto block w-full divide-y">
              {campaignTextData?.map((campaign) => (
                <tr
                  key={campaign.id}
                  className="sm:grid flex sm:grid-cols-5 grid-cols-1 place-items-center dark:text-white p-4 gap-5"
                >
                  <React.Fragment>
                    <td>{campaign.campaignInfo}</td>
                    <td>{campaign.campaignTitle}</td>
                    <td className="col-span-2 w-full">
                      {campaign.campaignDesc}
                    </td>

                    <td className="flex gap-x-2 ">
                      <button
                        onClick={() => openTextEdit(campaign)}
                        className="border dark:text-white hover:bg-primary hover:text-white transition-colors dark:hover:bg-white dark:hover:text-black dark:border-white border-[#4FC647] text-[#4FC647] sm:p-3 p-1.5 rounded-md"
                      >
                        <BiEdit size={20} />
                      </button>
                    </td>
                  </React.Fragment>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModal && (
        <CampaignEditModal
          setIsModal={setIsModal}
          selectedCampaign={selectedCampaign}
        />
      )}
      {isTextModal && (
        <CampaignTextModal
          setIsTextModal={setIsTextModal}
          selectedCampaignText={selectedCampaignText}
        />
      )}
      {isAddModal && <NewCampaignModal setIsAddModal={setIsAddModal} />}
    </div>
  );
};

export default CampaignTab;
