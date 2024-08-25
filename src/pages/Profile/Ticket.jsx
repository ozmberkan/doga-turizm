import React from "react";
import { BiUser } from "react-icons/bi";
import {
  MdCancel,
  MdDateRange,
  MdDepartureBoard,
  MdEventSeat,
} from "react-icons/md";
import { FaTurkishLiraSign } from "react-icons/fa6";
import { IoHelp } from "react-icons/io5";

const Ticket = () => {
  return (
    <div className="w-full border rounded-xl text-sm sm:text-base flex flex-col">
      <div className="w-full h-10 rounded-t-xl bg-[#4EC646] flex justify-between items-center px-4 text-white">
        <span>PNR3558</span>
        <div className="flex gap-x-2">
          <span className="flex items-center gap-x-1">
            <MdDateRange />
            22.08.2024
          </span>
          <span className="flex items-center gap-x-1">
            <MdDepartureBoard />
            22:00
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex sm:justify-between justify-start sm:items-center items-start sm:flex-row flex-col">
          <div className="p-4 text-lg text-zinc-600">
            <span className="flex items-center gap-x-1">
              <BiUser /> Muhammed Berkan Özmen
            </span>
            <span className="flex items-center gap-x-1">
              <MdEventSeat /> 12
            </span>
            <span className="flex items-center gap-x-1">
              <FaTurkishLiraSign /> 300,00 TL
            </span>
          </div>
          <div className="p-4 text-lg text-zinc-600">
            <span className="flex items-center gap-x-1">
              İzmir - (İzmir Otogar)
            </span>
            <span className="flex items-center gap-x-1">
              İstanbul - (Esenler Otogar)
            </span>
          </div>
        </div>
        <div className="w-full bg-[#E6F7E6]/25 p-4 rounded-b-xl flex sm:flex-row flex-col gap-y-4 items-center justify-between gap-x-5">
          <div className="flex gap-x-2">
            <button className="flex items-center bg-red-100 text-red-500 px-4 py-2 rounded-md gap-x-2">
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
