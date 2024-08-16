import { Drawer } from "antd";

import React from "react";
import { BiLock, BiUser } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

const DrawerComp = ({ open, setOpen }) => {
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer open={open} onClose={() => toggleDrawer(!open)} anchor="right">
      <div className="flex flex-col items-center justify-center gap-y-2">
        <h1 className="font-rubik text-3xl">Giriş Yap</h1>
        <p className="text-zinc-700/60 text-xs font-rubik text-center">
          Buradan bilgilerini girerek sisteme giriş yapabilir, online bir
          şekilde otobüs biletinin rezervasyonunu gerçekleştirebilirsin.
        </p>
      </div>
      <form className="p-4 flex flex-col gap-y-2 ">
        <label className="font-rubik text-xs text-zinc-700">E-Mail</label>
        <div className="w-full flex border rounded-md  ">
          <input
            type="text"
            className="outline-none px-4 rounded-md text-sm  w-full"
          />
          <span className="flex justify-center items-center p-2  ">
            <BiUser size={18} />
          </span>
        </div>
        <label className="font-rubik text-xs text-zinc-700">Parola</label>
        <div className="w-full flex border rounded-md">
          <input
            type="password"
            className="outline-none px-4 rounded-md text-sm w-full"
          />
          <span className="flex justify-center items-center p-2 ">
            <BiLock size={18} />
          </span>
        </div>
        <div className="w-full justify-end items-center flex my-2">
          <span className="text-xs underline cursor-pointer font-rubik">
            Şifremi Unuttum
          </span>
        </div>
        <div className="flex  gap-x-4">
          <div className="w-full flex justify-center items-center  border rounded-md cursor-pointer">
            <span className="flex justify-center items-center p-2 gap-x-2 ">
              <div className="w-[20px] flex justify-center items-center ">
                <FcGoogle size={18} />
              </div>
            </span>
          </div>
          <div className="w-full flex justify-center items-center  border rounded-md cursor-pointer">
            <span className="flex justify-center items-center p-2 gap-x-2 ">
              <div className="w-[20px] flex justify-center items-center ">
                <BsApple size={18} />
              </div>
            </span>
          </div>
        </div>
        <div className="w-full flex justify-center items-center  border rounded-md bg-green-500 cursor-pointer mt-3">
          <span className="flex justify-center items-center px-4 py-2 gap-x-2 font-rubik  text-green-100 text-sm">
            Giriş Yap
          </span>
        </div>
        <span className="flex justify-center mt-2 items-center  gap-x-2 font-rubik  text-zinc-700 underline cursor-pointer text-sm">
          Henüz kayıt olmadın mı ?
        </span>
      </form>
    </Drawer>
  );
};

export default DrawerComp;
