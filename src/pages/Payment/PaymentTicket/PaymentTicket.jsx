import { FaFemale, FaMale } from "react-icons/fa";
import { MdEventSeat } from "react-icons/md";

const PaymentTicket = ({ finalTicket }) => {
  const { pnr, arrival, departure, date, time, seats } = finalTicket;

  return (
    <div className="sm:w-full w-full rounded-xl flex flex-col ">
      <div className="w-full dark:bg-gray-700 bg-white border dark:border-gray-600 p-3 place-items-center flex flex-col gap-y-2 rounded-xl gap-5">
        <div className="w-full py-2 bg-zinc-100 dark:bg-gray-600 rounded-md flex justify-between items-center px-5">
          <span>PNR{pnr}</span>
          <span>
            {date} {time}
          </span>
        </div>
        <div className="py-2 px-5 bg-zinc-100  dark:bg-gray-600 rounded-md w-full flex justify-between items-center">
          <span className="dark:text-white">Kalkış: {departure}</span>
          <span className="dark:text-white">Varış: {arrival}</span>
        </div>
        <div className="w-full px-2 py-3 dark:bg-gray-600 bg-zinc-100 grid grid-cols-2 gap-5">
          {seats?.map((seatItem, i) => (
            <span
              key={i}
              className="flex items-center justify-center gap-x-2 p-2 rounded-md dark:bg-gray-800 bg-zinc-200"
            >
              <MdEventSeat /> {seatItem.number} - {seatItem.gender}
              {seatItem.gender === "Erkek" ? (
                <span className="text-blue-500">
                  <FaMale />
                </span>
              ) : (
                <span className="text-pink-500">
                  <FaFemale />
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentTicket;
