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
      <FaXTwitter size={20} className="cursor-pointer" />
      <FaInstagram size={20} className="cursor-pointer" />
      <FaFacebook size={20} className="cursor-pointer" />
      <FaWhatsapp size={20} className="cursor-pointer" />
    </div>
  );
};

export default SocialMedia;
