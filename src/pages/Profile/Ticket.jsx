import React from "react";
import { BiUser } from "react-icons/bi";
import { MdCancel, MdDateRange, MdEventSeat } from "react-icons/md";
import { FaTurkishLiraSign } from "react-icons/fa6";
import { IoHelp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { setUser } from "~/redux/slices/userSlice";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "~/firebase/firebaseConfig";

const Ticket = ({ ticket }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { pnr, departure, arrival, price, date, seats } = ticket;
  const formattedDate = moment(date, "MMMM DD, YYYY hh:mm:ss A").format(
    "DD.MM.YYYY HH:mm"
  );

  const deleteTicket = async () => {
    try {
      const updatedTickets = user.ownedTickets.filter(
        (ownedTicket) => ownedTicket.pnr !== ticket.pnr
      );
      dispatch(setUser({ ...user, ownedTickets: updatedTickets }));

      const ticketRef = doc(db, "tickets", ticket.id);
      const updatedSeats = ticket.seats.map((seat) => {
        const isSeatOwned = user.ownedTickets.some(
          (ownedTicket) =>
            ownedTicket.pnr === ticket.pnr &&
            ownedTicket.selectedSeats.some(
              (selectedSeat) => selectedSeat.number === seat.number
            )
        );
        if (isSeatOwned) {
          return { ...seat, isAvailable: true };
        }
        return seat;
      });

      await updateDoc(ticketRef, { seats: updatedSeats });
    } catch (error) {
      console.error("Error deleting ticket:", error);
    }
  };

  return (
    <div className="w-full border rounded-xl text-sm sm:text-base flex flex-col">
      <div className="w-full h-10 rounded-t-xl bg-[#4EC646] flex justify-between items-center px-4 text-white">
        <span>{ticket.pnr}</span>
        <div className="flex gap-x-2">
          <span className="flex items-center gap-x-1">
            <MdDateRange />
            {formattedDate}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex sm:justify-between justify-start sm:items-center items-start sm:flex-row flex-col">
          <div className="p-4 text-lg text-zinc-600">
            <span className="flex items-center gap-x-1">
              <BiUser /> {user.displayName}
            </span>
            <span className="flex items-center gap-x-1">
              <MdEventSeat />{" "}
              {user.ownedTickets.map((item) =>
                item.selectedSeats.map((seatItem) => (
                  <span>
                    {seatItem.number} - {seatItem.cinsiyet}
                  </span>
                ))
              )}
            </span>
            <span className="flex items-center gap-x-1">
              <FaTurkishLiraSign />{" "}
              {price *
                user.ownedTickets.map((item) => item.selectedSeats.length)}
              ₺
            </span>
          </div>
          <div className="p-4 text-lg text-zinc-600">
            <span className="flex items-center gap-x-1">{departure}</span>
            <span className="flex items-center gap-x-1">{arrival}</span>
          </div>
        </div>
        <div className="w-full bg-[#E6F7E6]/25 p-4 rounded-b-xl flex sm:flex-row flex-col gap-y-4 items-center justify-between gap-x-5">
          <div className="flex gap-x-2">
            <button
              onClick={deleteTicket}
              className="flex items-center bg-red-100 text-red-500 px-4 py-2 rounded-md gap-x-2"
            >
              <MdCancel /> İptal Et
            </button>
            <button className="flex items-center bg-blue-100 text-blue-500 px-4 py-2 rounded-md gap-x-2">
              <IoHelp /> Yardım
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
