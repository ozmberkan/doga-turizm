import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { BiEdit } from "react-icons/bi";
import { userTableTitles } from "~/data/data";
import { db } from "~/firebase/firebaseConfig";
import UsersEditModal from "~/components/UI/Modals/Admin/Users/UsersEditModal";
import moment from "moment";
import "moment/locale/tr";
import { toast } from "react-toastify";
import { MdOutlineLock, MdOutlineLockOpen } from "react-icons/md";

const UsersTab = () => {
  const [isModal, setIsModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");

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

  const filteredUsers = data?.filter((user) =>
    `${user.displayName} ${user.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const changeStatusUser = async (user) => {
    try {
      const userRef = doc(db, "users", user.uid);

      if (user.disabled === true) {
        await updateDoc(userRef, {
          disabled: false,
        });
        toast.success("Kullanıcı başarıyla aktif hale getirildi.");
      } else {
        if (user.admin) {
          return toast.error("Yönetici hesapları devre dışı bırakılamaz.");
        } else {
          await updateDoc(userRef, {
            disabled: true,
          });
        }

        toast.success("Kullanıcı başarıyla devre dışı bırakıldı.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 dark:border-gray-700  p-3 border rounded-md shadow-md">
      <div>
        <div className="flex gap-x-2 items-center justify-start mb-2">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-md py-1 px-4 outline-none border dark:bg-transparent dark:border-gray-700 dark:text-white"
            placeholder="Ara..."
          />
        </div>
        <div className="overflow-x-auto">
          <table className="border dark:border-gray-700 w-full mt-5">
            <thead className="bg-zinc-100 dark:bg-gray-900 dark:text-white">
              <tr className="sm:grid flex sm:grid-cols-7 grid-cols-1 place-items-center p-4 gap-5">
                {userTableTitles.map((title) => (
                  <th key={title.id} className="flex items-center gap-x-2">
                    {title.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-zinc-50/5 max-h-96 overflow-y-auto block w-full divide-y">
              {filteredUsers?.map((user) => (
                <tr
                  key={user.id}
                  className="sm:grid flex sm:grid-cols-7 grid-cols-1 dark:text-white place-items-center  p-4 gap-5"
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
                          <div className="ticketDetail">
                            Kalkış : {ticket.departure}
                          </div>
                          <div className="ticketDetail">
                            Varış : {ticket.arrival}
                          </div>
                          <div className="ticketDetail">
                            {formatDate(ticket.date)}
                          </div>
                          <div className="ticketDetail">
                            {ticket.seats[0]?.gender}
                          </div>
                          <div className="ticketDetail">
                            Koltuk No : {ticket.seats[0]?.number}
                          </div>
                          <div className="ticketDetail">
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
                      onClick={() => openEdit(user)}
                      className="border border-[#4FC647] text-[#4FC647] dark:hover:bg-white dark:hover:text-black dark:text-white dark:border-white sm:p-3 p-1.5 rounded-md hover:bg-primary hover:text-white transition-colors"
                    >
                      <BiEdit size={20} />
                    </button>
                    <button
                      onClick={() => changeStatusUser(user)}
                      className="border border-[#4FC647] text-[#4FC647] dark:hover:bg-white dark:hover:text-black dark:text-white dark:border-white sm:p-3 p-1.5 rounded-md hover:bg-primary hover:text-white transition-colors"
                    >
                      {user.disabled ? (
                        <MdOutlineLockOpen size={20} />
                      ) : (
                        <MdOutlineLock size={20} />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModal && (
        <UsersEditModal setIsModal={setIsModal} selectedUser={selectedUser} />
      )}
    </div>
  );
};

export default UsersTab;
