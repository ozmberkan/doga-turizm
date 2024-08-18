import React, { useEffect, useState } from "react";
import { BiMenu, BiUser } from "react-icons/bi";
import DrawerComp from "./UI/DrawerComp";
import MenuComp from "./UI/MenuComp";
import { storage } from "../../firebase/firebaseConfig";
import { ref, getDownloadURL } from "firebase/storage";

const Navbar = ({ open, setOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logo, setLogo] = useState("");

  useEffect(() => {
    const storageRef = ref(
      storage,
      "gs://dogaturizm-5858.appspot.com/logos/Logo.png"
    );

    getDownloadURL(storageRef)
      .then((url) => {
        setLogo(url);
      })
      .catch((error) => {
        console.error(
          "Görsel Veritabanından İstekte Bulunurken Hata Meydana Geldi!",
          error
        );
      });
  }, []);

  return (
    <>
      <div className="container sm:w-2/3 w-full z-20 mx-auto ">
        <div className="w-full py-5 flex justify-between items-center px-9 sm:px-14">
          <img src={logo} className="w-[150px] sm:w-[200px] drop-shadow-2xl" />
          <div className="flex justify-center items-center gap-x-4">
            <button
              onClick={() => setOpen(!open)}
              className="bg-white border p-2 rounded-full flex justify-center items-center gap-x-2 hover:bg-zinc-200 hover:scale-105 transition-all duration-500"
            >
              <BiUser />
            </button>
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center h-10 focus:outline-none"
              >
                <BiMenu
                  size={30}
                  className="text-white cursor-pointer hover:text-green-400 transition-all duration-500"
                />
              </button>
              {menuOpen && <MenuComp setMenuOpen={setMenuOpen} />}
            </div>
          </div>
        </div>
      </div>
      <DrawerComp open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
