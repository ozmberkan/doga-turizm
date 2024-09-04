import {
  socialMedia,
  footerAbout,
  footerSSS,
  footerWith,
  downloadImage,
} from "../../data/data";
import LogoBlack from "../../assets/logos/LogoBlack.png";
import { Link } from "react-router-dom";

const FooterSection = ({ title, items }) => (
  <div className="flex flex-col gap-y-5 sm:items-start items-center py-5 w-full sm:w-auto sm:py-0 border-b sm:border-none">
    <h1 className="text-md underline">{title}</h1>
    <ul className="flex flex-col items-start gap-y-2 w-full ">
      {items.map((item, i) => (
        <Link
          to={item.to}
          key={i}
          className="p-2 text-sm bg-white rounded-md border w-full sm:min-w-[160px] flex gap-x-2 items-center cursor-pointer hover:bg-green-500 hover:text-white transition-colors duration-100"
        >
          {item.icon && <item.icon size={18} />}
          {item.title || item.name}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = ({ footerWidth }) => {
  return (
    <div
      className={`w-full  sm:bg-white rounded-t-xl mt-5 border shadow-xl sm:${footerWidth} mx-auto pt-5 pb-0 px-5 flex flex-col gap-y-6 `}
    >
      <div className="sm:grid sm:grid-cols-5  flex flex-col justify-center items-center sm:place-items-start  p-5">
        <div className="flex flex-col">
          <img src={LogoBlack} alt="" className="w-44 mb-3" />
          <div className="flex flex-col gap-y-3">
            {downloadImage.map((dItem, i) => (
              <img key={i} src={dItem} alt="" className="w-40" />
            ))}
          </div>
        </div>
        <FooterSection title="Bizi Keşfet" items={footerAbout} />
        <FooterSection title="Yardıma İhtiyacın Var Mı?" items={footerSSS} />
        <FooterSection title="İş Ortağımız Ol" items={footerWith} />
        <FooterSection title="Sosyal Medya" items={socialMedia} />
      </div>
      <div className="col-span-1 sm:col-span-5 text-zinc-500 text-left  text-sm border-t py-2 px-5">
        © 2024 Doğa Turizm. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
