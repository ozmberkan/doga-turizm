import { collection, doc } from "firebase/firestore";
import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { BiEdit } from "react-icons/bi";
import AnnouncementEditModal from "~/components/UI/Modals/Admin/Announcement/AnnouncementEditModal";
import { annTableTitles } from "~/data/data";
import { db } from "~/firebase/firebaseConfig";
const AnnouncementTab = () => {
  const [isModal, setIsModal] = useState(false);
  const [selectedAnn, setSelectedAnn] = useState(null);

  const [snapshot] = useCollection(collection(db, "announcement"));

  const data = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const openEdit = (announcement) => {
    setIsModal(true);
    setSelectedAnn(announcement);
  };

  return (
    <div className="bg-white dark:border-gray-700 dark:bg-gray-800 p-3 border rounded-md shadow-md">
      <div className="overflow-x-auto">
        <table className="border w-full mt-5 dark:border-gray-700 ">
          <thead className="bg-zinc-100 dark:bg-gray-900 dark:text-white">
            <tr className="sm:grid flex sm:grid-cols-9  grid-cols-1 place-items-center p-4 gap-5">
              {annTableTitles.map((title) => (
                <th key={title.id} className="flex items-center gap-x-2">
                  {title.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-zinc-50/5 max-h-96 overflow-y-auto block w-full divide-y">
            {data?.map((announcement) => (
              <tr
                key={announcement.id}
                className="sm:grid flex sm:grid-cols-9 grid-cols-1 dark:text-white place-items-center p-4 gap-5"
              >
                <React.Fragment>
                  <td className="w-full">{announcement.id}</td>
                  <td>{announcement.title}</td>
                  <td>{announcement.titleDesc}</td>
                  <td>
                    <img src={announcement.image} className="w-12" />
                  </td>
                  <td>
                    <img src={announcement.mobileImg} className="w-12" />
                  </td>
                  <td>{announcement.annTitle}</td>
                  <td>{announcement.annDesc}</td>
                  <td className="flex gap-x-2 ">
                    <button
                      onClick={() => openEdit(announcement)}
                      className="border border-[#4FC647] hover:bg-primary hover:text-white transition-colors dark:hover:bg-white dark:hover:text-black text-[#4FC647] dark:text-white dark:border-white  sm:p-3 p-1.5 rounded-md"
                    >
                      <BiEdit size={20} />
                    </button>
                  </td>
                </React.Fragment>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModal && (
        <AnnouncementEditModal
          setIsModal={setIsModal}
          selectedAnn={selectedAnn}
        />
      )}
    </div>
  );
};

export default AnnouncementTab;
