import React, { useState } from "react";
import { BiBus } from "react-icons/bi";
import { IoChevronDownCircleOutline, IoTicketOutline } from "react-icons/io5";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  ComboboxButton,
} from "@headlessui/react";
import clsx from "clsx";
import { MdCheckCircleOutline } from "react-icons/md";

const Hero = () => {
  const people = [
    { id: 1, name: "istanbul" },
    { id: 2, name: "izmir" },
    { id: 3, name: "ankara" },
    { id: 4, name: "samsun" },
    { id: 5, name: "diyarbakır" },
  ];
  const [query, setQuery] = useState("");
  const [query2, setQuery2] = useState("");
  const [selected, setSelected] = useState(people[1]);
  const [selected2, setSelected2] = useState(people[1]);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="container w-2/3 h-full flex justify-center items-center z-20 mx-auto px-14 flex-col gap-y-2 ">
      <div className="w-full z-20">
        <div className="bg-[#f9f9f9] rounded-full w-[150px] gap-x-2 flex justify-center items-center font-rubik py-1">
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
          <Combobox
            value={selected}
            onChange={(value) => setSelected(value)}
            onClose={() => setQuery("")}
          >
            <div className="relative">
              <ComboboxInput
                className={clsx(
                  "w-full rounded-lg border bg-white py-3 px-4 text-black",
                  "focus:outline-none focus:ring-2 focus:ring-green-600"
                )}
                displayValue={(person) => person?.name || ""}
                onChange={(event) => setQuery(event.target.value)}
              />
              <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2">
                <IoChevronDownCircleOutline className="w-5 h-5 text-gray-400" />
              </ComboboxButton>
            </div>
            <ComboboxOptions
              anchor="bottom"
              transition
              className={clsx(
                "absolute z-20 mt-1  max-h-60 w-[300px]  rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              )}
            >
              {filteredPeople.map((person) => (
                <ComboboxOption
                  key={person.id}
                  value={person}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-green-600 text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-green-600"
                          }`}
                        >
                          <MdCheckCircleOutline className="w-5 h-5" />
                        </span>
                      ) : null}
                    </>
                  )}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Combobox>
          <Combobox
            value={selected2}
            onChange={(value) => setSelected2(value)}
            onClose={() => setQuery2("")}
          >
            <div className="relative">
              <ComboboxInput
                className={clsx(
                  "w-full rounded-lg border bg-white py-3 px-4 text-black",
                  "focus:outline-none focus:ring-2 focus:ring-green-600"
                )}
                displayValue={(person) => person?.name || ""}
                onChange={(event) => setQuery2(event.target.value)}
              />
              <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2">
                <IoChevronDownCircleOutline className="w-5 h-5 text-gray-400" />
              </ComboboxButton>
            </div>
            <ComboboxOptions
              anchor="bottom"
              transition
              className={clsx(
                "absolute z-20 mt-1  max-h-60 w-[300px]  rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              )}
            >
              {filteredPeople.map((person) => (
                <ComboboxOption
                  key={person.id}
                  value={person}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-green-600 text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected2, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected2 ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected2 ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-green-600"
                          }`}
                        >
                          <MdCheckCircleOutline className="w-5 h-5" />
                        </span>
                      ) : null}
                    </>
                  )}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Combobox>
          <input
            type="date"
            className={clsx(
              "rounded-lg border bg-white py-3 px-4 text-black w-[250px]",
              "focus:outline-none focus:ring-2 focus:ring-green-600"
            )}
          />
          <button className="transition-colors duration-500 px-4 py-3 hover:bg-green-500 bg-green-600 text-white border rounded flex justify-center items-center gap-x-2">
            <IoTicketOutline size={20} />
            Biletini Ara
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
