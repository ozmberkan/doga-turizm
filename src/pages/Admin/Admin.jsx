// Admin.jsx
import React from "react";
import Logo from "../../assets/LogoBlack.png";
import { CiHome } from "react-icons/ci";
import { MdCampaign } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import AdminCampaign from "./AdminCampaign";
import { BsTicket } from "react-icons/bs";

const Admin = () => {
  return (
    <div className="w-full h-screen bg-[#f9f9f9] flex justify-start items-start">
      <div className="w-36 h-full bg-white min-w-36 border-r py-5 flex justify-start items-center flex-col gap-y-5">
        <div className="flex flex-col font-rubik items-center">
          <img src={Logo} alt="" className="w-24 " />
          <span className="text-xs">Admin Panel</span>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Link
            to="/"
            className="p-2 bg-zinc-100 rounded-md border cursor-pointer"
          >
            <CiHome size={24} />
          </Link>
          <Link
            to="/admin/campaign"
            className="p-2 bg-zinc-100 rounded-md border cursor-pointer"
          >
            <MdCampaign size={24} />
          </Link>
          <Link
            to="/admin/tickets"
            className="p-2 bg-zinc-100 rounded-md border cursor-pointer"
          >
            <BsTicket size={24} />
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Admin;
