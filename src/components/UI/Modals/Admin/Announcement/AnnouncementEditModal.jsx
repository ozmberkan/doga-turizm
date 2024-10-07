import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "~/firebase/firebaseConfig";
import { toast } from "react-toastify";
import { announcementEditInput } from "~/data/data";

const AnnouncementEditModal = ({ setIsModal, selectedAnn }) => {
  const [formData, setFormData] = useState({
    title: selectedAnn.title,
    titleDesc: selectedAnn.titleDesc,
    image: selectedAnn.image,
    mobileImg: selectedAnn.mobileImg,
    annTitle: selectedAnn.annTitle,
    annDesc: selectedAnn.annDesc,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "announcement", selectedAnn.id), formData);
      toast.success("Duyurular başarıyla güncellendi.");
      setIsModal(false);
    } catch (error) {
      toast.error("Duyurular güncellenirken bir hata oluştu.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 sm:p-0 p-6">
      <div className="bg-zinc-100 dark:bg-gray-800 dark:border-gray-700  border  rounded-2xl shadow-lg p-6 max-w-2xl w-full relative z-50">
        <div className="flex w-full gap-y-2 flex-col mb-5">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-xl font-semibold text-black  dark:text-white">
              Düzenle
            </h3>
            <button
              className="text-gray-500 hover:text-zinc-300 dark:hover:text-zinc-800 hover:bg-zinc-800 p-1 flex items-center justify-center dark:hover:bg-[#f1f1f1] rounded-md transition-colors duration-500"
              onClick={() => setIsModal(false)}
            >
              <IoClose size={25} />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              {announcementEditInput.map((input) => (
                <div className="flex flex-col sm:text-base text-sm">
                  <label className="dark:text-white">{input.label}</label>
                  <input
                    type={input.type}
                    name={input.name}
                    value={formData[input.name]}
                    onChange={handleInputChange}
                    className="px-4 py-2 rounded-md bg-white dark:bg-transparent dark:text-gray-400 dark:placeholder:text-gray-300 dark:border-gray-700 border outline-none"
                  />
                </div>
              ))}
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
                className="px-4 py-2 rounded-md bg-primary text-white hover:bg-hoverPrimary"
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

export default AnnouncementEditModal;
