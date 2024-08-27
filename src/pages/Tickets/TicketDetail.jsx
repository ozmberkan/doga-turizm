import React, { useState } from "react";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { TbSteeringWheel } from "react-icons/tb";
import moment from "moment";
import "moment/locale/tr";

const TicketDetail = ({ ticket }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [seatToSelect, setSeatToSelect] = useState(null);

  const { pnr, departure, arrival, price, date, seats } = ticket;

  const parseDate = (dateStr) => {
    const formattedStr = dateStr.replace(/ at /, " ").replace(/ UTC.*$/, "");
    return moment(formattedStr, "MMMM DD, YYYY hh:mm:ss A");
  };

  const editedDate = parseDate(date);
  const formattedDate = editedDate.format("DD.MM.YYYY HH:mm");

  const handleSeatClick = (seat) => {
    setSeatToSelect(seat);
    setShowGenderModal(true);
  };

  const handleGenderSelect = (gender) => {
    setSelectedSeats([...selectedSeats, { ...seatToSelect, gender }]);
    setShowGenderModal(false);
    setSeatToSelect(null);
  };

  return (
    <div className="w-full rounded-xl p-5 flex gap-x-5 bg-white border flex-col gap-y-5">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-center items-center gap-x-5">
          <span className="bg-[#4FC647] text-white p-3 rounded-md">{pnr}</span>
          <span className="bg-[#4FC647] text-green-100 p-3 rounded-md">
            {price}₺
          </span>
          <span className="flex items-center gap-x-1 text-zinc-700/90">
            <CiLocationOn size={20} />
            {departure}
          </span>
          <span className="flex items-center gap-x-1 text-zinc-700/90">
            <CiLocationOn size={20} />
            {arrival}
          </span>
          <span className="flex items-center gap-x-1 text-zinc-700/90">
            <CiCalendarDate size={20} />
            {formattedDate}
          </span>
        </div>
        <div className="flex justify-center items-center gap-x-5">
          <button className="bg-[#4FC647] text-white px-6 py-3 text-xl rounded-md">
            Bileti Seç
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-x-5">
        <div className="w-full p-3 border bg-[#f9f9f9] h-[200px] rounded-md flex justify-start items-center gap-x-5">
          <span className="w-12 h-full py-6 flex justify-center items-end">
            <TbSteeringWheel size={40} />
          </span>
          <div className="w-full h-full grid grid-cols-5 place-items-center">
            {seats.map((seat) => (
              <span
                key={seat.number}
                onClick={() => handleSeatClick(seat)}
                className="bg-white border w-24 h-12 flex items-center justify-center rounded-md cursor-pointer hover:bg-[#4FC647] hover:text-white"
              >
                {seat.number}
              </span>
            ))}
          </div>
        </div>
      </div>

      {showGenderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg flex flex-col gap-y-3">
            <h3 className="text-lg font-bold">Cinsiyet Seçin</h3>
            <button
              onClick={() => handleGenderSelect("Erkek")}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Erkek
            </button>
            <button
              onClick={() => handleGenderSelect("Kadın")}
              className="bg-pink-500 text-white px-4 py-2 rounded-md"
            >
              Kadın
            </button>
            <button
              onClick={() => setShowGenderModal(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              İptal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketDetail;
