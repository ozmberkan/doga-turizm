import React from "react";
import { BiBus } from "react-icons/bi";
import { IoTicketOutline } from "react-icons/io5";
import { cities } from "../../data/data";

const Hero = () => {
  return (
    <div className="container  w-full sm:w-2/3 h-full flex justify-center items-center z-20 mx-auto px-14 flex-col gap-y-2 ">
      <div className="w-full z-20">
        <div className="bg-[#f9f9f9] rounded-full w-[150px] gap-x-2 flex justify-center items-center font-rubik py-1 ">
          <BiBus /> Sefer Ara
        </div>
      </div>
      <div className="w-full py-7 bg-[#f9f9f9] rounded border px-4 sm:p-6 flex flex-col gap-y-5">
        <div className="w-full">
          <h1 className="text-base sm:text-lg font-rubik">
            Sana en uygun bileti ara ve online rezervasyon gerçekleştir!
          </h1>
        </div>
        <form className="h-full w-full flex justify-center items-center sm:items-center gap-y-5 gap-x-5 font-rubik sm:flex-row flex-col  ">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="">Nereden</label>
            <select
              type="text"
              className="rounded-lg border bg-white py-3 px-4 text-black w-[250px] focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              {cities.map((city) => (
                <option key={city.id} value={city.value}>
                  {city.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="">Nereye</label>
            <select
              type="text"
              className="rounded-lg border bg-white py-3 px-4 text-black w-[250px] focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              {cities.map((city) => (
                <option key={city.id} value={city.value}>
                  {city.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="">Tarih</label>
            <input
              type="date"
              className="rounded-lg border bg-white  sm:py-3 sm:px-4 h-10 text-black w-[250px] focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div className="flex flex-col gap-y-1 w-full mt-auto ">
            <button className="w-full transition-colors duration-500 py-3 px-4 hover:bg-green-500 bg-green-600 text-white border rounded flex justify-center items-center gap-x-2">
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
