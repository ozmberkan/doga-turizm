import React from "react";
import { BiLock, BiUser } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Drawer } from "antd";
const LoginDrawer = ({ open, toggleDrawer, setLogInMode }) => {
  return (
    <Drawer open={open} onClose={() => toggleDrawer(!open)} anchor="right">
      <div className="flex flex-col justify-center items-center gap-y-3">
        <h1 className="font-rubik text-3xl">Giriş Yap</h1>
        <p className="text-zinc-700/60 text-xs font-rubik text-center">
          Buradan bilgilerini girerek sisteme giriş yapabilir, online bir
          şekilde otobüs biletinin rezervasyonunu gerçekleştirebilirsin.
        </p>
      </div>

      <form className="p-4 flex flex-col gap-y-2">
        <label className="font-rubik text-xs text-zinc-700">E-Mail</label>
        <div className="w-full flex border rounded-md focus-within:ring-2 ring-offset-2 ring-green-500 transition-all duration-200 peer">
          <input
            type="text"
            className="outline-none px-4 rounded-md text-sm w-full peer"
            required
          />
          <span className="flex justify-center items-center p-2 peer-valid:text-green-500 peer-invalid:text-red-500">
            <BiUser size={18} />
          </span>
        </div>
        <label className="font-rubik text-xs text-zinc-700">Parola</label>
        <div className="w-full flex border rounded-md focus-within:ring-2 ring-offset-2 ring-green-500 transition-all duration-200">
          <input
            type="password"
            className="outline-none px-4 rounded-md text-sm w-full peer"
            required
          />
          <span className="flex justify-center items-center p-2 peer-valid:text-green-500 peer-invalid:text-red-500">
            <BiLock size={18} />
          </span>
        </div>

        <div className="w-full justify-end items-center flex my-2">
          <span className="text-xs underline cursor-pointer font-rubik">
            Şifremi Unuttum
          </span>
        </div>
        <div className="flex  gap-x-4">
          <div className="w-full flex justify-center items-center  border rounded-md cursor-pointer hover:bg-zinc-100 transition-all duration-300">
            <span className="flex justify-center items-center p-2 gap-x-2 ">
              <div className="w-[20px] flex justify-center items-center ">
                <FcGoogle size={18} />
              </div>
            </span>
          </div>
          <div className="w-full flex justify-center items-center  border rounded-md cursor-pointer hover:bg-zinc-100 transition-all duration-300">
            <span className="flex justify-center items-center p-2 gap-x-2 ">
              <div className="w-[20px] flex justify-center items-center ">
                <BsApple size={18} />
              </div>
            </span>
          </div>
        </div>
        <div className="w-full flex justify-center items-center   border rounded-md bg-gradient-to-r from-green-700 to-green-500  hover:opacity-85  transition-all duration-300 cursor-pointer mt-3">
          <span className="flex justify-center items-center px-4 py-2 gap-x-2 font-rubik text-green-100 text-sm">
            Giriş Yap
          </span>
        </div>
        <button
          onClick={() => setLogInMode(false)}
          className="flex justify-center mt-2 items-center  gap-x-2 font-rubik hover:text-zinc-500 hover:underline  text-zinc-700 underline cursor-pointer text-sm"
        >
          Henüz kayıt olmadın mı ?
        </button>
      </form>
    </Drawer>
  );
};

export default LoginDrawer;
