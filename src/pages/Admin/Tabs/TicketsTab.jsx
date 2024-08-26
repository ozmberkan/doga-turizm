import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "~/firebase/firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import { BiEdit, BiTrash } from "react-icons/bi";
import { tableTitles } from "~/data/data";
import { FaSort } from "react-icons/fa6";
import { toast } from "react-toastify";
import { orderBy } from "lodash";
import EditModal from "~/components/UI/Modals/EditModal";
import NewTicketModal from "~/components/UI/Modals/NewTicketModal";

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
      console.error("Error removing document: ", error);
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
      <div>
        <div className="w-full mb-5 flex justify-end items-center gap-x-2">
          <input
            type="text"
            className="px-4 py-2 rounded-md bg-white border outline-none"
            placeholder="Bilet ara... (PNR-VARIŞ-KALKIŞ)"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => setIsAddModal(true)}
            className="px-4 py-2 rounded-md bg-white border"
          >
            Ekle
          </button>
        </div>
        <table className="border w-full">
          <thead className="bg-zinc-200">
            <tr className="grid grid-cols-11 place-items-center h-12">
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
          <tbody className="bg-zinc-100">
            <tr className="grid grid-cols-11 place-items-center p-4  gap-5">
              {filteredTickets?.map((ticket) => (
                <React.Fragment key={ticket.id}>
                  <td className="w-full">{ticket.id}</td>
                  <td>{ticket.pnr}</td>
                  <td>{ticket.departure}</td>
                  <td>{ticket.arrival}</td>
                  <td>{ticket.date}</td>
                  <td>{ticket.price}</td>
                  <td>{ticket.wifi ? "Var" : "Yok"}</td>
                  <td>{ticket.electric ? "Var" : "Yok"}</td>
                  <td>{ticket.food ? "Var" : "Yok"}</td>
                  <td>{ticket.tv ? "Var" : "Yok"}</td>
                  <td className="flex gap-x-2 ">
                    <button
                      onClick={() => deleteTicket(ticket.id)}
                      className="border border-[#4FC647] text-[#4FC647] p-3 rounded-md"
                    >
                      <BiTrash size={20} />
                    </button>
                    <button
                      onClick={() => openEditModal(ticket)}
                      className="border border-[#4FC647] text-[#4FC647] p-3 rounded-md"
                    >
                      <BiEdit size={20} />
                    </button>
                  </td>
                </React.Fragment>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      {isModal && (
        <EditModal setIsModal={setIsModal} selectedTicket={selectedTicket} />
      )}
      {isAddModal && <NewTicketModal setIsAddModal={setIsAddModal} />}
    </>
  );
};

export default TicketsTab;
