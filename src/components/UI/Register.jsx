import { Drawer } from "antd";
import React from "react";
import { BiLock, BiUser } from "react-icons/bi";
import { HiOutlineIdentification } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { auth, db } from "~/firebase/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { scheme } from "~/validation/scheme";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "~/redux/slices/userSlice";

const Register = ({ open, toggleDrawer, setLogInMode }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(scheme),
  });

  const registerHandle = async (data) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const userData = {
        uid: user.user.uid,
        email: user.user.email,
        displayName: data.fullName,
        phoneNumber: data.phone,
      };

      dispatch(setUser(userData));

      await addDoc(collection(db, "users"), {
        uid: user.user.uid,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        role: 0,
        createdAt: new Date(),
      });
      toast.success("Başarıyla Kayıt Olundu!");
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Drawer open={open} onClose={() => toggleDrawer(!open)} anchor="right">
      <div className="flex flex-col justify-center items-center gap-y-3">
        <h1 className="font-rubik text-3xl">Kayıt Ol</h1>
        <p className="text-zinc-700/60 text-xs font-rubik text-center">
          Buradan bilgilerini girerek sisteme kayıt olabilirsin, online bir
          şekilde otobüs biletinin rezervasyonunu gerçekleştirebilirsin.
        </p>
      </div>

      <form
        className="p-4 flex flex-col gap-y-2"
        onSubmit={handleSubmit(registerHandle)}
      >
        <div>
          <label className="font-rubik text-xs text-zinc-700">Ad Soyad</label>
          <div className="w-full flex border rounded-md focus-within:ring-2 ring-offset-2 ring-green-500 transition-all duration-200">
            <input
              type="text"
              className="outline-none px-4 rounded-md text-sm w-full peer"
              {...register("fullName")}
            />
            <span
              className={`flex justify-center items-center p-2 text-green-500 ${
                errors.fullName && "text-red-500"
              }`}
            >
              <HiOutlineIdentification size={18} />
            </span>
          </div>
        </div>
        <div>
          <label className="font-rubik text-xs text-zinc-700">
            Cep Telefonu
          </label>
          <div className="w-full flex border rounded-md focus-within:ring-2 ring-offset-2 ring-green-500 transition-all duration-200">
            <input
              type="number"
              maxLength="11"
              className="outline-none px-4 rounded-md text-sm w-full peer"
              {...register("phone", { valueAsNumber: true })}
            />
            <span
              className={`flex justify-center items-center p-2 text-green-500 ${
                errors.phone && "text-red-500"
              }`}
            >
              <IoCallOutline size={18} />
            </span>
          </div>
        </div>

        <div>
          <label className="font-rubik text-xs text-zinc-700">E-Mail</label>
          <div className="w-full flex border rounded-md focus-within:ring-2 ring-offset-2 ring-green-500 transition-all duration-200 peer">
            <input
              type="text"
              className="outline-none px-4 rounded-md text-sm w-full peer"
              {...register("email")}
            />
            <span
              className={`flex justify-center items-center p-2 text-green-500 ${
                errors.email && "text-red-500"
              }`}
            >
              <BiUser size={18} />
            </span>
          </div>
        </div>
        <div>
          <label className="font-rubik text-xs text-zinc-700">Parola</label>
          <div className="w-full flex border rounded-md focus-within:ring-2 ring-offset-2 ring-green-500 transition-all duration-200">
            <input
              type="password"
              className="outline-none px-4 rounded-md text-sm w-full peer"
              {...register("password")}
            />
            <span
              className={`flex justify-center items-center p-2 text-green-500 ${
                errors.password && "text-red-500"
              }`}
            >
              <BiLock size={18} />
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center items-center   border rounded-md bg-gradient-to-r from-green-700 to-green-500  hover:opacity-85  transition-all duration-300 cursor-pointer mt-3"
        >
          <div className="flex justify-center items-center px-4 py-2 gap-x-2 font-rubik text-green-100 text-sm">
            Kayıt Ol
          </div>
        </button>
        <span
          onClick={() => setLogInMode(true)}
          className="flex justify-center mt-2 items-center  gap-x-2 font-rubik hover:text-zinc-500 hover:underline  text-zinc-700 underline cursor-pointer text-sm"
        >
          Hesabın var mı ?
        </span>
      </form>
    </Drawer>
  );
};

export default Register;
