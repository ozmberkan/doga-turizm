import React from "react";
import { IoCall } from "react-icons/io5";
import { socialMedia } from "~/data/data";

const SocialMedia = () => {
  return (
    <div className="flex justify-center items-center  gap-x-3 sm:gap-x-4 text-black">
      {socialMedia.map((item, index) => (
        <div
          key={index}
          className="p-1 rounded-md bg-[#E6F7E6]/35 border-green-100 text-white hover:text-black cursor-pointer transition-colors duration-500"
        >
          {item.icon && <item.icon size={18} />}
        </div>
      ))}
      <div className="flex justify-center items-center gap-x-2 bg-[#E6F7E6]/35 border-green-100 text-white rounded-md border  w-full whitespace-nowrap px-4 ">
        <IoCall size={18} />
        <span className="font-rubik sm:text-base text-sm">444 ** **</span>
      </div>
    </div>
  );
};

export default SocialMedia;
