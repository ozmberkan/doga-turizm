import { signOut } from "firebase/auth";
import { BiHome, BiLogOut } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "~/firebase/firebaseConfig";
import Logo from "~/assets/logos/LogoBlack.png";
import LogoLight from "~/assets/logos/Logo.png";
import toast from "react-hot-toast";

const AdminNavbar = () => {
  const { theme } = useSelector((store) => store.theme);
  const { user } = useSelector((store) => store.user);

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
    <div className="w-full border-b bg-white dark:bg-gray-800 dark:border-gray-700   py-3 px-6 flex justify-between items-center">
      <Link to="/">
        <img
          src={theme === "dark" ? LogoLight : Logo}
          className="lg:w-44 w-32"
        />
      </Link>
      <div className="flex items-center gap-x-2 sm:gap-x-5">
        <h1 className="px-2 py-1 text-xs rounded-md lg:text-sm border hidden lg:flex justify-center items-center gap-x-2 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-800 text-black bg-white transition-all duration-100">
          {user?.displayName}
        </h1>
        <Link
          to="/"
          className="p-2 rounded-md hover:bg-primary hover:text-white border flex justify-center items-center gap-x-2 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-800 text-black bg-white transition-all duration-100"
        >
          <BiHome />
        </Link>
        <button
          onClick={exit}
          className="p-2 rounded-md hover:bg-primary hover:text-white border  flex justify-center items-center gap-x-2 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-800 text-black bg-white transition-all duration-100"
        >
          <BiLogOut />
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;
