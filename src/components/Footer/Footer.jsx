import React, { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import {
  socialMedia,
  footerAbout,
  footerSSS,
  footerWith,
  downloadImage,
} from "../../data/data";
import LogoBlack from "../../assets/logos/LogoBlack.png";

const FooterSection = ({ title, items }) => (
  <div className="flex flex-col gap-y-5 sm:items-start items-center py-5 sm:py-0 border-b sm:border-none">
    <h1 className="text-md underline">{title}</h1>
    <ul className="flex flex-col items-start gap-y-2 w-full sm:w-0">
      {items.map((item, i) => (
        <li
          key={i}
          className="p-2 text-sm rounded-md border w-full sm:min-w-[160px] flex gap-x-2 items-center cursor-pointer hover:bg-green-500 hover:text-white transition-colors duration-100"
        >
          {item.icon && <item.icon size={18} />}
          {item.title || item.name}
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <div className="container w-full sm:w-2/3 sm:mt-12 py-5 px-6 bg-white rounded-none sm:rounded-t-md border flex-col sm:flex-row grid grid-cols-1 sm:grid-cols-5 mx-auto gap-y-2 sm:my-0 my-5 font-rubik">
      <div className="flex flex-col gap-y-5 sm:items-start items-center border-b py-5 sm:py-0 sm:border-none">
        <img
          src={LogoBlack}
          className="w-[150px] sm:w-[200px] drop-shadow-2xl"
        />
        <button className="w-[160px]  flex justify-center items-center gap-x-2 p-1">
          <BiDownload size={18} />
          <span className="text-sm">Doğa Turizm İndir!</span>
        </button>
        <div className="flex flex-col gap-y-3">
          {downloadImage.map((dImage, i) => (
            <img
              key={i}
              src={dImage}
              className="w-full sm:w-32 cursor-pointer hover:scale-105 transition-all duration-500"
            />
          ))}
        </div>
      </div>
      <FooterSection title="Bizi Keşfet" items={footerAbout} />
      <FooterSection title="Yardıma İhtiyacın Var Mı?" items={footerSSS} />
      <FooterSection title="İş Ortağımız Ol" items={footerWith} />
      <FooterSection title="Sosyal Medya" items={socialMedia} />
    </div>
  );
};

export default Footer;
