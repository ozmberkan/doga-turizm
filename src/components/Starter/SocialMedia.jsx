import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className="flex justify-center items-center gap-x-4 text-black">
      <div className="p-1 rounded-md bg-white border">
        <FaXTwitter size={18} className="cursor-pointer" />
      </div>
      <div className="p-1 rounded-md bg-white border">
        <FaInstagram size={18} className="cursor-pointer" />
      </div>
      <div className="p-1 rounded-md bg-white border">
        <FaFacebook size={18} className="cursor-pointer" />
      </div>
      <div className="p-1 rounded-md bg-white border">
        <FaWhatsapp size={18} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default SocialMedia;
