import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "~/firebase/firebaseConfig";
import { toast } from "react-toastify";

const UsersEditModal = ({ setIsModal, selectedUser }) => {
  const [formData, setFormData] = useState({
    admin: selectedUser.admin,
    displayName: selectedUser.displayName,
    email: selectedUser.email,
    phoneNumber: selectedUser.phoneNumber,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const ref = doc(db, "users", selectedUser.id);
      await updateDoc(ref, formData);
      toast.success("Kullanıcı başarıyla güncellendi.");
      setIsModal(false);
    } catch (error) {
      toast.error("Kullanıcı güncellenirken bir hata oluştu.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-zinc-100 border rounded-2xl shadow-lg p-6 max-w-2xl w-full relative z-50">
        <div className="flex w-full gap-y-2 flex-col mb-5">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-xl font-semibold text-black">Düzenle</h3>
            <button
              className="text-gray-500 hover:text-zinc-300 dark:hover:text-zinc-800 hover:bg-zinc-800 p-1 flex items-center justify-center dark:hover:bg-[#f1f1f1] rounded-md transition-colors duration-500"
              onClick={() => setIsModal(false)}
            >
              <IoClose size={25} />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <select
                type="text"
                name="admin"
                value={formData.admin}
                onChange={handleInputChange}
                placeholder="Admin"
                className="px-4 py-2 rounded-md bg-white border outline-none"
              >
                <option value={true}>Evet</option>
                <option value={false}>Hayır</option>
              </select>
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleInputChange}
                placeholder="Ad Soyad"
                className="px-4 py-2 rounded-md bg-white border outline-none"
              />
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E-Mail"
                className="px-4 py-2 rounded-md bg-white border outline-none"
              />
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Telefon Numarası"
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

export default UsersEditModal;
