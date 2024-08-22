import React from "react";

const MenuComp = () => {
  return (
    <div className="w-44 shadow-md absolute top-full right-0 sm:right-0 rounded p-4 bg-white border transition-all duration-300 z-30 flex flex-col gap-y-2">
      <a
        href="/profile"
        className="hover:bg-gray-100 w-full flex items-start justify-start rounded p-2"
      >
        Profilim
      </a>
      <a
        href="/admin"
        className="hover:bg-gray-100 w-full flex items-start justify-start rounded p-2"
      >
        Admin Panel
      </a>
      <a
        href="/tickets"
        className="hover:bg-gray-100 w-full flex items-start justify-start rounded p-2"
      >
        Biletler
      </a>
    </div>
  );
};

export default MenuComp;
