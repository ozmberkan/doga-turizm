import React from "react";
import { BiMenu, BiUser } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="container w-2/3 z-20 mx-auto ">
      <div className=" w-full py-5 flex justify-between items-center px-14">
        <h1 className="text-3xl font-rubik font-semibold text-white">
          Doğa Turizm
        </h1>
        <div className="flex justify-center items-center gap-x-4">
          <button className="bg-white border p-2 rounded-full flex justify-center items-center gap-x-2">
            <span>
              <BiUser />
            </span>
          </button>
          <div className="py-2 text-white cursor-pointer">
            <BiMenu size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
