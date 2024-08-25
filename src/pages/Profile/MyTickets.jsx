import React from "react";
import Ticket from "./Ticket";

const MyTickets = () => {
  return (
    <div className="w-full bg-white rounded-md border p-4">
      <div className="w-full mb-2 ">
        <h1 className="text-2xl ">Biletlerim</h1>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-5 flex flex-col gap-y-5 w-full">
        <Ticket status="Pasif" />
        <Ticket status="Aktif" />
        <Ticket status="Pasif" />
      </div>
    </div>
  );
};

export default MyTickets;
