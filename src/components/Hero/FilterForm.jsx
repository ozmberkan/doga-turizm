import React from "react";
import { IoTicketOutline } from "react-icons/io5";
import { cities } from "../../data/data";
import { InputField } from "../../data/data";
import { DatePicker, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { filterscheme } from "~/validation/scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { setFilterCriteria } from "~/redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const FilterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { filterCriteria } = useSelector((store) => store.filter);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(filterscheme),
  });

  const searchTicket = (data) => {
    const selectedArrival = data.arrival;
    const selectedDeparture = data.departure;
    const selectedDate = moment(data.date, "YYYY-MM-DD").format("DD.MM.YYYY");

    dispatch(
      setFilterCriteria({
        arrival: selectedArrival,
        departure: selectedDeparture,
        date: selectedDate,
      })
    );

    navigate("/tickets");
  };

  return (
    <form
      className="h-full w-full flex justify-center items-center sm:items-center gap-y-3 gap-x-5 font-rubik sm:flex-row flex-col"
      onSubmit={handleSubmit(searchTicket)}
    >
      {InputField.map((input, i) => (
        <div key={i} className="flex flex-col gap-y-1">
          <label>{input.type === "text" ? input.label : "Tarih"}</label>
          {input.type === "text" ? (
            <select
              {...register(input.name)}
              className={`px-4 py-3 rounded-md border outline-none w-[250px] ${
                errors[input.name] ? "border-red-500" : ""
              }`}
            >
              {cities.map((city) => (
                <option key={city.id} value={city.value}>
                  {city.title}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="date"
              {...register(input.name)}
              className={`px-4 py-3 rounded-md border w-[250px] ${
                errors[input.name] ? "border-red-500" : ""
              }`}
            />
          )}
        </div>
      ))}
      <button type="submit" className="flex flex-col gap-y-1 w-full mt-auto">
        <div className="w-full transition-colors duration-500 py-3 px-4 hover:bg-green-500 bg-green-600 text-white border rounded flex justify-center items-center gap-x-2">
          <IoTicketOutline size={20} />
          Biletini Ara
        </div>
      </button>
    </form>
  );
};

export default FilterForm;
