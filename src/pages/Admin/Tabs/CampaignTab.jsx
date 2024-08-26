import { collection, deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { BiEdit, BiTrash } from "react-icons/bi";
import { FaSort } from "react-icons/fa6";
import { toast } from "react-toastify";
import CampaignEditModal from "~/components/UI/Modals/CampaignEditModal";
import { campaignTableTitles } from "~/data/data";
import { db } from "~/firebase/firebaseConfig";

const CampaignTab = () => {
  const [isModal, setIsModal] = useState(false);
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
      console.log("HATA", error);
    }
  };

  const openEdit = (campaign) => {
    setIsModal(true);
    setSelectedCampaign(campaign);
  };

  return (
    <>
      <div>
        <table className="border w-full">
          <thead className="bg-zinc-200">
            <tr className="grid grid-cols-6 place-items-center h-12">
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
          <tbody className="bg-zinc-100">
            <tr className="grid grid-cols-6 place-items-center p-4  gap-5">
              {data?.map((campaign) => (
                <React.Fragment key={campaign.id}>
                  <td className="w-full">{campaign.id}</td>
                  <td>{campaign.cityName}</td>
                  <td>{campaign.newPrice}</td>
                  <td>{campaign.oldPrice}</td>
                  <td>
                    <img src={campaign.image} className="w-12" />
                  </td>
                  <td className="flex gap-x-2 ">
                    <button
                      onClick={() => deleteCampaign(campaign.id)}
                      className="border border-[#4FC647] text-[#4FC647] p-3 rounded-md"
                    >
                      <BiTrash size={20} />
                    </button>
                    <button
                      onClick={() => openEdit(campaign)}
                      className="border border-[#4FC647] text-[#4FC647] p-3 rounded-md"
                    >
                      <BiEdit size={20} />
                    </button>
                  </td>
                </React.Fragment>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      {isModal && (
        <CampaignEditModal
          setIsModal={setIsModal}
          selectedCampaign={selectedCampaign}
        />
      )}
    </>
  );
};

export default CampaignTab;
