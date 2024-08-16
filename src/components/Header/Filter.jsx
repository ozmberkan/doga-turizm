import React from "react";
import { BiBus } from "react-icons/bi";
import FilterForm from "./FilterForm";

const Filter = () => {
  return (
    <div className="container  w-full sm:w-2/3 h-full flex justify-center items-center z-20 mx-auto px-14 flex-col gap-y-2 ">
      <div className="w-full z-20">
        <div className="bg-white rounded-md w-[150px] gap-x-2 flex justify-center items-center font-rubik py-1 ">
          <BiBus /> Sefer Ara
        </div>
      </div>
      <div className="w-full py-7 bg-white rounded border px-4 sm:p-6 flex flex-col gap-y-5">
        <div className="w-full">
          <h1 className="text-base sm:text-lg font-rubik">
            Sana en uygun bileti ara ve online rezervasyon gerçekleştir!
          </h1>
        </div>

        <FilterForm />
      </div>
    </div>
  );
};
export default Filter;
