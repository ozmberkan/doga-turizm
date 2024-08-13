import React, { useState } from "react";
import { BiBus } from "react-icons/bi";
import { IoTicketOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="container w-2/3 h-full flex justify-center items-center z-20 mx-auto px-14 flex-col gap-y-2 ">
      <div className="w-full z-20">
        <div className="bg-[#f9f9f9] rounded-full w-[150px] gap-x-2 flex justify-center items-center font-rubik py-1 ">
          <BiBus /> Sefer Ara
        </div>
      </div>
      <div className="w-full h-[175px] bg-[#f9f9f9] rounded border p-6">
        <div className="w-full">
          <h1 className="text-xl font-rubik">
            Senin için özel hazırlanmış biletini ara!
          </h1>
        </div>
        <form className="h-full flex justify-start items-center gap-x-5 font-rubik">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="">Nereden</label>
            <select
              type="text"
              className="rounded-lg border bg-white py-3 px-4 text-black w-[250px] focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <option value="İst">İstanbul</option>
              <option value="İst">İstanbul</option>
              <option value="İst">İstanbul</option>
              <option value="İst">İstanbul</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="">Nereye</label>
            <select
              type="text"
              className="rounded-lg border bg-white py-3 px-4 text-black w-[250px] focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <option value="İst">İstanbul</option>
              <option value="İst">İstanbul</option>
              <option value="İst">İstanbul</option>
              <option value="İst">İstanbul</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="">Tarih</label>
            <input
              type="date"
              className="rounded-lg border bg-white py-3 px-4 text-black w-[250px] focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="">Seferi Ara</label>
            <button className="transition-colors duration-500 px-4 py-3 hover:bg-green-500 bg-green-600 text-white border rounded flex justify-center items-center gap-x-2">
              <IoTicketOutline size={20} />
              Biletini Ara
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
