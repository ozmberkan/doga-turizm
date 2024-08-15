import React from "react";
import SocialMedia from "./SocialMedia";
import { IoCall } from "react-icons/io5";

const Starter = () => {
  return (
    <div className="w-2/3 px-14 py-2 container bg-[#f9f9f9] mx-auto flex justify-between items-center">
      <h1 className="font-rubik text-base font-medium">
        Rüya gibi bir yolculuğa hazır olun!
      </h1>
      <div className="flex justify-center items-center gap-x-5">
        <SocialMedia />
        <div className="flex justify-center items-center gap-x-2 bg-white rounded-md border py-1 px-4">
          <IoCall size={18} />
          <span className="font-rubik text-base">444 58 58</span>
        </div>
      </div>
    </div>
  );
};

export default Starter;
