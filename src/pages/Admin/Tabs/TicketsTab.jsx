import { collection, deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "~/firebase/firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import { BiEdit, BiTrash } from "react-icons/bi";
import { tableTitles } from "~/data/data";
import { FaSort } from "react-icons/fa6";
import { toast } from "react-toastify";
import { orderBy } from "lodash";

const TicketsTab = () => {
  const [sorting, setSorting] = useState({
    key: "",
    order: "",
  });
  const [search, setSearch] = useState("");

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

  const filteredTickets = orderBy(
    data?.filter((ticket) => {
      return (
        ticket.pnr.toLowerCase().includes(search.toLowerCase()) ||
        ticket.departure.toLowerCase().includes(search.toLowerCase()) ||
        ticket.arrival.toLowerCase().includes(search.toLowerCase())
      );
    }),
    [sorting.key],
    [sorting.order]
  );

  return (
    <div>
      <div className="w-full mb-5 flex justify-end items-center">
        <input
          type="text"
          className="px-4 py-2 rounded-md bg-white border outline-none"
          placeholder="Bilet ara... (PNR-VARIŞ-KALKIŞ)"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table className="border w-full">
        <thead className="bg-zinc-200">
          <tr className="grid grid-cols-10 place-items-center h-12">
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
          <tr className="grid grid-cols-10 place-items-center p-4  gap-5">
            {filteredTickets?.map((ticket) => (
              <React.Fragment key={ticket.id}>
                <td className="w-full">{ticket.id}</td>
                <td>{ticket.pnr}</td>
                <td>{ticket.departure}</td>
                <td>{ticket.arrival}</td>
                <td>{ticket.date}</td>
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
                  <button className="border border-[#4FC647] text-[#4FC647] p-3 rounded-md">
                    <BiEdit size={20} />
                  </button>
                </td>
              </React.Fragment>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TicketsTab;
