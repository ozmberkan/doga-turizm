import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { BiEdit } from "react-icons/bi";
import { userTableTitles } from "~/data/data";
import { db } from "~/firebase/firebaseConfig";
import { toast } from "react-toastify";
import { MdOutlineLock, MdOutlineLockOpen } from "react-icons/md";
import { useSelector } from "react-redux";
import UsersEditModal from "~/components/UI/Modals/Admin/Users/UsersEditModal";
import moment from "moment";
import "moment/locale/tr";

const UsersTab = () => {
  const [isModal, setIsModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");

  const { users } = useSelector((store) => store.user);
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

  const filteredUsers = users?.filter((user) =>
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
        <div className="flex gap-x-2 items-center justify-start">
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
              <tr className="lg:grid  hidden grid-cols-6 place-items-center p-4 gap-5">
                {userTableTitles.map((title) => (
                  <th key={title.id} className="flex items-center gap-x-2">
                    {title.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-zinc-50/5 overflow-y-auto block w-full divide-y">
              {filteredUsers?.map((user) => (
                <tr
                  key={user.id}
                  className="grid lg:grid-cols-6  dark:text-white place-items-center  p-4 gap-5"
                >
                  <td className="w-full lg:text-sm text-xs lg:text-left text-center">
                    {user.uid}
                  </td>
                  <td>{user.displayName}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>

                  <td>{user?.admin === true ? "Yönetici" : "Kullanıcı"}</td>
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
