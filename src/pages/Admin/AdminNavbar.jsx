import { signOut } from "firebase/auth";
import React from "react";
import { BiHome, BiLogOut, BiUser } from "react-icons/bi";
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
      toast.error("Çıkış yapılırken bir hata oluştu.");
    }
  };

  return (
    <div className="w-full border-b border-primary  py-3 px-6 flex justify-between items-center">
      <h1 className=" text-zinc-700 flex items-center gap-x-2">
        <span className="rounded-md p-2 bg-zinc-100 border">
          <BiUser />
        </span>
        <span className="text-zinc-700 flex flex-col ">
          Yeniden Hoş geldin,
          <small className="text-primary font-medium">
            {user?.displayName}
          </small>
        </span>
      </h1>
      <div className="flex items-center gap-x-5">
        <Link
          to="/"
          className="p-2 rounded-md hover:bg-primary hover:text-white border flex justify-center items-center gap-x-2 text-black bg-white transition-all duration-100"
        >
          <BiHome />
        </Link>
        <button
          onClick={exit}
          className="p-2 rounded-md hover:bg-primary hover:text-white border  flex justify-center items-center gap-x-2 text-black bg-white transition-all duration-100"
        >
          <BiLogOut />
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;
