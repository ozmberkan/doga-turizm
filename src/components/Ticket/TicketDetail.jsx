import React, { useState } from "react";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { TbSteeringWheel } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";
import { FaMale, FaFemale } from "react-icons/fa";
import moment from "moment";
import "moment/locale/tr";
import { setFinalTicket } from "~/redux/slices/finalTicketSlice";
import { PiTelevisionSimple } from "react-icons/pi";
import { FaWifi } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { nanoid } from "nanoid";

const TicketDetail = ({ ticket }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const {
    pnr,
    departure,
    arrival,
    price,
    date,
    time,
    seats,
    tv,
    food,
    electric,
    wifi,
  } = ticket;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatToSelect, setSeatToSelect] = useState(null);
  // cinsiyet seçimi
  const [showGenderModal, setShowGenderModal] = useState(false);

  const handleSeatClick = (seat) => {
    if (selectedSeats.length >= 2) {
      toast.error("En fazla iki koltuk seçebilirsiniz!");
      return;
    }
    setSeatToSelect(seat);
    setShowGenderModal(true);
  };

  const handleGenderSelect = (gender) => {
    const { isAvailable, ...restSeatProps } = seatToSelect;
    setSelectedSeats([...selectedSeats, { ...restSeatProps, gender }]);
    setShowGenderModal(false);
    setSeatToSelect(null);
  };

  const buyToTicket = async () => {
    if (!user) {
      toast.error(
        "Bileti satın almak için giriş yapmalısınız. Anasayfaya yönlendiriliyorsunuz.",
        { autoClose: 1000 }
      );
      setTimeout(() => {
        navigate("/");
      }, 1000);
      return;
    }

    if (selectedSeats.length === 0) {
      toast.error("Lütfen en az bir koltuk seçiniz!");
      return;
    }
    const finalTicket = {
      id: ticket.id,
      ticketID: nanoid(),
      pnr,
      departure,
      arrival,
      date,
      time,
      price,
      seats: selectedSeats.map((selectedSeat) => ({
        ...selectedSeat,
        isAvailable: false,
      })),
    };

    dispatch(setFinalTicket(finalTicket));
    navigate("/payment");
  };

  return (
    <div className="w-full rounded-xl p-5 flex gap-x-5 bg-white dark:bg-gray-800 dark:border-gray-700 border flex-col gap-y-5">
      <div className="flex justify-start items-center sm:flex-row flex-col gap-y-2 ">
        <div className="flex justify-start items-center gap-x-5 sm:text-base text-xs gap-y-2 w-full flex-col sm:flex-row ">
          <span className="bg-[#4FC647] dark:bg-gray-950 w-full sm:w-auto text-green-100 p-2 sm:p-2 rounded-md">
            {pnr}
          </span>
          <span className="bg-[#4FC647] dark:bg-gray-950 w-full sm:w-auto text-green-100 p-2 sm:p-2 rounded-md">
            {user && user.emailVerified === true ? price : "650"}₺
          </span>
          <span className="flex items-center gap-x-1 text-zinc-700/90 dark:bg-gray-900 dark:text-white bg-zinc-100 w-full sm:w-auto p-2 rounded-md">
            <CiLocationOn size={20} />
            {departure}
          </span>
          <span className="flex items-center gap-x-1 text-zinc-700/90 dark:bg-gray-900 dark:text-white bg-zinc-100 w-full sm:w-auto p-2 rounded-md">
            <CiLocationOn size={20} />
            {arrival}
          </span>
          <span className="flex items-center gap-x-1 text-zinc-700/90 dark:bg-gray-900 dark:text-white bg-zinc-100 w-full sm:w-auto p-2 rounded-md">
            <CiCalendarDate size={20} />
            {date} {time}
          </span>
          {tv && (
            <span className="flex items-center gap-x-1 text-zinc-700/90 dark:bg-gray-900 dark:text-white bg-zinc-100 w-full sm:w-auto p-2 rounded-md">
              <PiTelevisionSimple /> Televizyon
            </span>
          )}
          {wifi && (
            <span className="flex items-center gap-x-1 text-zinc-700/90 dark:bg-gray-900 dark:text-white bg-zinc-100 w-full sm:w-auto p-2 rounded-md">
              <FaWifi /> Wi-Fi
            </span>
          )}
          {food && (
            <span className="flex items-center gap-x-1 text-zinc-700/90 dark:bg-gray-900 dark:text-white bg-zinc-100 w-full sm:w-auto p-2 rounded-md">
              <IoFastFoodOutline /> İkram
            </span>
          )}
          {electric && (
            <span className="flex items-center gap-x-1 text-zinc-700/90 dark:bg-gray-900 dark:text-white bg-zinc-100 w-full sm:w-auto p-2 rounded-md">
              <AiOutlineThunderbolt /> Elektrik
            </span>
          )}
        </div>
        <div className="flex justify-end items-center gap-x-5 w-[300px]">
          <button
            onClick={buyToTicket}
            className="bg-[#4FC647] sm:w-auto w-full text-white px-4 py-2 text-xl rounded-md"
          >
            Bileti Seç
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5">
        <div className="w-full p-3 border bg-[#f9f9f9] dark:bg-gray-900 dark:border-gray-800 sm:h-[200px] flex-col sm:flex-row rounded-md flex justify-start items-center gap-x-5">
          <span className="w-12 h-full flex sm:flex-row flex-col justify-center items-end py-6">
            <TbSteeringWheel size={40} />
          </span>
          <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-2">
            {seats?.map((seat) => {
              const selectedSeat = selectedSeats.find(
                (s) => s.number === seat.number
              );
              const isMale = selectedSeat?.gender === "Erkek";
              const isFemale = selectedSeat?.gender === "Kadın";
              return (
                <button
                  key={seat.number}
                  onClick={() => handleSeatClick(seat)}
                  disabled={seat.isAvailable === false}
                  className={`border w-20 sm:w-24 h-10 sm:h-12 flex dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800 text-black items-center justify-center rounded-md  hover:bg-[#4FC647] hover:text-white ${
                    isMale
                      ? "!bg-blue-500 text-white"
                      : isFemale
                      ? "!bg-pink-500 text-white"
                      : "bg-white"
                  } ${
                    seat.isAvailable === false && seat.gender === "Erkek"
                      ? "cursor-not-allowed !bg-blue-600 text-white  hover:bg-gray-600"
                      : ""
                  }  
                  ${
                    seat.isAvailable === false && seat.gender === "Kadın"
                      ? "cursor-not-allowed !bg-pink-600 text-white  hover:bg-gray-600"
                      : ""
                  }  
                  `}
                >
                  {seat.number}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {showGenderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg flex flex-col gap-y-5 sm:w-[500px] w-auto">
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Cinsiyet Seçin</h1>
                <span
                  onClick={() => setShowGenderModal(false)}
                  className="p-2 rounded-md bg-zinc-300 dark:bg-gray-800 dark:border-gray-700 dark:border dark:hover:text-white cursor-pointer hover:bg-zinc-200 transition-colors text-zinc-700 flex justify-center items-center "
                >
                  <IoClose />
                </span>
              </div>

              <p className="text-sm text-zinc-500">
                Lütfen koltuk seçiminiz sırasında cinsiyetinizi seçiniz.
              </p>
            </div>
            <button
              onClick={() => handleGenderSelect("Erkek")}
              className="bg-blue-100 text-blue-500 dark:bg-blue-900 dark:hover:bg-blue-800  hover:bg-blue-200 transition-colors  px-4 py-2 rounded-md flex justify-start items-center gap-x-2"
            >
              <FaMale size={21} />
              Erkek
            </button>
            <button
              onClick={() => handleGenderSelect("Kadın")}
              className="bg-pink-100 text-pink-500 dark:bg-pink-900 dark:hover:bg-pink-800 hover:bg-pink-200 transition-colors px-4 py-2 rounded-md flex justify-start items-center gap-x-2"
            >
              <FaFemale size={21} />
              Kadın
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketDetail;
