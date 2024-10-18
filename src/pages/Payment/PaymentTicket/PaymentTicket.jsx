import { FaFemale, FaMale } from "react-icons/fa";
import { MdEventSeat } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import { MdDepartureBoard } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const PaymentTicket = ({ finalTicket }) => {
  const { pnr, arrival, departure, date, time, seats } = finalTicket;

  return (
    <div className="sm:w-full w-full rounded-xl flex flex-col ">
      <div className="w-full dark:bg-gray-700 bg-white border dark:border-gray-600 p-3 place-items-center flex flex-col gap-y-2 rounded-xl gap-5">
        <div className="w-full border-b px-5 py-2">
          <h1 className="text-xl text-zinc-700">Bilet Detayı</h1>
        </div>
        <div className="w-full grid grid-cols-2 gap-5 p-5">
          <div className="w-full py-2 bg-white shadow-sm border dark:bg-gray-600 rounded-md flex justify-between items-center px-5">
            <p className="text-primary flex items-center gap-x-2 py-2 rounded-md">
              <span>
                <IoTicketSharp size={25} />
              </span>{" "}
              <span className="font-medium">PNR</span>
            </p>
            <span className="dark:text-white text-zinc-800 font-medium">
              PNR{pnr}
            </span>
          </div>
          <div className="w-full py-2 bg-white border dark:bg-gray-600 rounded-md flex justify-between items-center px-5">
            <p className="text-primary flex items-center gap-x-2   py-2 rounded-md">
              <span>
                <FaClock size={25} />
              </span>{" "}
              <span className="font-medium">Tarih</span>
            </p>
            <span className="dark:text-white text-zinc-800 font-medium">
              {date} {time}
            </span>
          </div>
          <div className="py-2 px-5 bg-white border  dark:bg-gray-600 rounded-md w-full flex justify-between items-center">
            <p className="text-primary flex items-center gap-x-2   py-2 rounded-md">
              <span>
                <MdDepartureBoard size={25} />
              </span>{" "}
              <span className="font-medium">Kalkış</span>
            </p>
            <span className="dark:text-white text-zinc-800 font-medium">
              {departure}
            </span>
          </div>
          <div className="py-2 px-5 bg-white border  dark:bg-gray-600 rounded-md w-full flex justify-between items-center">
            <p className="text-primary flex items-center gap-x-2   py-2 rounded-md">
              <span>
                <IoLocationSharp size={25} />
              </span>{" "}
              <span className="font-medium">Varış</span>
            </p>
            <span className="dark:text-white text-zinc-800 font-medium">
              {arrival}
            </span>
          </div>
          <div className="w-full  col-span-2 flex gap-x-5">
            {seats?.map((seatItem, i) => (
              <span
                key={i}
                className={`flex items-center w-1/2 justify-between text-white text-xl  gap-x-2 p-4 rounded-md dark:bg-gray-500 dark:text-white bg-zinc-200 ${
                  seatItem.gender === "Erkek" ? "bg-blue-500" : "bg-pink-500"
                }`}
              >
                <span className="flex items-center gap-x-3">
                  <MdEventSeat size={25} /> {seatItem.number} Numaralı Koltuk
                </span>
                <span>{seatItem.gender}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTicket;
