import { collection, deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { BiEdit, BiTrash } from "react-icons/bi";
import { userTableTitles } from "~/data/data";
import { db } from "~/firebase/firebaseConfig";
import UsersEditModal from "~/components/UI/Modals/UsersEditModal";
import moment from "moment";
import "moment/locale/tr";
import { toast } from "react-toastify";

const UsersTab = () => {
  const [isModal, setIsModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [snapshot] = useCollection(collection(db, "users"));
  const data = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const openEdit = (user) => {
    setIsModal(true);
    setSelectedUser(user);
  };

  const formatDate = (dateStr) => {
    const cleanedDateStr = dateStr.replace("pmt", "").trim();
    return moment(cleanedDateStr, "MMMM DD, YYYY hh:mm:ss A Z")
      .locale("tr")
      .format("DD MMMM YYYY, HH:mm");
  };

  const deleteUser = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      toast.success("Kullanıcı başarıyla silindi.");
    } catch (error) {
      toast.error("Kullanıcı silinirken bir hata oluştu." + error);
    }
  };

  return (
    <div className="bg-white p-3 border rounded-md shadow-md">
      <div>
        <div className="flex gap-x-2 items-center justify-start mb-2">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-md px-4 outline-none border"
            placeholder="Ara..."
          />
        </div>
        <table className="border w-full mt-5">
          <thead className="bg-zinc-100">
            <tr className="grid grid-cols-7 place-items-center h-12">
              {userTableTitles.map((title) => (
                <th key={title.id} className="flex items-center gap-x-2">
                  {title.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-zinc-50/5">
            {data?.map((user) => (
              <tr
                key={user.id}
                className="grid grid-cols-7 place-items-center p-4 gap-5 text-sm"
              >
                <td className="w-full">{user.uid}</td>
                <td>{user?.admin === true ? "Yönetici" : "Kullanıcı"}</td>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>
                  <div className="flex flex-col gap-3">
                    {user.ownedTickets.map((ticket, index) => (
                      <div
                        key={ticket.id || index}
                        className="flex flex-col border p-3 rounded-md gap-y-1"
                      >
                        <div className="bg-green-100 text-green-500 p-2 rounded-md">
                          Kalkış : {ticket.departure}
                        </div>
                        <div className="bg-green-100 text-green-500 p-2 rounded-md">
                          Varış : {ticket.arrival}
                        </div>
                        <div className="bg-green-100 text-green-500 p-2 rounded-md">
                          {formatDate(ticket.date)}
                        </div>
                        <div className="bg-green-100 text-green-500 p-2 rounded-md">
                          {ticket.seats[0]?.gender}
                        </div>
                        <div className="bg-green-100 text-green-500 p-2 rounded-md">
                          Koltuk No : {ticket.seats[0]?.number}
                        </div>
                        <div className="bg-green-100 text-green-500 p-2 rounded-md">
                          {ticket.seats[0]?.isAvailable
                            ? "Rezerv Tamamlanmış"
                            : "Boş"}
                        </div>
                      </div>
                    ))}
                  </div>
                </td>
                <td>{user.phoneNumber}</td>
                <td className="flex gap-x-2 ">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="border border-[#4FC647] text-[#4FC647] p-3 rounded-md"
                  >
                    <BiTrash size={20} />
                  </button>
                  <button
                    onClick={() => openEdit(user)}
                    className="border border-[#4FC647] text-[#4FC647] p-3 rounded-md"
                  >
                    <BiEdit size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModal && (
        <UsersEditModal setIsModal={setIsModal} selectedUser={selectedUser} />
      )}
    </div>
  );
};

export default UsersTab;
