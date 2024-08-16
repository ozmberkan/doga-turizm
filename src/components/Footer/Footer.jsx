import React from "react";

import { BiDownload } from "react-icons/bi";
import {
  socialMedia,
  footerAbout,
  footerSSS,
  footerWith,
  downloadImage,
} from "../../data/data";

const Footer = () => {
  return (
    <div className="container w-full sm:w-2/3 sm:mt-12 py-5 px-6 bg-white rounded-t-md border flex-col sm:flex-row grid grid-cols-1 sm:grid-cols-5 mx-auto gap-y-2 sm:my-0 my-5 font-rubik">
<<<<<<< HEAD
      <div className="flex flex-col gap-y-5 sm:items-start items-center sm:border-0 border-b py-5 sm:py-0">
=======
      <div className="flex flex-col gap-y-5 sm:items-start items-center border-b py-5 sm:py-0 sm:border-none">
>>>>>>> 5e6caff48d75ea1d87cd39f3de81edafb4bdc8d4
        <h1 className="text-3xl">Doğa Turizm</h1>
        <button
          href=""
          className="w-[160px] bg-zinc-100 flex justify-center items-center gap-x-2 cursor-pointer p-1 border rounded-md"
        >
          <BiDownload size={18} />
          <span className="text-sm">Doğa Turizm İndir!</span>
        </button>
        <div className="flex flex-col gap-y-3 ">
          {downloadImage.map((dImage, i) => (
            <img
              key={i}
              src={dImage}
              className="w-full sm:w-32 cursor-pointer hover:scale-105 transition-all duration-500"
            />
          ))}
        </div>
      </div>
<<<<<<< HEAD
      <div className="flex flex-col sm:items-start  items-center gap-y-5 py-5 sm:py-0 sm:border-0 border-b ">
=======
      <div className="flex flex-col sm:items-start  items-center gap-y-5 py-5 sm:py-0 border-b sm:border-none ">
>>>>>>> 5e6caff48d75ea1d87cd39f3de81edafb4bdc8d4
        <h1 className="text-md underline">Bizi Keşfet</h1>
        <ul className="flex flex-col items-start gap-y-2 w-full sm:w-0">
          {footerAbout.map((fAbout, i) => (
            <li
              key={i}
              className="p-2 text-sm rounded-md border w-full sm:min-w-[160px] flex gap-x-2 items-center cursor-pointer"
            >
              {fAbout.title}
            </li>
          ))}
        </ul>
      </div>
<<<<<<< HEAD
      <div className="flex flex-col gap-y-5 sm:items-start items-center  py-5 sm:py-0 sm:border-0 border-b">
=======
      <div className="flex flex-col gap-y-5 sm:items-start items-center  py-5 sm:py-0 border-b sm:border-none">
>>>>>>> 5e6caff48d75ea1d87cd39f3de81edafb4bdc8d4
        <h1 className="text-md underline">Yardıma İhtiyacın Var Mı ?</h1>
        <ul className="flex flex-col items-start gap-y-2  w-full sm:w-0">
          {footerSSS.map((fSSS, i) => (
            <li
              key={i}
              className="p-2 text-sm rounded-md border w-full sm:min-w-[160px] flex gap-x-2 items-center cursor-pointer"
            >
              {fSSS.title}
            </li>
          ))}
        </ul>
      </div>
<<<<<<< HEAD
      <div className="flex flex-col gap-y-5 sm:items-start  items-center  py-5 sm:py-0 sm:border-0 border-b">
=======
      <div className="flex flex-col gap-y-5 sm:items-start  items-center  py-5 sm:py-0 border-b sm:border-none">
>>>>>>> 5e6caff48d75ea1d87cd39f3de81edafb4bdc8d4
        <h1 className="text-md underline">İş Ortağımız Ol</h1>
        <ul className="flex text-sm flex-col items-start gap-y-2 w-full sm:w-0">
          {footerWith.map((fWith, i) => (
            <li
              key={i}
              className="p-2 text-sm rounded-md border w-full sm:min-w-[160px] flex gap-x-2 items-center cursor-pointer"
            >
              {fWith.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-y-5 sm:items-start  items-center py-5 sm:py-0 ">
        <h1 className="text-md underline">Sosyal Medya</h1>
        <ul className="flex flex-col items-start gap-y-2 w-full sm:w-0">
          {socialMedia.map((sMedia, i) => (
            <li
              key={i}
              className="p-2 text-sm rounded-md border w-full sm:min-w-[160px] flex gap-x-2 items-center cursor-pointer"
            >
              {sMedia.icon && <sMedia.icon size={18} />}
              {sMedia.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
