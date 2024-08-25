import React, { useState } from "react";
import { CiCalendarDate, CiLocationOn, CiClock2 } from "react-icons/ci";
import { FaTurkishLiraSign, FaWifi } from "react-icons/fa6";
import { FiTv } from "react-icons/fi";
import { PiLightning } from "react-icons/pi";

const TicketDetail = () => {
  const seats = Array.from({ length: 36 }, (_, i) => i + 1);
  const [selectedSeat, setSelectedSeat] = useState(null);
  return (
    <div className="w-full rounded-xl p-5 flex gap-x-5 bg-[#E6F7E6] sm:flex-row flex-col gap-y-5">
      <div className="sm:min-w-[400px] sm:h-[300px] h-[350px] border bg-[#f0faf0] rounded-xl">
        <div className="bg-white p-3 rounded-t-xl">
          <h1 className="text-2xl font-bold text-center text-[#4FC647]">
            Bilet Detayı
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-800 p-5 h-[200px]">
          <div className="flex items-center justify-center gap-x-1">
            <CiLocationOn />
            <span className="font-semibold">Kalkış:</span> İstanbul
          </div>
          <div className="flex items-center justify-center gap-x-1">
            <CiLocationOn />
            <span className="font-semibold">Varış:</span> Ankara
          </div>
          <div className="flex items-center justify-center gap-x-1">
            <CiCalendarDate />
            <span className="font-semibold">Tarih:</span> 01.07.2023
          </div>
          <div className="flex items-center justify-center gap-x-1">
            <CiClock2 />
            <span className="font-semibold">Saat:</span> 10:00
          </div>
          <div className="flex items-center justify-center gap-x-1">
            <FaTurkishLiraSign />
            <span className="font-semibold">Fiyat:</span> 150 TL
          </div>
          <div className="flex items-center justify-center gap-x-3">
            <FaWifi />
            <FiTv />
            <PiLightning />
          </div>
        </div>
      </div>
      <div className="bg-[#f0faf0] border rounded-xl flex flex-col justify-between">
        <div className="bg-white p-3 rounded-t-xl">
          <h1 className="text-2xl font-bold text-center text-[#4FC647]">
            Koltuk Seçimi
          </h1>
        </div>
        <div className="p-5 flex gap-3 flex-wrap justify-center">
          {seats.map((seat) => (
            <button
              key={seat}
              onClick={() => setSelectedSeat(seat)}
              className={`h-10 w-10 rounded-xl border text-center ${
                selectedSeat === seat
                  ? "bg-green-600 border-green-600 text-white"
                  : "bg-white text-green-600 border-green-300 hover:bg-green-50"
              }`}
            >
              {seat}
            </button>
          ))}
        </div>
        <div className=" w-full p-4">
          <button className="px-4 py-2 rounded-md text-white bg-[#4FC647] w-full">
            Bileti Seç
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
