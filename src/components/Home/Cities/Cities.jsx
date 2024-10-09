import React from "react";
import IstanbulCity from "./City/IstanbulCity";
import BursaCity from "./City/BursaCity";
import CanakkaleCity from "./City/CanakkaleCity";
import BalıkesirCity from "./City/BalıkesirCity";
import { Link } from "react-router-dom";

const Cities = () => {
  return (
    <div className="container mx-auto w-3/4 sm:w-2/3 rounded-md flex flex-col gap-y-5 ">
      <h1 className="text-2xl text-zinc-700 font-semibold dark:text-white">
        Şehir Rehberi
      </h1>
      <div className="sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex flex-col gap-8 ">
        <Link
          to="/istanbul"
          className="col-span-2 relative hover:scale-105 transition-all duration-500 shadow-md"
        >
          <IstanbulCity />
          <span className="absolute top-0 left-0 text-4xl p-4 font-semibold h-52 rounded-t-md w-full bg-gradient-to-b from-black/30 to-transparent text-zinc-200">
            İstanbul
          </span>
        </Link>
        <Link
          to="/bursa"
          className=" col-span-1 relative hover:scale-105 transition-all duration-300 shadow-md"
        >
          <BursaCity />
          <span className="absolute top-0 left-0 text-4xl p-4 font-semibold h-52 rounded-t-md w-full bg-gradient-to-b from-black/30 to-transparent text-zinc-200">
            Bursa
          </span>
        </Link>
        <Link
          to="/canakkale"
          className=" col-span-1 relative hover:scale-105 transition-all duration-300 shadow-md"
        >
          <CanakkaleCity />
          <span className="absolute top-0 left-0 text-4xl p-4 font-semibold h-52 rounded-t-md w-full bg-gradient-to-b from-black/30 to-transparent text-zinc-200">
            Çanakkale
          </span>
        </Link>
        <Link
          to="/balikesir"
          className=" col-span-2 relative hover:scale-105 transition-all duration-300 shadow-md"
        >
          <BalıkesirCity />
          <span className="absolute top-0 left-0 text-4xl p-4 font-semibold h-52 rounded-t-md w-full bg-gradient-to-b from-black/30 to-transparent text-zinc-200">
            Balıkesir
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Cities;
