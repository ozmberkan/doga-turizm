import React from "react";
import { BiUser } from "react-icons/bi";
import { BsTicket, BsTicketDetailed } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <div className="min-w-full sm:min-w-[300px]  bg-white flex flex-col border rounded-xl">
      <span className="bg-[#4EC646] px-4 py-2 rounded-t-xl text-white">
        Menü
      </span>
      <ul className="w-full h-full p-4 flex flex-col gap-y-5">
        <Link
          to="/profile"
          className="bg-zinc-100 p-3 rounded-md text-black border flex justify-start items-center gap-x-3 cursor-pointer"
        >
          <BiUser /> Kullanıcı Bilgilerim
        </Link>
        <Link
          to="mytickets"
          className="bg-zinc-100 p-3 rounded-md text-black border flex justify-start items-center gap-x-3 cursor-pointer"
        >
          <BsTicket /> Biletlerim
        </Link>
        <Link
          to="lasttickets"
          className="bg-zinc-100 p-3 rounded-md text-black border flex justify-start items-center gap-x-3 cursor-pointer"
        >
          <BsTicketDetailed /> Önceki Biletlerim
        </Link>
      </ul>
    </div>
  );
};

export default ProfileMenu;
