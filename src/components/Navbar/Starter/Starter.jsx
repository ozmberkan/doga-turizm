import React from "react";
import SocialMedia from "./SocialMedia";

const Starter = () => {
  return (
    <div className="sm:w-full w-full gap-y-2 sm:gap-0 sm:px-14 py-2 sm:bg-gradient-to-r sm:from-green-500 sm:to-green-700 text-white mx-auto flex justify-between items-center flex-col sm:flex-row ">
      <h1 className="font-rubik text-xs sm:text-base font-normal">
        Rüya gibi bir yolculuğa hazır olun!
      </h1>
      <SocialMedia />
    </div>
  );
};

export default Starter;
