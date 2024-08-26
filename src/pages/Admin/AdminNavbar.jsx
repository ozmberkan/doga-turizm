import { signOut } from "firebase/auth";
import React from "react";
import { BiHome, BiLogOut } from "react-icons/bi";
import { MdAdminPanelSettings } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "~/firebase/firebaseConfig";

const AdminNavbar = () => {
  const { user } = useSelector((store) => store.user);
  const exit = async () => {
    try {
      await signOut(auth);
      toast.success("Çıkış Yapılıyor...");
      setTimeout(() => {
        localStorage.removeItem("user");
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full bg-green-400  py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl text-white flex items-center gap-x-2">
        Doğa Turizm Admin Panel <MdAdminPanelSettings />
      </h1>
      <div className="flex items-center gap-x-5">
        <span className="text-white">Hoş geldin, {user.email}</span>
        <Link
          to="/"
          className="px-4 py-2 rounded-md hover:bg-[#f9f9f9] flex justify-center items-center gap-x-2 text-black bg-white"
        >
          <BiHome /> Anasayfa
        </Link>
        <button
          onClick={exit}
          className="px-4 py-2 rounded-md hover:bg-[#f9f9f9] flex justify-center items-center gap-x-2 text-black bg-white"
        >
          <BiLogOut /> Çıkış Yap
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;
