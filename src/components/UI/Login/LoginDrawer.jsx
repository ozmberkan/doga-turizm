import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Drawer } from "antd";
import { loginscheme } from "~/validation/scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginForm } from "~/data/data";
import { auth, db } from "~/firebase/firebaseConfig";
import { setUser } from "~/redux/slices/userSlice";
import { doc, getDoc } from "firebase/firestore";

const LoginDrawer = ({ open, toggleDrawer, setLogInMode, setForgot }) => {
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();

  const {
    register,
    handleSubmit,
    formState: { errors },
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

      const userRef = doc(db, "users", user.uid);

      const userDoc = await getDoc(userRef);

      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        phoneNumber: userDoc.data()?.phoneNumber || null,
        emailVerified: user.emailVerified,
        admin: userDoc.data()?.admin || false,
        ownedTickets: userDoc.data()?.ownedTickets || [],
        fullTickets: userDoc.data()?.fullTickets || [],
      };

      toast.success("Başarıyla Giriş Yaptınız!");

      setTimeout(() => {
        dispatch(setUser(userData));
      }, 1000);
    } catch (error) {
      toast.error(
        "Giriş yapılırken bir hata oluştu. Lütfen bilgilerinizi kontrol edin."
      );
    }
  };

  const googleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch(setUser(result.user));
      toast.success("Google ile giriş başarılı.");
    } catch (error) {
      toast.error("Google ile giriş yapılırken hata oluştu");
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
        {loginForm.map((input) => (
          <div key={input.id}>
            <label className="font-rubik text-xs text-zinc-700">
              {input.label}
            </label>
            <div
              className={`w-full ${
                errors.email && "ring-red-500"
              } flex border rounded-md focus-within:ring-2 ring-offset-2 ring-green-500 transition-all duration-200 peer`}
            >
              <input
                type={input.type}
                className="outline-none px-4 rounded-md text-sm w-full peer"
                {...register(input.name)}
              />
              <span
                className={`flex justify-center items-center p-2 ${
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
          <span className="text-xs underline cursor-pointer font-rubik">
            Şifremi Unuttum
          </span>
        </div>
        <div className="flex  gap-x-4">
          <div
            onClick={googleSignIn}
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
