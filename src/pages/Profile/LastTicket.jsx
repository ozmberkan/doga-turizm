import { BiUser } from "react-icons/bi";
import { MdDateRange, MdEventSeat } from "react-icons/md";
import { FaTurkishLiraSign } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { IoLocationSharp } from "react-icons/io5";

const LastTicket = ({ ticket, hide }) => {
  const { user } = useSelector((store) => store.user);
  const { pnr, departure, arrival, price, date, time, seats } = ticket;

  return (
    <>
      {!hide && (
        <div className="w-full rounded-xl border dark:border-gray-900 text-sm sm:text-base flex flex-col transition-all duration-200 ">
          <div className="w-full h-10 rounded-t-xl bg-zinc-100 dark:bg-gray-900  flex justify-between  items-center px-4 text-zinc-500 border-zinc-300">
            <span className="dark:text-white">PNR{pnr}</span>
            <div className="flex gap-x-2">
              <span className="flex items-center gap-x-1 dark:text-white">
                <MdDateRange />
                {date} {time}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex sm:justify-between justify-start sm:items-center items-start sm:flex-row flex-col">
              <div className="p-4 text-lg text-zinc-600 dark:text-white">
                <span className="flex items-center gap-x-1">
                  <BiUser /> {user.displayName}
                </span>
                <span className="flex items-center gap-x-1">
                  <MdEventSeat />{" "}
                  {ticket.seats.map((seatItem) => (
                    <span key={seatItem.number}>
                      {seatItem.number} - {seatItem.gender}
                    </span>
                  ))}
                </span>
                <span className="flex items-center gap-x-1">
                  <FaTurkishLiraSign />{" "}
                  {user.emailVerified === true
                    ? price * seats.length
                    : 650 * seats.length}
                  ₺
                </span>
              </div>
              <div className="p-4 text-lg text-zinc-600 dark:text-white">
                <span className="flex items-center gap-x-1">
                  {" "}
                  <IoLocationSharp />
                  {departure}
                </span>
                <span className="flex items-center gap-x-1">
                  <IoLocationSharp />
                  {arrival}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LastTicket;
