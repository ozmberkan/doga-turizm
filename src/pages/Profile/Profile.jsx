import React from "react";
import { BiUser } from "react-icons/bi";
import { BsTicket } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { Link, Outlet, useLocation } from "react-router-dom";

const userData = {
  id: "90126479446",
  name: "Berkan Özmen",
  gender: "Erkek",
  phone: "5555555555",
  email: "example@gmail.com",
};

const Profile = () => {
  const location = useLocation();

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
    <div className="flex w-full h-screen items-start justify-start p-5 gap-x-5">
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

      <div className="w-full flex flex-col gap-y-5">
        {location.pathname !== "/profile/mytickets" && (
          <div className="p-5 bg-white rounded-md border flex justify-start items-start flex-col gap-x-5">
            <h1 className="text-3xl font-rubik mb-12">
              Bilgilerini Görüntüle / Değiştir
            </h1>
            <form className="grid grid-cols-3 gap-5">
              {renderInputField("T.C. Kimlik No", userData.id)}
              {renderInputField("Ad Soyad", userData.name)}
              {renderInputField("Cinsiyet", userData.gender)}
              {renderInputField("Cep Telefonu", userData.phone)}
              {renderInputField("E-Posta", userData.email)}
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
