import { useState } from "react";
import { BiLogOut, BiMenu, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "~/firebase/firebaseConfig";
import { toast } from "react-toastify";
import DrawerComp from "../UI/DrawerComp";
import MenuComp from "../UI/MenuComp";
import LogoBlack from "../../assets/logos/LogoBlack.png";
const NavigationBar = () => {
  const { user } = useSelector((store) => store.user);
  const [open, setOpen] = useState(false); // drawer
  const [menuOpen, setMenuOpen] = useState(false); // dropdrown

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
      <div className="sm:w-full w-full z-20 bg-white border-y mx-auto">
        <div className="w-full py-5 flex justify-between items-center px-9 sm:px-14">
          <Link to="/">
            <img
              src={LogoBlack}
              className="w-[150px] sm:w-[200px] drop-shadow-2xl"
            />
          </Link>
          <div className="flex justify-center items-center gap-x-4">
            {user ? (
              <Link
                to="/profile"
                className="bg-white border p-2 rounded-full flex justify-center items-center gap-x-2 hover:bg-zinc-200 hover:scale-105 transition-all duration-500"
              >
                <BiUser />
              </Link>
            ) : (
              <button
                onClick={() => setOpen(!open)}
                className="bg-white border p-2 rounded-full flex justify-center items-center gap-x-2 hover:bg-zinc-200 hover:scale-105 transition-all duration-500"
              >
                <BiUser />
              </button>
            )}
            {user && (
              <button
                onClick={exit}
                className="bg-white border p-2 rounded-full flex justify-center items-center gap-x-2 hover:bg-zinc-200 hover:scale-105 transition-all duration-500"
              >
                <BiLogOut />
              </button>
            )}

            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center h-10 focus:outline-none"
              >
                <BiMenu
                  size={30}
                  className="text-black cursor-pointer hover:text-green-400 transition-all duration-500"
                />
              </button>
              {menuOpen && <MenuComp />}
            </div>
          </div>
        </div>
      </div>
      <DrawerComp open={open} setOpen={setOpen} />
    </>
  );
};

export default NavigationBar;
