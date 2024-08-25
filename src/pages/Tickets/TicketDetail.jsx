import React, { useState } from "react";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { FaTurkishLiraSign, FaWifi } from "react-icons/fa6";
import { FiTv } from "react-icons/fi";
import { PiHamburger, PiLightning } from "react-icons/pi";
import moment from "moment";
import "moment/locale/tr";
import { BsTicket } from "react-icons/bs";
import { Link } from "react-router-dom";

const TicketDetail = ({ ticket }) => {
  const [selectedTicket, setSelectedTicket] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState([]);
  const { pnr, departure, arrival, date, tv, food, wifi, electric, seats } =
    ticket;

  const parseDate = (dateStr) => {
    const formattedStr = dateStr.replace(/ at /, " ").replace(/ UTC.*$/, "");
    return moment(formattedStr, "MMMM DD, YYYY hh:mm:ss A");
  };

  const editedDate = parseDate(date);
  const formattedDate = editedDate.format("DD.MM.YYYY HH:mm");

  return (
    <div className="w-full rounded-xl p-5 flex gap-x-5 bg-[#E6F7E6] sm:flex-row flex-col gap-y-5">
      <div className="sm:min-w-[300px] border bg-[#f0faf0] rounded-xl">
        <div className="bg-white p-3 rounded-t-xl">
          <h1 className="text-2xl font-bold text-center text-[#4FC647]">
            Bilet Detayı
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 place-items-start gap-4 text-green-800 p-6">
          <div className="flex items-center gap-x-1">
            <BsTicket size={14} />
            <span className="font-semibold">PNR:</span> {pnr}
          </div>
          <div className="flex items-center gap-x-1">
            <CiLocationOn size={14} />
            <span className="font-semibold">Kalkış:</span> {departure}
          </div>
          <div className="flex items-center gap-x-1">
            <CiLocationOn size={14} />
            <span className="font-semibold">Varış:</span> {arrival}
          </div>
          <div className="flex items-center gap-x-1">
            <CiCalendarDate size={14} />
            <span className="font-semibold">Tarih:</span> {formattedDate}
          </div>
          <div className="flex items-center gap-x-1">
            <FaTurkishLiraSign size={14} />
            <span className="font-semibold">Fiyat:</span> 150 TL
          </div>
          <div className="flex items-center gap-x-3">
            {wifi && <FaWifi size={14} />}
            {tv && <FiTv size={14} />}
            {electric && <PiLightning size={14} />}
            {food && <PiHamburger size={14} />}
          </div>
        </div>
      </div>
      <div className="bg-[#f0faf0] w-full border rounded-xl flex flex-col justify-between">
        <div className="bg-white p-3 rounded-t-xl">
          <h1 className="text-2xl font-bold text-center text-[#4FC647]">
            Koltuk Seçimi
          </h1>
        </div>
        <div className="p-5 flex gap-3 flex-wrap justify-center">
          {seats.map((seat, i) => (
            <button
              onClick={() =>
                setSelectedSeat((prev) =>
                  prev.includes(seat.number)
                    ? prev.filter((number) => number !== seat.number)
                    : [...prev, seat.number]
                )
              }
              key={i}
              className={`h-10 w-10 rounded-xl border text-center ${
                selectedSeat.includes(seat.number)
                  ? "bg-green-600 border-green-600 text-white"
                  : "bg-white text-green-600 border-green-300 hover:bg-green-50"
              }`}
            >
              {seat.number}
            </button>
          ))}
        </div>
        <Link
          className="p-4 px-4 py-2 rounded-b-xl text-white bg-[#4FC647] w-full"
          to="/payment"
          onClick={() =>
            setSelectedTicket([
              ...selectedTicket,
              { selectedSeats: selectedSeat, ...ticket },
            ])
          }
        >
          Bileti Seç
        </Link>
      </div>
    </div>
  );
};

export default TicketDetail;
