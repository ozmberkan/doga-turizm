import { addDoc, collection, doc } from "firebase/firestore";
import moment from "moment";
import React from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { cities } from "~/data/data";
import { db } from "~/firebase/firebaseConfig";

const NewTicketModal = ({ setIsAddModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addTicket = async (data) => {
    const ref = collection(db, "tickets");

    const selectedDate = moment(data.date)
      .set({ hour: 20, minute: 0, second: 0 })
      .utcOffset("+03:00")
      .format("MMMM DD, YYYY at hh:mm:ss A [UTC+3]");

    data.date = selectedDate;

    try {
      await addDoc(ref, data);
      toast.success("Başarıyla veritabanına bilet eklendi!");
      setIsAddModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-zinc-100 border  rounded-2xl shadow-lg p-6 max-w-2xl w-full relative z-50">
        <div className="flex w-full gap-y-2 flex-col mb-5">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-xl font-semibold text-black ">
              Yeni Bilet Ekle
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
              <input
                type="text"
                {...register("pnr", { required: true })}
                placeholder="PNR"
                className="px-4 py-2 rounded-md bg-white border outline-none"
              />
              <select
                type="text"
                name="departure"
                {...register("departure")}
                placeholder="Kalkış"
                className="px-4 py-2 rounded-md bg-white border outline-none"
              >
                {cities.map((city) => (
                  <option key={city.id} value={city.value}>
                    {city.title}
                  </option>
                ))}
              </select>
              <select
                type="text"
                {...register("arrival")}
                placeholder="Varış"
                className="px-4 py-2 rounded-md bg-white border outline-none"
              >
                {cities.map((city) => (
                  <option value={city.value}>{city.title}</option>
                ))}
              </select>
              <input
                type="date"
                {...register("date")}
                placeholder="Tarih"
                className="px-4 py-2 rounded-md bg-white border outline-none"
              />
              <input
                type="text"
                {...register("price")}
                placeholder="Fiyat"
                className="px-4 py-2 rounded-md bg-white border outline-none"
              />
              <div className="flex gap-x-2 items-center">
                <label className="flex items-center gap-x-2">
                  <input type="checkbox" name="wifi" {...register("wifi")} />
                  Wi-Fi
                </label>
                <label className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    name="wifi"
                    {...register("electric")}
                  />
                  Elektrik
                </label>
                <label className="flex items-center gap-x-2">
                  <input type="checkbox" name="wifi" {...register("food")} />
                  Yemek
                </label>
                <label className="flex items-center gap-x-2">
                  <input type="checkbox" name="wifi" {...register("tv")} />
                  TV
                </label>
              </div>
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

export default NewTicketModal;