import { collection, doc } from "firebase/firestore";
import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { BiEdit } from "react-icons/bi";
import AnnouncementEditModal from "~/components/UI/Modals/AnnouncementEditModal";
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
    <div className="bg-white p-3 border rounded-md shadow-md">
      <div>
        <div className="flex gap-x-2 items-center justify-start mb-2">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-md px-4 outline-none border"
            placeholder="Ara..."
          />
          <button
            onClick={() => setIsAddModal(true)}
            className="px-4 rounded-md border bg-[#f9f9f9]"
          >
            Ekle
          </button>
        </div>
        <table className="border w-full mt-5">
          <thead className="bg-zinc-100">
            <tr className="grid grid-cols-9 place-items-center h-12">
              {annTableTitles.map((title) => (
                <th key={title.id} className="flex items-center gap-x-2">
                  {title.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-zinc-50/5">
            <tr className="grid grid-cols-9 place-items-center p-4  gap-5 text-sm">
              {data?.map((announcement) => (
                <React.Fragment key={announcement.id}>
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
        <AnnouncementEditModal
          setIsModal={setIsModal}
          selectedAnn={selectedAnn}
        />
      )}
    </div>
  );
};

export default AnnouncementTab;
