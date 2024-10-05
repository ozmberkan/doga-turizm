import { Drawer } from "antd";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { registerscheme } from "~/validation/scheme";
import { useDispatch, useSelector } from "react-redux";
import { registerService } from "~/redux/slices/userSlice";
import { registerForm } from "~/data/data";
import { setOpen } from "~/redux/slices/drawerSlice";

const RegisterDrawer = ({ setLogInMode }) => {
  const dispatch = useDispatch();
  const { open } = useSelector((store) => store.drawer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerscheme),
  });

  const registerHandle = async (data) => {
    try {
      dispatch(registerService(data));
    } catch (error) {
      toast.error(
        "Kayıt oluşturulurken bir hata oluştu. Bilgileri kontrol ediniz."
      );
    }
  };

  return (
    <Drawer
      className="dark:bg-gray-800"
      open={open}
      onClose={() => dispatch(setOpen(!open))}
      anchor="right"
    >
      <div className="flex flex-col justify-center items-center gap-y-3">
        <h1 className="font-rubik text-3xl dark:text-white">Kayıt Ol</h1>
        <p className="text-zinc-700/60 dark:text-white text-xs font-rubik text-center">
          Buradan bilgilerini girerek sisteme kayıt olabilirsin, online bir
          şekilde otobüs biletinin rezervasyonunu gerçekleştirebilirsin.
        </p>
      </div>

      <form
        className="p-4 flex flex-col gap-y-2"
        onSubmit={handleSubmit(registerHandle)}
      >
        {registerForm.map((input) => (
          <div key={input.id}>
            <label className="font-rubik text-xs text-zinc-700 dark:text-white">
              {input.label}
            </label>
            <div
              className={`w-full ${
                errors[input.name] && "ring-red-500"
              }  flex border dark:border-gray-600 rounded-md focus-within:ring-2 ring-offset-2 dark:ring-offset-transparent dark:ring-gray-700 dark:bg-tr ring-green-500 transition-all duration-200`}
            >
              <input
                type={input.type}
                className="outline-none dark:bg-transparent px-4 rounded-md dar text-sm w-full peer"
                {...register(input.name)}
              />
              <span
                className={`flex justify-center items-center p-2 text-green-500 ${
                  errors[input.name] && "text-red-500"
                }`}
              >
                {input.icon && <input.icon size={18} />}
              </span>
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="w-full flex justify-center items-center   border rounded-md bg-gradient-to-r from-green-700 to-green-500  hover:opacity-85  transition-all dark:from-gray-950 dark:to-gray-900 dark:border-gray-700   duration-300 cursor-pointer mt-3"
        >
          <div className="flex justify-center items-center px-4 py-2 gap-x-2 font-rubik text-green-100 text-sm">
            Kayıt Ol
          </div>
        </button>
        <span
          onClick={() => setLogInMode(true)}
          className="flex justify-center mt-2 items-center  gap-x-2 font-rubik hover:text-zinc-500 hover:underline dark:text-white  text-zinc-700 underline cursor-pointer text-sm"
        >
          Hesabın var mı ?
        </span>
      </form>
    </Drawer>
  );
};

export default RegisterDrawer;
