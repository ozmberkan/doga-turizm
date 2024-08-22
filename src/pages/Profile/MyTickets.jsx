import React from "react";
import Ticket from "./Ticket";

const MyTickets = () => {
  return (
    <div className="w-full bg-white rounded-md border p-4">
      <div className="w-full mb-2 ">
        <h1 className="text-2xl ">Biletlerim</h1>
      </div>
      <div className="grid grid-cols-2 gap-5 w-full">
        <Ticket status="Pasif"/>
        <Ticket status="Aktif" />
        <Ticket status="Pasif" />
      </div>
    </div>
  );
};

export default MyTickets;
