import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiTrash } from "react-icons/bi";
import { setUpdate } from "~/redux/slices/userSlice";
import { doc, setDoc } from "firebase/firestore";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { db } from "~/firebase/firebaseConfig";
import LastTicket from "../LastTicket";
import { BsTicketDetailedFill } from "react-icons/bs";
import toast from "react-hot-toast";

const LastTicketTab = () => {
  const [hide, setHide] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const ref = doc(db, "users", user.uid);

  const deleteLastTickets = async () => {
    if (user?.allTickets.length === 0) {
      toast.error("Silinecek bilet bulunamadı.");
      return;
    }

    try {
      await setDoc(ref, { ...user, allTickets: [] });
      toast.success("Bütün biletler temizlendi.");
    } catch (error) {
      toast.error("Biletler temizlenirken bir hata oluştu.");
    }

    dispatch(setUpdate({ ...user, allTickets: [] }));
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800 dark:border-gray-700 rounded-md border p-5 min-h-[200px]">
      <div className="w-full mb-5 flex justify-between items-center ">
        <h1 className="sm:text-2xl text-base flex items-center gap-x-2 font-medium dark:text-white">
          <BsTicketDetailedFill />
          Geçmiş Biletlerim
        </h1>
        <div className="flex gap-x-3 sm:flex-row flex-col gap-y-2">
          <button
            onClick={deleteLastTickets}
            className="bg-red-100 text-red-500 dark:bg-red-900 px-4 py-1 rounded-md flex justify-center items-center gap-x-1 "
          >
            <BiTrash />
            <span className="sm:flex hidden">Biletleri Temizle</span>
          </button>
          {hide === false ? (
            <button
              onClick={() => setHide(true)}
              className="bg-zinc-100 dark:bg-gray-700 text-zinc-500 sm:px-4 py-1 rounded-md flex justify-center items-center gap-x-1 sm:min-w-[200px]"
            >
              <FaEyeSlash />{" "}
              <span className="sm:flex hidden">Biletleri Gizle</span>
            </button>
          ) : (
            <button
              onClick={() => setHide(false)}
              className="bg-green-100 dark:bg-gray-700 text-green-500 sm:px-4 py-1 rounded-md flex justify-center items-center gap-x-1 sm:min-w-[200px]"
            >
              <FaEye /> <span className="sm:flex hidden">Biletleri Göster</span>
            </button>
          )}
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:w-full sm:gap-5 flex flex-col gap-y-5 w-full">
        {user?.allTickets?.length > 0 ? (
          user?.allTickets?.map((ticket) => (
            <LastTicket key={ticket.ticketID} ticket={ticket} hide={hide} />
          ))
        ) : (
          <div className="bg-red-100 text-red-500 dark:bg-red-900 dark:text-red-300  p-3 rounded-md">
            Herhangi bir bilet bulunamadı!
          </div>
        )}
      </div>
    </div>
  );
};

export default LastTicketTab;
