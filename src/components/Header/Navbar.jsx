import React from "react";
import { BiMenu, BiUser } from "react-icons/bi";
import Logo from "../../assets/Logo.png";
import DrawerComp from "./UI/DrawerComp";

const Navbar = ({ open, setOpen }) => {
  return (
    <>
      <div className="container sm:w-2/3 w-full z-20 mx-auto ">
        <div className="w-full py-5 flex justify-between items-center px-14">
          <img src={Logo} className="w-[150px] sm:w-[200px] drop-shadow-2xl" />

          <div className="flex justify-center items-center gap-x-4">
            <button
              onClick={() => setOpen(!open)}
              className="bg-white border p-2 rounded-full flex justify-center items-center gap-x-2 hover:bg-zinc-200 hover:scale-105 transition-all duration-500"
            >
              <BiUser />
            </button>
            <div className="group relative">
              <button className="flex items-center h-10 ">
                <BiMenu
                  size={30}
                  className=" text-white cursor-pointer hover:text-green-400 transition-all duration-500"
                />
              </button>
              <div className="opacity-0 w-44 shadow-md  invisible group-focus-within:mt-1 group-focus-within:opacity-100 group-focus-within:visible absolute top-full  left-0 rounded p-4 bg-white  border transition-all duration-300 z-30 flex flex-col gap-y-2">
                <a
                  href="/login"
                  className="hover:bg-gray-100 w-full flex items-start justify-start rounded p-2"
                >
                  Yapım Aşamasında
                </a>
                <a
                  href="/login"
                  className="hover:bg-gray-100 w-full flex items-start justify-start rounded p-2"
                >
                  Yapım Aşamasında
                </a>
                <a
                  href="/login"
                  className="hover:bg-gray-100 w-full flex items-start justify-start rounded p-2"
                >
                  Yapım Aşamasında
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DrawerComp open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
