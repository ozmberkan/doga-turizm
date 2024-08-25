import React from "react";
import { BiLock, BiUser } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Drawer } from "antd";
import { loginscheme } from "~/validation/scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  OAuthProvider,
} from "firebase/auth";
import { auth } from "~/firebase/firebaseConfig";
import { setUser } from "~/redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const LoginDrawer = ({ open, toggleDrawer, setLogInMode, setForgot }) => {
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginscheme),
  });

  const LogIn = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        phoneNumber: user.phoneNumber,
      };

      if (user.uid === "pw7MMy1Q3NQtuBf9ywPQ6yBy9r43") {
        userData.role = 1;
      }

      toast.success("Giriş Başarılı");
      setTimeout(() => {
        dispatch(setUser(userData));
        toggleDrawer(false);
        reset();
      }, 1000);
    } catch (error) {
      toast.error(
        "Lütfen bilgileri kontrol ediniz. Sistemde belirtilen kullanıcı bulunamadı!"
      );
    }
  };

  const googleLogIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        phoneNumber: user.phoneNumber,
      };

      toast.success("Google ile giriş başarılı, yönlendiriliyorsunuz...");
      setTimeout(() => {
        dispatch(setUser(userData));
        toggleDrawer(false);
      }, 1000);
      reset();
    } catch (error) {
      toast.error(
        "Google ile giriş yapılırken hata oluştu. Lütfen daha sonra tekrar deneyiniz!"
      );
    }
  };

  return (
    <Drawer open={open} onClose={() => toggleDrawer(!open)} anchor="right">
      <div className="flex flex-col justify-center items-center gap-y-3">
        <h1 className="font-rubik text-3xl">Giriş Yap</h1>
        <p className="text-zinc-700/60 text-xs font-rubik text-center">
          Buradan bilgilerini girerek sisteme giriş yapabilir, online bir
          şekilde otobüs biletinin rezervasyonunu gerçekleştirebilirsin.
        </p>
      </div>

      <form
        className="p-4 flex flex-col gap-y-2"
        onSubmit={handleSubmit(LogIn)}
      >
        <label className="font-rubik text-xs text-zinc-700">E-Mail</label>
        <div className="w-full flex border rounded-md focus-within:ring-2 ring-offset-2 ring-green-500 transition-all duration-200 peer">
          <input
            type="text"
            className="outline-none px-4 rounded-md text-sm w-full peer"
            {...register("email")}
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
            {...register("password")}
          />
          <span className="flex justify-center items-center p-2 peer-valid:text-green-500 peer-invalid:text-red-500">
            <BiLock size={18} />
          </span>
        </div>

        <div
          onClick={() => setForgot(true)}
          className="w-full justify-end items-center flex my-2"
        >
          <span className="text-xs underline cursor-pointer font-rubik">
            Şifremi Unuttum
          </span>
        </div>
        <div className="flex  gap-x-4">
          <div
            onClick={googleLogIn}
            className="w-full flex justify-center items-center  border rounded-md cursor-pointer hover:bg-zinc-100 transition-all duration-300"
          >
            <span className="flex justify-center items-center p-2 gap-x-2 ">
              <div className="w-[20px] flex justify-center items-center ">
                <FcGoogle size={18} />
              </div>
            </span>
          </div>
          <div className="w-full cursor-not-allowed flex justify-center items-center  border rounded-md  hover:bg-zinc-100 transition-all duration-300">
            <span className="flex justify-center items-center p-2 gap-x-2 ">
              <div className="w-[20px] flex justify-center items-center ">
                <BsApple size={18} />
              </div>
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white font-rubik flex justify-center items-center   border rounded-md bg-gradient-to-r from-green-700 to-green-500  hover:opacity-85  transition-all duration-300 cursor-pointer mt-3"
        >
          Giriş Yap
        </button>
        <span
          onClick={() => setLogInMode(false)}
          className="flex justify-center mt-2 items-center  gap-x-2 font-rubik hover:text-zinc-500 hover:underline  text-zinc-700 underline cursor-pointer text-sm"
        >
          Henüz kayıt olmadın mı ?
        </span>
      </form>
    </Drawer>
  );
};

export default LoginDrawer;
