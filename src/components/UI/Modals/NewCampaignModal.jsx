import { addDoc, collection, doc } from "firebase/firestore";
import moment from "moment";
import React from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { cities } from "~/data/data";
import { db } from "~/firebase/firebaseConfig";

const NewCampaignModal = ({ setIsAddModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addTicket = async (data) => {
    const ref = collection(db, "campaigns");

    try {
      await addDoc(ref, data);
      toast.success("Başarıyla veritabanına kampanya eklendi!");
      setIsAddModal(false);
    } catch (error) {
      toast.error("Kampanya eklenirken bir hata oluştu.");
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-zinc-100 border  rounded-2xl shadow-lg p-6 max-w-2xl w-full relative z-50">
        <div className="flex w-full gap-y-2 flex-col mb-5">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-xl font-semibold text-black ">
              Yeni Kampanya Ekle
            </h3>
            <button
              onClick={() => setIsAddModal(false)}
              className="text-gray-500 hover:text-zinc-300 dark:hover:text-zinc-800 hover:bg-zinc-800 p-1 flex items-center justify-center dark:hover:bg-[#f1f1f1] rounded-md transition-colors duration-500"
            >
              <IoClose size={25} />
            </button>
          </div>
          <form onSubmit={handleSubmit(addTicket)}>
            <div className="grid gap-4">
              <select
                type="text"
                {...register("cityName")}
                placeholder="Varış"
                className="px-4 py-2 rounded-md bg-white border outline-none"
              >
                {cities.map((city) => (
                  <option key={city.id} value={city.value}>
                    {city.title}
                  </option>
                ))}
              </select>
              <input
                type="text"
                {...register("newPrice")}
                placeholder="Yeni Fiyat"
                className="px-4 py-2 rounded-md bg-white border outline-none"
              />
              <input
                type="text"
                {...register("oldPrice")}
                placeholder="Eski Fiyat"
                className="px-4 py-2 rounded-md bg-white border outline-none"
              />
              <input
                type="text"
                {...register("image")}
                placeholder="Görsel Link"
                className="px-4 py-2 rounded-md bg-white border outline-none"
              />
            </div>
            <div className="flex justify-end mt-5 gap-x-2">
              <button
                onClick={() => setIsAddModal(false)}
                type="button"
                className="px-4 py-2 rounded-md bg-gray-400 text-white hover:bg-gray-500"
              >
                İptal
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-[#4FC647] text-white hover:bg-[#45b840]"
              >
                Ekle
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => setIsAddModal(false)}
      ></div>
    </div>
  );
};

export default NewCampaignModal;
