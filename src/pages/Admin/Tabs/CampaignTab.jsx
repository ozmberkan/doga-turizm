import { collection, deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { BiEdit, BiTrash } from "react-icons/bi";
import { FaSort } from "react-icons/fa6";
import { toast } from "react-toastify";
import CampaignEditModal from "~/components/UI/Modals/CampaignEditModal";
import { campaignTableTitles } from "~/data/data";
import { db } from "~/firebase/firebaseConfig";
import { orderBy } from "lodash";
import NewCampaignModal from "~/components/UI/Modals/NewCampaignModal";

const CampaignTab = () => {
  const [isModal, setIsModal] = useState(false);
  const [sorting, setSorting] = useState({ key: "", order: "" });
  const [search, setSearch] = useState("");
  const [isAddModal, setIsAddModal] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const ref = collection(db, "campaigns");
  const [snapshot] = useCollection(ref);
  const data = snapshot?.docs.map((doc) => ({
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

  const filteredCampaigns = orderBy(
    data?.filter((campaign) => {
      return `${campaign.cityName}`
        .toLowerCase()
        .includes(search.toLowerCase());
    }),
    [sorting.key],
    [sorting.order]
  );

  return (
    <div className="bg-white p-3 border rounded-md shadow-md">
      <div>
        <div className="flex gap-x-2 items-center justify-start mb-2">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-md px-4 outline-none border"
            placeholder="Ara..."
          />
          <button
            onClick={() => setIsAddModal(true)}
            className="px-4 rounded-md border bg-[#f9f9f9]"
          >
            Ekle
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="border w-full mt-5">
            <thead className="bg-zinc-100">
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
                <tr className="sm:grid flex sm:grid-cols-6 grid-cols-1 place-items-center p-4 gap-5">
                  <React.Fragment key={campaign.id}>
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
                        className="border border-[#4FC647] text-[#4FC647] sm:p-3 p-1.5 rounded-md"
                      >
                        <BiTrash size={20} />
                      </button>
                      <button
                        onClick={() => openEdit(campaign)}
                        className="border border-[#4FC647] text-[#4FC647] sm:p-3 p-1.5 rounded-md"
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
      {isAddModal && <NewCampaignModal setIsAddModal={setIsAddModal} />}
    </div>
  );
};

export default CampaignTab;
