import { Drawer } from "antd";
import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "~/firebase/firebaseConfig";
import { toast } from "react-toastify";

const ForgotComp = ({ setForgot, open }) => {
  const [email, setEmail] = useState("");

  const sendResetEmail = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Şifre sıfırlama bağlantısı başarıyla gönderildi");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Drawer open={open} onClose={() => setForgot(false)} anchor="right">
      <div className="flex flex-col justify-center items-center gap-y-3">
        <h1 className="font-rubik text-3xl">Şifremi Unuttum</h1>
        <p className="text-zinc-700/60 text-xs font-rubik text-center">
          Buradan e-mail girerek şifreni sıfırlama bağlantısına sahip
          olabilirsin.
        </p>
      </div>

      <form className="p-4 flex flex-col gap-y-2" onSubmit={sendResetEmail}>
        <label className="font-rubik text-xs text-zinc-700">E-Mail</label>
        <div className="w-full flex border rounded-md focus-within:ring-2 ring-offset-2 ring-green-500 transition-all duration-200 peer">
          <input
            type="text"
            className="outline-none px-4 rounded-md text-sm w-full peer"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="flex justify-center items-center p-2 peer-valid:text-green-500 peer-invalid:text-red-500">
            <BiUser size={18} />
          </span>
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white font-rubik flex justify-center items-center   border rounded-md bg-gradient-to-r from-green-700 to-green-500  hover:opacity-85  transition-all duration-300 cursor-pointer mt-3"
        >
          Gönder
        </button>
        <span
          onClick={() => setForgot(false)}
          className="flex justify-center mt-2 items-center  gap-x-2 font-rubik hover:text-zinc-500 hover:underline  text-zinc-700 underline cursor-pointer text-sm"
        >
          Şifreni hatırlıyor musun?
        </span>
      </form>
    </Drawer>
  );
};

export default ForgotComp;
