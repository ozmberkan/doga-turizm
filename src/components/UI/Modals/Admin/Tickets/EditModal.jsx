import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "~/firebase/firebaseConfig";
import { ticketEditInput, cities } from "~/data/data";
import toast from "react-hot-toast";

const EditModal = ({ setIsModal, selectedTicket }) => {
  const [formData, setFormData] = useState({
    pnr: selectedTicket.pnr,
    departure: selectedTicket.departure,
    arrival: selectedTicket.arrival,
    date: selectedTicket.date,
    time: selectedTicket.time,
    price: selectedTicket.price,
    wifi: selectedTicket.wifi,
    electric: selectedTicket.electric,
    food: selectedTicket.food,
    tv: selectedTicket.tv,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "tickets", selectedTicket.id), formData);
      toast.success("Bilet başarıyla güncellendi.");
      setIsModal(false);
    } catch (error) {
      toast.error("Bilet güncellenirken bir hata oluştu.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 sm:p-0 p-6">
      <div className="bg-zinc-100 dark:bg-gray-800 dark:border-gray-700 border rounded-2xl shadow-lg p-6 max-w-2xl w-full relative z-50">
        <div className="flex w-full gap-y-2 flex-col mb-5">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-xl font-semibold text-black dark:text-white ">
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
            <div className="grid gap-3">
              {ticketEditInput.map((input) =>
                input.name === "departure" || input.name === "arrival" ? (
                  <div
                    key={input.name}
                    className="flex flex-col sm:text-base text-sm"
                  >
                    <label className="dark:text-white">{input.label}</label>
                    <select
                      name={input.name}
                      value={formData[input.name]}
                      onChange={handleInputChange}
                      className="px-4 py-2 h-10 rounded-md w-full bg-white dark:bg-transparent dark:text-gray-400 dark:placeholder:text-gray-300 dark:border-gray-700 border outline-none"
                    >
                      {cities.map((city) => (
                        <option key={city.id} value={city.value}>
                          {city.title}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : input.type === "text" || input.type === "date" ? (
                  <div className="flex flex-col sm:text-base text-sm">
                    <label className="dark:text-white">{input.label}</label>
                    <input
                      key={input.name}
                      type={input.type}
                      name={input.name}
                      value={formData[input.name]}
                      onChange={handleInputChange}
                      className="px-4 py-2 rounded-md w-full bg-white dark:bg-transparent dark:text-gray-400 dark:placeholder:text-gray-300 dark:border-gray-700 border outline-none"
                    />
                  </div>
                ) : (
                  <div key={input.name}>
                    <div className="flex items-center gap-x-2  justify-between rounded-md p-2 dark:bg-gray-700 bg-white dark:border-gray-700 border px-4">
                      <span className="dark:text-white">{input.label}</span>
                      <input
                        type={input.type}
                        name={input.name}
                        checked={formData[input.name]}
                        onChange={handleCheckboxChange}
                        className="dark:accent-green-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-300 dark:border-gray-700 border outline-none"
                      />
                    </div>
                  </div>
                )
              )}
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

export default EditModal;
