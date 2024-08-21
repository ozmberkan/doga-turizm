import React from "react";
import SocialMedia from "./SocialMedia";

const Starter = () => {
  return (
    <div className="sm:w-full w-full gap-y-2 text-white sm:gap-0 sm:px-14 py-2 bg-gradient-to-b from-green-700 to-green-600   sm:bg-gradient-to-r sm:from-green-500 sm:to-[#4FC646] sm:text-white mx-auto flex justify-between items-center flex-col sm:flex-row ">
      <h1 className="font-rubik text-xs sm:text-base font-normal">
        Rüya gibi bir yolculuğa hazır olun!
      </h1>
      <SocialMedia />
    </div>
  );
};

export default Starter;
