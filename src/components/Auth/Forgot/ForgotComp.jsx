import { Drawer } from "antd";
import { BiUser } from "react-icons/bi";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "~/firebase/firebaseConfig";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const ForgotComp = ({ setForgot }) => {
  const { open } = useSelector((store) => store.drawer);

  const { register, handleSubmit, reset } = useForm();

  const sendResetEmail = async (data) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      toast.success("Şifre sıfırlama bağlantısı e-mail adresine gönderildi.");
      reset();
    } catch (error) {
      toast.error("Şifre sıfırlama bağlantısı gönderilemedi. Yeniden deneyin.");
    }
  };

  return (
    <Drawer
      className="dark:bg-gray-800"
      open={open}
      onClose={() => setForgot(false)}
      anchor="right"
    >
      <div className="flex flex-col justify-center items-center gap-y-3">
        <h1 className="font-rubik text-3xl dark:text-white">Şifremi Unuttum</h1>
        <p className="text-zinc-700/60 dark:text-white text-xs font-rubik text-center">
          Buradan e-mail girerek şifreni sıfırlama bağlantısına sahip
          olabilirsin.
        </p>
      </div>

      <form
        className="p-4 flex flex-col gap-y-2"
        onSubmit={handleSubmit(sendResetEmail)}
      >
        <label className="font-rubik text-xs text-zinc-700 dark:text-white">
          E-Mail
        </label>
        <div className="w-full flex border rounded-md focus-within:ring-2 dark:ring-offset-transparent dark:ring-gray-700 ring-offset-2 ring-green-500 transition-all duration-200 peer">
          <input
            type="text"
            className="outline-none dark:text-white dark:bg-transparent px-4 rounded-md text-sm w-full peer"
            {...register("email", { required: true })}
          />
          <span className="flex justify-center items-center p-2 peer-valid:text-green-500 peer-invalid:text-red-500">
            <BiUser size={18} />
          </span>
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white font-rubik flex justify-center items-center   border rounded-md bg-gradient-to-r from-green-700 to-green-500  hover:opacity-85 dark:from-gray-950 dark:to-gray-900 dark:border-gray-700    transition-all duration-300 cursor-pointer mt-3"
        >
          Gönder
        </button>
        <button
          onClick={() => setForgot(false)}
          type="button"
          className="flex justify-center mt-2 items-center  gap-x-2 font-rubik hover:text-zinc-500 hover:underline dark:text-white text-zinc-700 underline cursor-pointer text-sm"
        >
          Şifreni hatırlıyor musun?
        </button>
      </form>
    </Drawer>
  );
};

export default ForgotComp;
