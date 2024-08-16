import React from "react";
import { IoTicketOutline } from "react-icons/io5";
import { cities } from "../../data/data";
import { InputField } from "../../data/data";
import { DatePicker, Select } from "antd";

const FilterForm = () => {
  return (
    <form className="h-full w-full flex justify-center items-center sm:items-center gap-y-3 gap-x-5 font-rubik sm:flex-row flex-col">
      {InputField.map((input, i) => (
        <div key={i} className="flex flex-col gap-y-1">
          <label>{input.type === "text" ? input.label : "Tarih"}</label>
          {input.type === "text" ? (
            <Select
              defaultValue="Seçiniz"
              options={cities}
              className="w-[250px] h-12 "
            />
          ) : (
            <DatePicker
              placeholder="Tarih Seçiniz"
              className="w-[250px] h-12 hover:border-green-500 focus:border-green-600 focus:ring-0 cursor-pointer"
              format="DD.MM.YYYY"
            />
          )}
        </div>
      ))}
      <div className="flex flex-col gap-y-1 w-full mt-auto">
        <button className="w-full transition-colors duration-500 py-3 px-4 hover:bg-green-500 bg-green-600 text-white border rounded flex justify-center items-center gap-x-2">
          <IoTicketOutline size={20} />
          Biletini Ara
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
