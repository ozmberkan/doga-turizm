import React from "react";
import { BiUser } from "react-icons/bi";
import { BsTicket } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <div className="min-w-[250px] bg-white flex flex-col border rounded-xl">
      <span className="bg-[#4EC646] px-4 py-2 rounded-t-xl text-white">
        Menü
      </span>
      <ul className="w-full h-full p-4 flex flex-col gap-y-5">
        <Link
          to="/profile"
          className="bg-zinc-100 p-3 rounded-md text-black border flex justify-start items-center gap-x-3 cursor-pointer"
        >
          <BiUser /> Kullanıcı Bilgileri
        </Link>
        <Link
          to="mytickets"
          className="bg-zinc-100 p-3 rounded-md text-black border flex justify-start items-center gap-x-3 cursor-pointer"
        >
          <BsTicket /> Biletlerim
        </Link>
      </ul>
    </div>
  );
};

export default ProfileMenu;
