import React from "react";
import { BiUser } from "react-icons/bi";
import { BsTicket } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="flex w-full h-screen items-start justify-start p-5">
      {/* Left */}
      <div className="h-[500px] bg-white  flex flex-col border rounded-xl">
        <span className="bg-green-500 px-4 py-2 rounded-t-xl text-white">
          Menü
        </span>
        <ul className="w-full h-full p-4 flex flex-col gap-y-5">
          <li className="bg-zinc-100 p-3 rounded-md text-black border flex justify-start items-center gap-x-3 cursor-pointer ">
            <span>
              <BiUser />
            </span>
            Kullanıcı Ayarlarım
          </li>
          <li className="bg-zinc-100 p-3 rounded-md text-black border flex justify-start items-center gap-x-3 cursor-pointer ">
            <span>
              <BsTicket />
            </span>
            Biletlerim
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
