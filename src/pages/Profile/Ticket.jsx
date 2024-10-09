import moment from "moment";
import { BiUser } from "react-icons/bi";
import { MdCancel, MdDateRange, MdEventSeat } from "react-icons/md";
import { FaTurkishLiraSign } from "react-icons/fa6";
import { IoHelp, IoLocationSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setUpdate } from "~/redux/slices/userSlice";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "~/firebase/firebaseConfig";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Ticket = ({ ticket }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { pnr, departure, arrival, price, date, time, seats, ticketID } =
    ticket;

  const deleteTicket = async (ticketID) => {
    try {
      const updatedTickets = user.ownedTickets.filter(
        (ownedTicket) => ownedTicket.ticketID !== ticketID
      );

      dispatch(setUpdate({ ...user, ownedTickets: updatedTickets }));

      const ticketRef = doc(db, "tickets", ticket.id);
      const ticketDoc = await getDoc(ticketRef);

      if (ticketDoc.exists()) {
        const ticketData = ticketDoc.data();

        const updatedSeats = ticketData.seats.map((seat) => {
          return {
            number: seat.number,
            isAvailable: true,
          };
        });

        await updateDoc(ticketRef, { seats: updatedSeats });
      }

      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { ownedTickets: updatedTickets });

      toast.success("Bilet başarıyla silindi ve koltuk bilgileri güncellendi.");
    } catch (error) {
      toast.error("Bilet silinirken bir hata oluştu!" + error);
    }
  };

  return (
    <div className="w-full border dark:border-gray-900 rounded-xl text-sm sm:text-base flex flex-col">
      <div className="w-full h-10 rounded-t-xl bg-primary dark:bg-gray-900 flex justify-between items-center px-4 text-white">
        <span>PNR{pnr}</span>
        <div className="flex gap-x-2">
          <span className="flex items-center gap-x-1">
            <MdDateRange />
            {date} {time}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex sm:justify-between justify-start sm:items-center items-start sm:flex-row flex-col">
          <div className="p-4 text-lg text-zinc-600 dark:text-white">
            <span className="flex items-center gap-x-1">
              <BiUser /> {user.displayName}
            </span>
            <span className="flex items-center gap-x-1">
              <MdEventSeat />
              {ticket.seats.map((seatItem) => (
                <span key={seatItem.number}>
                  {seatItem.number} - {seatItem.gender}
                </span>
              ))}
            </span>
            <span className="flex items-center gap-x-1">
              <FaTurkishLiraSign />{" "}
              {user.emailVerified === true
                ? price * seats.length
                : 650 * seats.length}
              ₺
            </span>
          </div>
          <div className="p-4 text-lg text-zinc-600 dark:text-white">
            <span className="flex items-center gap-x-1">
              <IoLocationSharp /> {departure}
            </span>
            <span className="flex items-center gap-x-1">
              <IoLocationSharp /> {arrival}
            </span>
          </div>
        </div>
        <div className="w-full bg-[#E6F7E6]/25 dark:bg-gray-900 p-4  rounded-b-xl flex sm:flex-row flex-col gap-y-4 items-center justify-between gap-x-5">
          <div className="flex gap-x-2">
            <button
              onClick={() => deleteTicket(ticketID)}
              className="flex items-center bg-red-100 text-red-500 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors px-4 py-2 rounded-md gap-x-2"
            >
              <MdCancel /> İptal Et
            </button>
            <Link
              to="/contact"
              className="flex items-center bg-blue-100 text-blue-500 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors px-4 py-2 rounded-md gap-x-2"
            >
              <IoHelp /> Yardım
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
