import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoDark from "~/assets/logos/Logo.png";
import LogoLight from "~/assets/logos/LogoBlack.png";
import {
  downloadImage,
  footerAbout,
  footerSocial,
  footerSSS,
  footerWith,
} from "~/data/data";

const Footer = () => {
  const { theme } = useSelector((store) => store.theme);

  return (
    <div className="bg-white dark:bg-gray-900 dark:border-gray-700 flex flex-col pt-12 px-4 md:px-12 border-t mt-12 w-full">
      <div className="flex lg:justify-between sm:justify-center gap-y-5 py-5 border-b dark:border-gray-700 container mx-auto w-full md:w-2/3 flex-col lg:flex-row items-center">
        <img
          src={theme === "dark" ? LogoDark : LogoLight}
          className="w-[200px] md:w-[300px] object-cover"
        />
        <div className="flex gap-x-5 w-full sm:justify-end justify-center items-center  lg:flex mt-5 lg:mt-0">
          {downloadImage.map((item) => (
            <img
              src={item}
              className="w-24 md:w-44 hover:scale-105 transition-all duration-500 cursor-pointer"
            />
          ))}
        </div>
      </div>

      <div className="py-5 grid grid-cols-2 sm:grid-cols-4 gap-4 place-items-start container mx-auto w-full md:w-2/3">
        <div className="flex flex-col gap-y-5">
          {footerAbout.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="hover:underline dark:text-white"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-y-5">
          {footerSSS.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="hover:underline dark:text-white"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-y-5">
          {footerWith.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="hover:underline dark:text-white"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-y-5">
          {footerSocial.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="hover:underline dark:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row py-3 mt-3 border-t dark:border-gray-700 justify-between items-center container mx-auto w-full md:w-2/3">
        <span className="font-semibold text-center md:text-left dark:text-white">
          Doğa Turizm
        </span>
        <span className="text-sm text-center md:text-left dark:text-white">
          2024 © Tüm Hakları Saklıdır
        </span>
      </div>
    </div>
  );
};

export default Footer;
