import { BiLogOut, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "~/firebase/firebaseConfig";
import { toast } from "react-toastify";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import DrawerComp from "../UI/DrawerComp";
import LogoBlack from "../../assets/logos/LogoBlack.png";
import LogoWhite from "~/assets/logos/Logo.png";
import MenuComp from "../UI/MenuComp";
import { setOpen } from "~/redux/slices/drawerSlice";

const NavigationBar = () => {
  const { user } = useSelector((store) => store.user);
  const { open } = useSelector((store) => store.drawer);
  const dispatch = useDispatch();

  const { theme } = useSelector((store) => store.theme);

  const exit = async () => {
    try {
      await signOut(auth);
      toast.success("Çıkış Yapılıyor...");
      setTimeout(() => {
        localStorage.removeItem("user");
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Çıkış yapılırken bir hata oluştu.");
    }
  };

  return (
    <>
      <div className="sm:w-full w-full z-20 bg-white dark:bg-gray-800  mx-auto">
        <div className="w-full py-5 flex justify-between items-center px-9 sm:px-14">
          <Link to="/">
            <img
              src={theme === "light" ? LogoBlack : LogoWhite}
              className="w-[150px] sm:w-[200px] drop-shadow-2xl"
            />
          </Link>
          <div className="flex justify-center items-center sm:gap-x-4 gap-x-2">
            {user ? (
              <Link
                to="/profile"
                className="bg-white dark:border-gray-600 dark:ring-offset-transparent dark:ring-gray-600 dark:bg-gray-700 dark:text-white border sm:p-2.5 p-1.5 rounded-full flex justify-center items-center gap-x-2 hover:ring-2 ring-offset-2 ring-primary hover:text-hoverPrimary hover:scale-105 transition-all duration-500"
              >
                <BiUser />
              </Link>
            ) : (
              <button
                onClick={() => dispatch(setOpen(!open))}
                className="bg-white dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-transparent dark:ring-gray-600 dark:text-white border sm:p-2.5 p-1.5 rounded-full flex justify-center items-center gap-x-2 hover:ring-2 ring-offset-2 ring-primary hover:text-hoverPrimary hover:scale-105 transition-all duration-500"
              >
                <BiUser />
              </button>
            )}
            {user?.admin === true && (
              <Link
                to="/admin"
                className="bg-white dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-transparent dark:ring-gray-600 dark:text-white border sm:p-2.5 p-1.5 rounded-full flex justify-center items-center gap-x-2 hover:ring-2 ring-offset-2 ring-primary hover:text-hoverPrimary hover:scale-105 transition-all duration-500"
              >
                <MdOutlineAdminPanelSettings />
              </Link>
            )}
            {user && (
              <button
                onClick={exit}
                className="bg-white dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-transparent dark:ring-gray-600 dark:text-white border sm:p-2.5 p-1.5 rounded-full flex justify-center items-center gap-x-2 hover:ring-2 ring-offset-2 ring-primary hover:text-hoverPrimary hover:scale-105 transition-all duration-500"
              >
                <BiLogOut />
              </button>
            )}
            <MenuComp />
          </div>
        </div>
      </div>
      <DrawerComp />
    </>
  );
};

export default NavigationBar;
