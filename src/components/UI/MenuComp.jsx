import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MenuComp = () => {
  const { user } = useSelector((store) => store.user);
  return (
    <div className="w-44 shadow-md absolute top-full right-0 sm:right-0 rounded p-4 bg-white border transition-all duration-300 z-30 flex flex-col gap-y-2">
      <Link
        to="/about"
        className="hover:bg-gray-100 w-full flex items-start justify-start rounded p-2"
      >
        Hakkımızda
      </Link>
      <Link
        to="/services"
        className="hover:bg-gray-100 w-full flex items-start justify-start rounded p-2"
      >
        Hizmetlerimiz
      </Link>
      <Link
        to="/tickets"
        className="hover:bg-gray-100 w-full flex items-start justify-start rounded p-2"
      >
        Biletler
      </Link>
      {user?.role === 1 && (
        <Link
          to="/admin"
          className="hover:bg-gray-100 w-full flex items-start justify-start rounded p-2"
        >
          Admin Panel
        </Link>
      )}
    </div>
  );
};

export default MenuComp;
