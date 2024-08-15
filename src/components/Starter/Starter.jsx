import React from "react";
import SocialMedia from "./SocialMedia";
import { IoCall } from "react-icons/io5";

const Starter = () => {
  return (
    <div className="sm:w-2/3 w-full gap-y-2 sm:gap-0 px-14 py-2 container sm:bg-[#f9f9f9] mx-auto flex justify-between items-center flex-col sm:flex-row">
      <h1 className="font-rubik text-sm sm:text-base font-medium">
        Rüya gibi bir yolculuğa hazır olun!
      </h1>
      <div className="flex justify-center items-center gap-x-5">
        <SocialMedia />
        <div className="flex justify-center items-center gap-x-2 bg-white rounded-md border py-1 w-full whitespace-nowrap px-4">
          <IoCall size={18} />
          <span className="font-rubik text-base">444 58 58</span>
        </div>
      </div>
    </div>
  );
};

export default Starter;
