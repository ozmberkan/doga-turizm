import React from "react";
import { BiSolidRightArrow, BiUser } from "react-icons/bi";
import { BsTicket } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { Link, Outlet, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";
import { BiMailSend } from "react-icons/bi";

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
          value={value || ""}
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
      <div className="w-full flex flex-col gap-y-5 ">
        {location.pathname !== "/profile/mytickets" &&
          location.pathname !== "/profile/lasttickets" && (
            <div className="p-5 bg-white rounded-md border flex flex-col gap-y-5 relative">
              <h1 className="text-2xl font-rubik mb-3">
                Bilgilerini Görüntüle / Değiştir
              </h1>
              <form className="sm:grid sm:grid-cols-5 w-full  sm:gap-1 flex flex-col gap-y-3 ">
                {renderInputField("Ad Soyad", user.displayName)}
                {renderInputField("Cep Telefonu", user.phoneNumber)}
                {renderInputField("E-Posta", user.email)}
                {user.emailVerifaction === "false" ? (
                  <div className="w-full flex flex-col gap-y-2">
                    <label className="text-xs text-zinc-500/60">
                      E-Postanı doğrulaman gerek!
                    </label>
                    <div className="bg-[#f9f9f9] rounded-md border px-4 py-2 flex items-center justify-between">
                      E-Posta Doğrula
                      <button className="bg-green-200 text-green-500  rounded-md">
                        <BiMailSend size={25} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-green-200 text-green-500 rounded-md h-12  flex items-center justify-center  px-4 py-2 absolute top-4 right-4">
                    E-Posta Doğrulanmış!
                  </div>
                )}
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
