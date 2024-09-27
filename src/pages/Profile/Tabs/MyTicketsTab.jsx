import React from "react";
import Ticket from "../Ticket";
import { useSelector } from "react-redux";
import { BsTicketDetailed } from "react-icons/bs";

const MyTicketsTab = () => {
  const { user } = useSelector((store) => store.user);
  return (
    <div className="w-full bg-white rounded-md border p-5 min-h-[200px]">
      <div className="w-full mb-5 ">
        <h1 className="text-2xl flex items-center gap-x-2 font-medium">
          {" "}
          <BsTicketDetailed />
          Aktif Biletlerim
        </h1>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:w-full sm:gap-5 flex flex-col gap-y-5 w-full">
        {user?.ownedTickets.length > 0 ? (
          user?.ownedTickets?.map((ticket, i) => (
            <Ticket key={i} ticket={ticket} />
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

export default MyTicketsTab;