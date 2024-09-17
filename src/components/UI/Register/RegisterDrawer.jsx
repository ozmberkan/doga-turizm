import { Drawer } from "antd";
import { auth, db } from "~/firebase/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { registerscheme } from "~/validation/scheme";
import { useDispatch } from "react-redux";
import { setUser } from "~/redux/slices/userSlice";
import { registerForm } from "~/data/data";
import { doc, setDoc } from "firebase/firestore";

const RegisterDrawer = ({ open, toggleDrawer, setLogInMode }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerscheme),
  });

  const registerHandle = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: data.displayName,
      });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        phoneNumber: data.phoneNumber,
        admin: false,
        ownedTickets: [],
        fullTickets: [],
        hasBeenLogin: false,
      });

      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        phoneNumber: data.phoneNumber,
        emailVerified: user.emailVerified,
        admin: false,
        ownedTickets: [],
        fullTickets: [],
        hasBeenLogin: false,
      };

      setTimeout(() => {
        dispatch(setUser(userData));
      }, 500);

      toast.success("Başarıyla Kayıt Oluşturuldu!");
    } catch (error) {
      toast.error(
        "Kayıt oluşturulurken bir hata oluştu. Bilgileri kontrol ediniz."
      );
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
        {registerForm.map((input) => (
          <div key={input.id}>
            <label className="font-rubik text-xs text-zinc-700">
              {input.label}
            </label>
            <div
              className={`w-full ${
                errors[input.name] && "ring-red-500"
              }  flex border rounded-md focus-within:ring-2 ring-offset-2 ring-green-500 transition-all duration-200`}
            >
              <input
                type={input.type}
                className="outline-none px-4 rounded-md text-sm w-full peer"
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

export default RegisterDrawer;
