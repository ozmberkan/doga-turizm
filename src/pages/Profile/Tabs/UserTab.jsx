import { BiMailSend } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "~/firebase/firebaseConfig";
import { toast } from "react-toastify";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import { updateUserProfile } from "~/redux/slices/userSlice";
import { FiUser } from "react-icons/fi";
import { FaRegSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { myProfileInputs } from "~/data/data";

const UserTab = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [isEditMode, setIsEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    displayName: user.displayName,
    phoneNumber: user.phoneNumber,
    email: user.email,
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    try {
      const userDoc = doc(db, "users", user.uid);
      await updateDoc(userDoc, {
        displayName: profileData.displayName,
        phoneNumber: profileData.phoneNumber,
        email: profileData.email,
      });

      localStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          displayName: profileData.displayName,
          phoneNumber: profileData.phoneNumber,
          email: profileData.email,
        })
      );

      toast.success("Profil başarıyla güncellendi.");
      dispatch(updateUserProfile(profileData));
      setIsEditMode(false);
    } catch (error) {
      toast.error("Profil güncellenirken bir hata oluştu.");
    }
  };

  const emailVer = async (e) => {
    e.preventDefault();
    try {
      await sendEmailVerification(auth.currentUser);
      toast.success(
        "E-Posta Doğrulama Maili Gönderildi. Lütfen e-posta kutunuzu kontrol ediniz."
      );
    } catch (error) {
      toast.error(
        "E-Posta Doğrulama Maili Gönderilirken bir hata oluştu. Sürekli istek algılandı."
      );
    }
  };

  const newPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, user.email);
      toast.success("Şifre Değiştirme Maili Gönderildi.");
    } catch (error) {
      toast.error(
        "Şifre Değiştirme Maili Gönderilirken bir hata oluştu." + error
      );
    }
  };

  return (
    <div className="p-5  rounded-md dark:border-gray-700 border flex flex-col gap-y-5 relative flex-grow">
      <div className="flex justify-between sm:items-center items-baseline">
        <h1 className="sm:text-2xl text-base font-medium  mb-3 flex justify-center items-center gap-x-2 dark:text-white">
          <FiUser />
          Kişisel Bilgilerim
        </h1>
        {!isEditMode ? (
          <button
            onClick={() => setIsEditMode(!isEditMode)}
            className="rounded-md dark:bg-gray-800 dark:border-gray-700 dark:border dark:text-gray-500 dark:hover:text-white  hover:bg-primary hover:text-white transition-colors duration-300 sm:w-1/12 px-2 sm:px-0 py-1 bg-green-200 text-green-500 flex justify-center items-center cursor-pointer gap-x-3"
          >
            <span className="sm:flex hidden ">Düzenle</span> <CiEdit />
          </button>
        ) : (
          <div className="flex gap-x-3">
            <button
              onClick={saveProfile}
              className="rounded-md px-2 dark:bg-gray-800 dark:border-gray-700 dark:border dark:text-gray-500 dark:hover:text-white transition-colors sm:px-4 py-1 bg-green-200 text-green-500 flex justify-center items-center cursor-pointer gap-x-3"
            >
              <FaRegSave />
              <span className="sm:flex hidden">Kaydet</span>
            </button>
            <button
              onClick={() => setIsEditMode(false)}
              className="rounded-md dark:bg-gray-800 dark:border-gray-700 dark:border dark:text-gray-500 dark:hover:text-white transition-colors  px-2 sm:px-4 py-1 bg-red-100 text-red-500 flex justify-center items-center cursor-pointer gap-x-3"
            >
              <MdCancel />
              <span className="sm:flex hidden">Vazgeç</span>
            </button>
          </div>
        )}
      </div>
      <form className="grid sm:grid-cols-2 grid-cols-1 gap-5 ">
        {myProfileInputs.map((input) => (
          <div key={input.id} className="flex flex-col gap-y-2">
            <label className="text-xs text-zinc-500/60 dark:text-white">
              {input.label}
            </label>
            <input
              type={input.type}
              name={input.name}
              value={`${profileData[input.name]}`}
              onChange={handleChange}
              disabled={!isEditMode}
              className={`rounded-md border dark:border-gray-700 px-6 py-2 outline-none w-full ${
                isEditMode
                  ? "bg-white dark:bg-gray-800 dark:text-white"
                  : "bg-[#f9f9f9] dark:bg-gray-700 dark:text-white"
              }`}
            />
          </div>
        ))}

        <div className="w-full flex flex-col gap-y-2">
          <label className="text-xs text-zinc-500/60 dark:text-white">
            Yeni şifre oluşturmak mı istiyorsun ?
          </label>
          <div className="bg-[#f9f9f9] dark:bg-gray-800 dark:border-gray-700 dark:text-white rounded-md border px-4 py-2 flex items-center justify-between">
            Şifre Değiştir
            <button
              onClick={newPassword}
              className="bg-green-200 dark:bg-gray-700 dark:text-gray-500 transition-colors dark:hover:text-white text-green-500 rounded-md flex justify-center items-center px-4"
            >
              <BiMailSend size={25} />
            </button>
          </div>
        </div>
        {user.emailVerified === false ? (
          <div className="w-full flex gap-x-2">
            <div className="w-full flex flex-col gap-y-2">
              <label className="text-xs text-zinc-500/60 dark:text-white">
                E-Postanı doğrulaman gerek!
              </label>
              <div className="bg-[#f9f9f9] dark:bg-gray-800 dark:border-gray-700 dark:text-white rounded-md border px-4 py-2 flex items-center justify-between">
                E-Posta Doğrula
                <button
                  onClick={emailVer}
                  className="bg-green-200 dark:bg-gray-700 dark:text-gray-500 transition-colors dark:hover:text-white text-green-500 rounded-md flex justify-center items-center px-4"
                >
                  <BiMailSend size={25} />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default UserTab;
