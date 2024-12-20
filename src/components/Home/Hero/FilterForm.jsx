import { IoTicketOutline } from "react-icons/io5";
import { cities, InputField } from "~/data/data";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { filterscheme } from "~/validation/scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { setFilterCriteria } from "~/redux/slices/filterSlice";
import { useDispatch } from "react-redux";
import moment from "moment";

const FilterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      className="h-full w-full flex  justify-start items-center sm:items-center gap-y-3 gap-x-5 font-rubik sm:flex-row flex-col z-10"
      onSubmit={handleSubmit(searchTicket)}
    >
      {InputField.map((input, i) => (
        <div key={i} className="flex flex-col gap-y-1 flex-1 w-full ">
          <label>{input.type === "text" ? input.label : "Tarih"}</label>
          {input.type === "text" ? (
            <select
              {...register(input.name)}
              className={`px-4 h-10 rounded-md dark:border-gray-700 dark:bg-gray-800  border outline-none transition-all duration-500 focus-within:ring-2 ring-green-500  ${
                errors[input.name] ? "ring-2 ring-red-500 " : ""
              }`}
            >
              {cities.map((city) => (
                <option
                  key={city.id}
                  value={city.value}
                  className="dark:text-white"
                >
                  {city.title}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="date"
              {...register(input.name)}
              min={moment().format("YYYY-MM-DD")}
              className={`px-4 h-10 rounded-md dark:border-gray-700 dark:bg-gray-800 border outline-none transition-all duration-500 focus-within:ring-2 ring-green-500  ${
                errors[input.name] ? "ring-2 ring-red-500 " : ""
              }`}
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="flex sm:w-auto w-full sm:flex-col justify-center items-center gap-y-1  mt-auto"
      >
        <div className="sm:w-[200px] md:text-sm  md:w-full dark:border-gray-700 w-full  transition-colors duration-500 h-10 px-4 hover:bg-hoverPrimary bg-primary dark:bg-gray-900 text-white border rounded flex justify-center items-center gap-x-2">
          <IoTicketOutline size={20} />
          Biletini Ara
        </div>
      </button>
    </form>
  );
};

export default FilterForm;
