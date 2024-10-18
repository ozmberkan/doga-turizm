import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { useSelector } from "react-redux";
import { annTableTitles } from "~/data/data";
import AnnouncementEditModal from "~/components/UI/Modals/Admin/Announcement/AnnouncementEditModal";

const AnnouncementTab = () => {
  const [isModal, setIsModal] = useState(false);
  const [selectedAnn, setSelectedAnn] = useState(null);
  const { announcement } = useSelector((store) => store.announcement);

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
                <th
                  key={title.id}
                  className={`flex items-center gap-x-2 ${
                    title.title === "Ana Açıklama" ||
                    title.title === "İç Açıklama"
                      ? "col-span-2 w-full"
                      : ""
                  }`}
                >
                  {title.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-zinc-50/5 max-h-96 overflow-y-auto block w-full divide-y">
            {announcement?.map((ann) => (
              <tr
                key={ann.id}
                className="sm:grid flex sm:grid-cols-9 grid-cols-1 dark:text-white place-items-center p-4 gap-5"
              >
                <React.Fragment>
                  <td>{ann.title}</td>
                  <td className="col-span-2">{ann.titleDesc}</td>
                  <td>
                    <img src={ann.image} className="w-30 rounded-md" />
                  </td>
                  <td>
                    <img src={ann.mobileImg} className="w-20 rounded-md" />
                  </td>
                  <td>{ann.annTitle}</td>
                  <td className="col-span-2">{ann.annDesc}</td>
                  <td className="flex gap-x-2 ">
                    <button
                      onClick={() => openEdit(ann)}
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
