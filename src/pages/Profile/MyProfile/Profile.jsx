import { useSelector, useDispatch } from "react-redux";
import { BiMailSend } from "react-icons/bi";
import { sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "~/firebase/firebaseConfig"; // Ensure Firestore is initialized in your firebaseConfig
import { toast } from "react-toastify";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import { updateUserProfile } from "~/redux/slices/userSlice";

const Profile = () => {
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

  const renderInputField = (label, name, value) => (
    <div className="flex flex-col gap-y-2">
      <label className="text-xs text-zinc-500/60">{label}</label>
      <div className="flex gap-x-1.5">
        <input
          type="text"
          name={name}
          className={`rounded-md border px-6 py-2 outline-none ${
            isEditMode ? "bg-white" : "bg-[#f9f9f9]"
          }`}
          value={value || ""}
          onChange={handleChange}
          disabled={!isEditMode}
        />
      </div>
    </div>
  );

  return (
    <div className="flex w-full gap-x-5 sm:flex-row flex-col gap-y-5">
      <div className="w-full flex flex-col gap-y-5 ">
        <div className="p-5 bg-white rounded-md border flex flex-col gap-y-5 relative flex-grow">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-rubik mb-3">Bilgilerini Görüntüle</h1>
            {!isEditMode ? (
              <button
                onClick={() => setIsEditMode(!isEditMode)}
                className="rounded-md sm:w-1/12 px-2 sm:px-0 py-1 bg-green-200 text-green-500 flex justify-center items-center cursor-pointer gap-x-3"
              >
                <span className="sm:flex hidden">Düzenle</span>{" "}
                <CiEdit size={25} />
              </button>
            ) : (
              <div className="flex gap-x-3">
                <button
                  onClick={saveProfile}
                  className="rounded-md px-4 py-1 bg-green-200 text-green-500 flex justify-center items-center cursor-pointer gap-x-3"
                >
                  Kaydet
                </button>
                <button
                  onClick={() => setIsEditMode(false)}
                  className="rounded-md px-4 py-1 bg-red-100 text-red-500 flex justify-center items-center cursor-pointer gap-x-3"
                >
                  Vazgeç
                </button>
              </div>
            )}
          </div>
          <form className="sm:flex sm:flex-row sm:gap-x-5 flex flex-col gap-y-3 ">
            {user.photoURL && (
              <img
                src={user.photoURL}
                className="w-12 h-12 rounded-md border mt-auto"
              />
            )}
            {renderInputField(
              "Ad Soyad",
              "displayName",
              profileData.displayName
            )}
            {renderInputField(
              "Cep Telefonu",
              "phoneNumber",
              profileData.phoneNumber
                ? profileData.phoneNumber
                : "Cep telefonu mevcut değil!"
            )}
            {renderInputField("E-Posta", "email", profileData.email)}

            <div className="w-full flex flex-col gap-y-2">
              <label className="text-xs text-zinc-500/60">
                Yeni şifre oluşturmak mı istiyorsun ?
              </label>
              <div className="bg-[#f9f9f9] rounded-md border px-4 py-2 flex items-center justify-between">
                Şifre Değiştir
                <button
                  onClick={newPassword}
                  className="bg-green-200 text-green-500 rounded-md flex justify-center items-center px-4"
                >
                  <BiMailSend size={25} />
                </button>
              </div>
            </div>
            {user.emailVerified === false ? (
              <div className="w-full flex gap-x-2">
                <div className="w-full flex flex-col gap-y-2">
                  <label className="text-xs text-zinc-500/60">
                    E-Postanı doğrulaman gerek!
                  </label>
                  <div className="bg-[#f9f9f9] rounded-md border px-4 py-2 flex items-center justify-between">
                    E-Posta Doğrula
                    <button
                      onClick={emailVer}
                      className="bg-green-200 text-green-500 rounded-md flex justify-center items-center px-4"
                    >
                      <BiMailSend size={25} />
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
