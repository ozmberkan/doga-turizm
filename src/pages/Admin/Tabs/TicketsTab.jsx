import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "~/firebase/firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import { BiEdit, BiTrash } from "react-icons/bi";
import { tableTitles } from "~/data/data";
import { FaSort } from "react-icons/fa6";
import { toast } from "react-toastify";
import { orderBy } from "lodash";
import EditModal from "~/components/UI/Modals/Admin/Tickets/EditModal";
import NewTicketModal from "~/components/UI/Modals/Admin/Tickets/NewTicketModal";

const TicketsTab = () => {
  const [sorting, setSorting] = useState({
    key: "",
    order: "",
  });
  const [search, setSearch] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [isAddModal, setIsAddModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const ref = collection(db, "tickets");
  const [snapshot] = useCollection(ref);
  const data = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const deleteTicket = async (id) => {
    try {
      await deleteDoc(doc(db, "tickets", id));
      toast.success("Bilet başarıyla silindi.");
    } catch (error) {
      toast.error("Bilet silinirken bir hata oluştu.");
    }
  };

  const openEditModal = (ticket) => {
    setSelectedTicket(ticket);
    setIsModal(true);
  };

  const filteredTickets = orderBy(
    data?.filter((ticket) => {
      return `${ticket.pnr} ${ticket.date} ${ticket.arrival} ${ticket.departure}`
        .toLowerCase()
        .includes(search.toLowerCase());
    }),
    [sorting.key],
    [sorting.order]
  );

  return (
    <>
      <div className="bg-white dark:bg-gray-800 dark:border-gray-700 p-3 border rounded-md shadow-md">
        <div className="flex gap-x-2 items-center justify-start mb-2">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-md px-4 py-1 outline-none border dark:bg-transparent dark:border-gray-700 dark:text-white"
            placeholder="Ara..."
          />
          <button
            onClick={() => setIsAddModal(true)}
            className="px-4 py-1 rounded-md border dark:bg-gray-700 dark:border-gray-600 dark:text-white bg-[#f9f9f9]"
          >
            Ekle
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="border dark:border-gray-700 w-full mt-5">
            <thead className="bg-zinc-100 dark:bg-gray-900 dark:text-white sticky top-0">
              <tr className="sm:grid flex sm:grid-cols-12 grid-cols-1 place-items-center p-4 gap-5">
                {tableTitles.map((title) => (
                  <th key={title.id} className="flex items-center gap-x-2">
                    {title.title}
                    {title.sortable && (
                      <button
                        onClick={() => {
                          if (title.key === sorting.key) {
                            setSorting({
                              key: title.key,
                              order: sorting.order === "asc" ? "desc" : "asc",
                            });
                          } else {
                            setSorting({
                              key: title.key,
                              order: "asc",
                            });
                          }
                        }}
                      >
                        <FaSort size={20} />
                      </button>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-zinc-50/5 max-h-96 overflow-y-auto block w-full divide-y">
              {filteredTickets?.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="sm:grid flex sm:grid-cols-12 grid-cols-1 place-items-center dark:text-white  p-4 gap-5"
                >
                  <td className="w-full">{ticket.id}</td>
                  <td>{ticket.pnr}</td>
                  <td>{ticket.departure}</td>
                  <td>{ticket.arrival}</td>
                  <td>{ticket.date}</td>
                  <td>{ticket.time}</td>
                  <td>{ticket.price}</td>
                  <td>{ticket.wifi ? "Var" : "Yok"}</td>
                  <td>{ticket.electric ? "Var" : "Yok"}</td>
                  <td>{ticket.food ? "Var" : "Yok"}</td>
                  <td>{ticket.tv ? "Var" : "Yok"}</td>
                  <td className="flex gap-x-2 ">
                    <button
                      onClick={() => deleteTicket(ticket.id)}
                      className="border border-[#4FC647] hover:bg-primary hover:text-white transition-colors dark:hover:bg-white dark:hover:text-black dark:text-white dark:border-white text-[#4FC647] sm:p-3 p-1.5 rounded-md"
                    >
                      <BiTrash size={20} />
                    </button>
                    <button
                      onClick={() => openEditModal(ticket)}
                      className="border border-[#4FC647] hover:bg-primary hover:text-white transition-colors dark:hover:bg-white dark:hover:text-black dark:text-white dark:border-white text-[#4FC647] sm:p-3 p-1.5 rounded-md"
                    >
                      <BiEdit size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModal && (
        <EditModal setIsModal={setIsModal} selectedTicket={selectedTicket} />
      )}
      {isAddModal && <NewTicketModal setIsAddModal={setIsAddModal} />}
    </>
  );
};

export default TicketsTab;
