import React, { useState } from "react";
import { BiMenu, BiUser } from "react-icons/bi";
import DrawerComp from "./UI/DrawerComp";
import MenuComp from "./UI/MenuComp";

const Navbar = ({ open, setOpen }) => {
  const [isMenu, setIsMenu] = useState(null);

  const openn = Boolean(isMenu);

  const handleClick = (event) => {
    setIsMenu(event.currentTarget);
  };

  const handleClose = () => {
    setIsMenu(null);
  };

  return (
    <>
      <div className="container sm:w-2/3 w-full z-20 mx-auto ">
        <div className="w-full py-5 flex justify-between items-center px-14">
          <h1 className="text-3xl font-rubik font-semibold text-white">
            Doğa Turizm
          </h1>
          <div className="flex justify-center items-center gap-x-4">
            <button
              onClick={() => setOpen(!open)}
              className="bg-white border p-2 rounded-full flex justify-center items-center gap-x-2"
            >
              <BiUser />
            </button>
            <div
              onClick={handleClick}
              className="py-2 text-white cursor-pointer"
            >
              <BiMenu size={30} />
            </div>
          </div>
        </div>
      </div>
      <MenuComp isMenu={isMenu} openn={openn} handleClose={handleClose} />
      <DrawerComp open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
