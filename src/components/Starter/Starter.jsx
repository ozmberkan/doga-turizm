import React from "react";
import SocialMedia from "./SocialMedia";

const Starter = () => {
  return (
    <div className="sm:w-2/3 w-full gap-y-2 sm:gap-0 px-14 py-2 container sm:bg-[#f9f9f9] mx-auto flex justify-between items-center flex-col sm:flex-row">
      <h1 className="font-rubik text-xs sm:text-base font-normal">
        Rüya gibi bir yolculuğa hazır olun!
      </h1>
      <SocialMedia />
    </div>
  );
};

export default Starter;
