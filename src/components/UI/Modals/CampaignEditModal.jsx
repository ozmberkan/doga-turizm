import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "~/firebase/firebaseConfig";
import { toast } from "react-toastify";

const CampaignEditModal = ({ setIsModal, selectedCampaign }) => {
  const [formData, setFormData] = useState({
    cityName: selectedCampaign.cityName,
    newPrice: selectedCampaign.newPrice,
    oldPrice: selectedCampaign.oldPrice,
    image: selectedCampaign.image,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "campaigns", selectedCampaign.id), formData);
      toast.success("Kampanya başarıyla güncellendi.");
      setIsModal(false);
    } catch (error) {
      console.error("Error updating document: ", error);
      toast.error("Kampanya güncellenirken bir hata oluştu.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-zinc-100 border  rounded-2xl shadow-lg p-6 max-w-2xl w-full relative z-50">
        <div className="flex w-full gap-y-2 flex-col mb-5">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-xl font-semibold text-black ">Düzenle</h3>
            <button
              className="text-gray-500 hover:text-zinc-300 dark:hover:text-zinc-800 hover:bg-zinc-800 p-1 flex items-center justify-center dark:hover:bg-[#f1f1f1] rounded-md transition-colors duration-500"
              onClick={() => setIsModal(false)}
            >
              <IoClose size={25} />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <input
                type="text"
                name="cityName"
                value={formData.cityName}
                onChange={handleInputChange}
                placeholder="PNR"
                className="px-4 py-2 rounded-md bg-white border outline-none"
              />
              <input
                type="text"
                name="newPrice"
                value={formData.newPrice}
                onChange={handleInputChange}
                placeholder="Kalkış"
                className="px-4 py-2 rounded-md bg-white border outline-none"
              />
              <input
                type="text"
                name="oldPrice"
                value={formData.oldPrice}
                onChange={handleInputChange}
                placeholder="Varış"
                className="px-4 py-2 rounded-md bg-white border outline-none"
              />
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="Tarih"
                className="px-4 py-2 rounded-md bg-white border outline-none"
              />
            </div>
            <div className="flex justify-end mt-5 gap-x-2">
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-gray-400 text-white hover:bg-gray-500"
                onClick={() => setIsModal(false)}
              >
                İptal
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-[#4FC647] text-white hover:bg-[#45b840]"
              >
                Güncelle
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
    </div>
  );
};

export default CampaignEditModal;