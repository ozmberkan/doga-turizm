import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiTrash } from "react-icons/bi";
import { setUser } from "~/redux/slices/userSlice";
import { doc, setDoc } from "firebase/firestore";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { db } from "~/firebase/firebaseConfig";
import { toast } from "react-toastify";
import LastTicket from "../LastTicket";

const LastTicketTab = () => {
  const [hide, setHide] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const ref = doc(db, "users", user.uid);

  const deleteLastTickets = async () => {
    try {
      await setDoc(ref, { ...user, fullTickets: [] });
      toast.success("Bütün biletler temizlendi.");
    } catch (error) {
      toast.error("Biletler temizlenirken bir hata oluştu.");
    }

    dispatch(setUser({ ...user, fullTickets: [] }));
  };

  return (
    <div className="w-full bg-white rounded-md border p-5 min-h-[200px]">
      <div className="w-full mb-5 flex justify-between items-center ">
        <h1 className="text-2xl ">Geçmiş Biletlerim</h1>
        <div className="flex gap-x-3 sm:flex-row flex-col gap-y-2">
          <button
            onClick={deleteLastTickets}
            className="bg-red-100 text-red-500 px-4 py-1 rounded-md flex justify-center items-center gap-x-1 "
          >
            <BiTrash /> Biletleri Temizle
          </button>
          {hide === false ? (
            <button
              onClick={() => setHide(true)}
              className="bg-zinc-100 text-zinc-500 px-4 py-1 rounded-md flex justify-center items-center gap-x-1 min-w-[200px]"
            >
              <FaEyeSlash /> Biletleri Gizle
            </button>
          ) : (
            <button
              onClick={() => setHide(false)}
              className="bg-green-100 text-green-500 px-4 py-1 rounded-md flex justify-center items-center gap-x-1 min-w-[200px]"
            >
              <FaEye /> Biletleri Göster
            </button>
          )}
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:w-full sm:gap-5 flex flex-col gap-y-5 w-full">
        {user?.fullTickets.length > 0 ? (
          user?.fullTickets?.map((ticket) => (
            <LastTicket key={ticket.id} ticket={ticket} hide={hide} />
          ))
        ) : (
          <div className="bg-red-100 text-red-500 p-3 rounded-md">
            Herhangi bir bilet bulunamadı!
          </div>
        )}
      </div>
    </div>
  );
};

export default LastTicketTab;
