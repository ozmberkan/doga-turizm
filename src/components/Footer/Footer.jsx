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
    <div className="bg-white dark:bg-gray-800 dark:border-transparent rounded border text-gray-600 w-full mt-12 ">
      <div className=" max-w-6xl mx-auto ">
        <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-12 p-12">
          <div className="flex flex-col gap-y-3 items-start justify-start">
            <img
              src={theme === "dark" ? LogoDark : LogoLight}
              className="w-32"
            />
            <p className="mb-4 dark:text-zinc-300">
              Biletlerinizi alırken en iyi hizmeti sunmak için buradayız.
            </p>
            <div className="flex space-x-4">
              {footerSocial.map((tab) => (
                <Link
                  key={tab.id}
                  to="#"
                  className="hover:text-primary hover:scale-125 transform transition-all duration-300"
                >
                  <tab.icon />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-700 dark:text-white mb-4">
              Hızlı Bağlantılar
            </h3>
            <div className="space-y-2 flex flex-col">
              {footerAbout.map((tab) => (
                <Link
                  key={tab.id}
                  to={tab.to}
                  className="hover:text-zinc-400 dark:text-zinc-500 dark:hover:text-zinc-400"
                >
                  {tab.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-700 dark:text-white mb-4">
              Hızlı Bağlantılar
            </h3>
            <div className="space-y-2 flex flex-col">
              {footerSSS.map((tab) => (
                <Link
                  key={tab.id}
                  to={tab.to}
                  className="hover:text-zinc-400 dark:text-zinc-500 dark:hover:text-zinc-400"
                >
                  {tab.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-700 dark:text-white mb-4">
              Hızlı Bağlantılar
            </h3>
            <div className="space-y-2 flex flex-col">
              {footerWith.map((tab) => (
                <Link
                  key={tab.id}
                  to={tab.to}
                  className="hover:text-zinc-400 dark:text-zinc-500 dark:hover:text-zinc-400"
                >
                  {tab.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-400 dark:border-zinc-600  dark:text-zinc-300 py-4 text-sm text-center">
          <p>&copy; 2024 Doğa Turizm. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
