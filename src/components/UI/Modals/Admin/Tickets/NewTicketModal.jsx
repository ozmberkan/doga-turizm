import { addDoc, collection } from "firebase/firestore";
import moment from "moment";
import React from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { cities } from "~/data/data";
import { db } from "~/firebase/firebaseConfig";
import { newTicketInput } from "~/data/data";

const NewTicketModal = ({ setIsAddModal }) => {
  const { register, handleSubmit } = useForm();

  const addTicket = async (data) => {
    const selectedDate = moment(data.date)
      .set({ hour: 20, minute: 0, second: 0 })
      .utcOffset("+03:00")
      .format("MMMM DD, YYYY at hh:mm:ss A [UTC+3]");

    data.date = selectedDate;

    const seats = Array.from({ length: 15 }, (_, index) => ({
      isAvailable: true,
      number: index + 1,
    }));

    data.seats = seats;

    try {
      await addDoc(collection(db, "tickets"), data);
      toast.success("Başarıyla veritabanına bilet eklendi!");
      setIsAddModal(false);
    } catch (error) {
      toast.error("Bilet eklenirken bir hata oluştu.");
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 sm:p-0 p-6">
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
            <div className="grid gap-2">
              {newTicketInput.map((input) => {
                if (input.name === "departure" || input.name === "arrival") {
                  return (
                    <div
                      key={input.name}
                      className="flex flex-col sm:text-base text-sm"
                    >
                      <label>{input.label}</label>
                      <select
                        name={input.name}
                        {...register(input.name)}
                        className="px-4 py-2 h-10 rounded-md bg-white border outline-none w-full"
                      >
                        {cities.map((city) => (
                          <option key={city.id} value={city.value}>
                            {city.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                } else if (input.type === "text" || input.type === "date") {
                  return (
                    <div
                      key={input.name}
                      className="flex flex-col sm:text-base text-sm"
                    >
                      <label>{input.label}</label>
                      <input
                        type={input.type}
                        {...register(input.name)}
                        placeholder={input.placeholder}
                        className="px-4 py-2 rounded-md h-10  bg-white border outline-none w-full"
                      />
                    </div>
                  );
                } else {
                  return (
                    <label
                      key={input.name}
                      className="flex items-center gap-x-2"
                    >
                      <input
                        type={input.type}
                        name={input.name}
                        {...register(input.name)}
                      />
                      {input.label}
                    </label>
                  );
                }
              })}
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
