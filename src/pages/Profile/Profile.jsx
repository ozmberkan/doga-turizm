import React from "react";
import { BiUser } from "react-icons/bi";
import { BsTicket } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { Link, Outlet, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";

const Profile = () => {
  const location = useLocation();
  const { user } = useSelector((store) => store.user);

  const renderInputField = (label, value) => (
    <div className="flex flex-col gap-y-2">
      <label className="text-xs text-zinc-500/60">{label}</label>
      <div className="flex gap-x-2">
        <input
          type="text"
          className="bg-[#f9f9f9] rounded-md border px-4 py-2 outline-none"
          value={value}
          readOnly
        />
        <span className="rounded-md p-2 bg-green-200 text-green-500 flex justify-center items-center cursor-pointer">
          <CiEdit size={25} />
        </span>
      </div>
    </div>
  );

  return (
    <div className="flex w-full h-screen p-5 gap-x-5 sm:flex-row flex-col gap-y-5">
      <ProfileMenu />
      <div className="w-full flex flex-col gap-y-5">
        {location.pathname !== "/profile/mytickets" &&
          location.pathname !== "/profile/lasttickets" && (
            <div className="p-5 bg-white rounded-md border flex flex-col gap-5">
              <h1 className="text-2xl font-rubik mb-12">
                Bilgilerini Görüntüle / Değiştir
              </h1>
              <form className="sm:grid sm:grid-cols-4 sm:gap-5 flex flex-col gap-y-5">
                {renderInputField("Ad Soyad", user.displayName)}
                {renderInputField("Cep Telefonu", user.phoneNumber)}
                {renderInputField("E-Posta", user.email)}
              </form>
              <div className="mt-5">
                <button className="px-4 py-2 rounded-md border">Kaydet</button>
              </div>
            </div>
          )}

        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
