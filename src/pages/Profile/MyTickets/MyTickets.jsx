import Ticket from "../Ticket";
import { useSelector } from "react-redux";

const MyTickets = () => {
  const { user } = useSelector((store) => store.user);
  return (
    <div className="w-full bg-white rounded-md border p-5 min-h-[200px]">
      <div className="w-full mb-5 ">
        <h1 className="text-2xl ">Aktif Biletlerim</h1>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:w-full sm:gap-5 flex flex-col gap-y-5 w-full">
        {user?.ownedTickets.length > 0 ? (
          user?.ownedTickets?.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))
        ) : (
          <div className="bg-red-100 text-red-500 p-3 rounded-md">
            Herhangi bir bilet bulunamadı!
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTickets;
