import React, { useState } from "react";
import { tickets } from "../../data/tickets";
import ReactPaginate from "react-paginate";
import { TbEdit, TbTrash } from "react-icons/tb";

const AdminCampaign = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sortConfig, setSortConfig] = useState({
    key: "pnr",
    direction: "ascending",
  });
  const itemsPerPage = 10;

  const offset = currentPage * itemsPerPage;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedTickets = [...tickets].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const currentTickets = sortedTickets.slice(offset, offset + itemsPerPage);

  return (
    <div className="p-5 font-rubik flex flex-col gap-y-5 w-full">
      <h1 className="text-3xl">Bilet Alanı</h1>
      <table className="table">
        <thead className="bg-[#4FC646] text-white">
          <tr>
            <th className="cursor-pointer" onClick={() => handleSort("pnr")}>
              PNR
            </th>
            <th
              className="cursor-pointer"
              onClick={() => handleSort("departure")}
            >
              Kalkış
            </th>
            <th
              className="cursor-pointer"
              onClick={() => handleSort("arrival")}
            >
              Varış
            </th>
            <th className="cursor-pointer" onClick={() => handleSort("date")}>
              Tarih
            </th>
            <th className="cursor-pointer" onClick={() => handleSort("time")}>
              Saat
            </th>
            <th
              className="cursor-pointer"
              onClick={() => handleSort("electric")}
            >
              Elektrik
            </th>
            <th className="cursor-pointer" onClick={() => handleSort("wifi")}>
              Wi-Fi
            </th>
            <th className="cursor-pointer" onClick={() => handleSort("food")}>
              İkram
            </th>
            <th className="cursor-pointer" onClick={() => handleSort("tv")}>
              TV
            </th>
            <th>Aksiyonlar</th>
          </tr>
        </thead>
        <tbody>
          {currentTickets.map((ticket, index) => (
            <tr key={index}>
              <td>{ticket.pnr}</td>
              <td>{ticket.departure}</td>
              <td>{ticket.arrival}</td>
              <td>{ticket.date}</td>
              <td>{ticket.time}</td>
              <td>{ticket.electric ? "Evet" : "Hayır"}</td>
              <td>{ticket.wifi ? "Evet" : "Hayır"}</td>
              <td>{ticket.food ? "Evet" : "Hayır"}</td>
              <td>{ticket.tv ? "Evet" : "Hayır"}</td>
              <td>
                <button className="p-1 hover:bg-zinc-200 rounded mr-2 text-center text-sm flex items-center gap-x-2 w-full">
                  <TbTrash /> Sil
                </button>
                <button className="p-1 hover:bg-zinc-200 rounded mr-2 text-center text-sm flex items-center gap-x-2 w-full">
                  <TbEdit /> Düzenle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"Önceki"}
        nextLabel={"Sonraki"}
        breakLabel={"..."}
        pageCount={Math.ceil(tickets.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={12}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        pageClassName={"page-item mx-1"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item mx-1"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item mx-1"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item mx-1"}
        breakLinkClassName={"page-link"}
        activeClassName={"text-green-500"}
      />
    </div>
  );
};

export default AdminCampaign;
