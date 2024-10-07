import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Drawer } from "antd";
import { loginscheme } from "~/validation/scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { loginForm } from "~/data/data";
import { loginService } from "~/redux/slices/userSlice";
import { setOpen } from "~/redux/slices/drawerSlice";
import { useEffect } from "react";

const LoginDrawer = ({ setLogInMode, setForgot }) => {
  const dispatch = useDispatch();
  const { open } = useSelector((store) => store.drawer);
  const { isSuccess } = useSelector((store) => store.user);

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
      dispatch(loginService(data));
      toast.info("Giriş Yapılıyor...");
      dispatch(setOpen(!open));
      reset();
    } catch (error) {
      toast.error(
        "Giriş yapılırken bir hata oluştu. Lütfen bilgilerinizi kontrol edin."
      );
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Giriş Başarılı");
    }
  }, [isSuccess]);

  return (
    <Drawer
      open={open}
      onClose={() => dispatch(setOpen(!open))}
      anchor="right"
      className="dark:bg-gray-800"
    >
      <div className="flex flex-col justify-center items-center gap-y-3 ">
        <h1 className="font-rubik text-3xl dark:text-white">Giriş Yap</h1>
        <p className="text-zinc-700/60 dark:text-white text-xs font-rubik text-center">
          Buradan bilgilerini girerek sisteme giriş yapabilir, online bir
          şekilde otobüs biletinin rezervasyonunu gerçekleştirebilirsin.
        </p>
      </div>

      <form
        className="p-4 flex flex-col gap-y-2"
        onSubmit={handleSubmit(LogIn)}
      >
        {loginForm.map((input) => (
          <div key={input.id}>
            <label className="font-rubik text-xs text-zinc-700 dark:text-white">
              {input.label}
            </label>
            <div
              className={`w-full ${
                errors.email && "ring-red-500"
              } flex border rounded-md  focus-within:ring-2 ring-offset-2 dark:border-gray-600 dark:ring-offset-transparent dark:ring-gray-700 ring-green-500 transition-all duration-200 peer`}
            >
              <input
                type={input.type}
                className="outline-none dark:bg-transparent dark:text-white px-4 rounded-md text-sm w-full peer"
                {...register(input.name)}
              />
              <span
                className={`flex justify-center items-center dark:text-white p-2 ${
                  errors.email && "text-red-500"
                }`}
              >
                {input.icon && <input.icon size={18} />}
              </span>
            </div>
          </div>
        ))}

        <div
          onClick={() => setForgot(true)}
          className="w-full justify-end items-center flex my-2"
        >
          <span className="text-xs underline cursor-pointer font-rubik dark:text-white">
            Şifremi Unuttum
          </span>
        </div>
        <div className="flex  gap-x-4">
          <div
            onClick={() => toast.info("Yapım Aşamasında", { autoClose: 700 })}
            className="w-full cursor-not-allowed flex justify-center items-center dark:border-gray-600 border rounded-md hover:bg-zinc-100 transition-all duration-300"
          >
            <span className="flex justify-center items-center p-2 gap-x-2 ">
              <div className="w-[20px] flex justify-center items-center ">
                <FcGoogle size={18} />
              </div>
            </span>
          </div>
          <div
            onClick={() => toast.info("Yapım Aşamasında", { autoClose: 700 })}
            className="w-full cursor-not-allowed flex justify-center items-center dark:border-gray-600 border rounded-md  hover:bg-zinc-100 transition-all duration-300"
          >
            <span className="flex justify-center items-center p-2 gap-x-2 ">
              <div className="w-[20px] flex justify-center items-center ">
                <BsApple size={18} />
              </div>
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white font-rubik flex justify-center items-center   border rounded-md bg-gradient-to-r from-green-700 to-green-500  hover:opacity-85 dark:from-gray-950 dark:to-gray-900 dark:border-gray-700  transition-all duration-300 cursor-pointer mt-3"
        >
          Giriş Yap
        </button>
        <span
          onClick={() => setLogInMode(false)}
          className="flex justify-center mt-2 items-center  gap-x-2 font-rubik hover:text-zinc-500 hover:underline  text-zinc-700 underline cursor-pointer text-sm dark:text-white"
        >
          Henüz kayıt olmadın mı ?
        </span>
      </form>
    </Drawer>
  );
};

export default LoginDrawer;
