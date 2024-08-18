import React, { useState } from "react";
import { TbEdit, TbTrash } from "react-icons/tb";

const AdminCampaign = () => {
  return (
    <div className="p-5 font-rubik flex flex-col gap-y-5 w-full">
      <h1 className="text-3xl">Kampanya Alanı</h1>
      <table className="table">
        <thead className="bg-[#4FC646] text-white">
          <tr>
            <th className="cursor-pointer" onClick={() => handleSort("pnr")}>
              Görsel
            </th>
            <th
              className="cursor-pointer"
              onClick={() => handleSort("departure")}
            >
              Önceki Fiyat
            </th>
            <th
              className="cursor-pointer"
              onClick={() => handleSort("arrival")}
            >
              İndirimli Fiyat
            </th>

            <th>Aksiyonlar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <tr>Görsel</tr>
            </td>
            <td>
              <tr>Önceki Fiyat</tr>
            </td>
            <td>
              <tr> İndirimli Fiyat</tr>
            </td>
            <td>
              <button className="p-1 hover:bg-zinc-200 rounded mr-2 text-center text-sm flex items-center gap-x-2 w-full">
                <TbTrash /> Sil
              </button>
              <button className="p-1 hover:bg-zinc-200 rounded mr-2 text-center text-sm flex items-center gap-x-2 w-full">
                <TbEdit /> Düzenle
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <tr>Görsel</tr>
            </td>
            <td>
              <tr>Önceki Fiyat</tr>
            </td>
            <td>
              <tr> İndirimli Fiyat</tr>
            </td>
            <td>
              <button className="p-1 hover:bg-zinc-200 rounded mr-2 text-center text-sm flex items-center gap-x-2 w-full">
                <TbTrash /> Sil
              </button>
              <button className="p-1 hover:bg-zinc-200 rounded mr-2 text-center text-sm flex items-center gap-x-2 w-full">
                <TbEdit /> Düzenle
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <tr>Görsel</tr>
            </td>
            <td>
              <tr>Önceki Fiyat</tr>
            </td>
            <td>
              <tr> İndirimli Fiyat</tr>
            </td>
            <td>
              <button className="p-1 hover:bg-zinc-200 rounded mr-2 text-center text-sm flex items-center gap-x-2 w-full">
                <TbTrash /> Sil
              </button>
              <button className="p-1 hover:bg-zinc-200 rounded mr-2 text-center text-sm flex items-center gap-x-2 w-full">
                <TbEdit /> Düzenle
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminCampaign;
